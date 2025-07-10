package dsw.projeto_rest.user;

import java.net.URI;
import java.util.List;

import java.util.Optional;

import org.mindrot.jbcrypt.BCrypt;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import dsw.projeto_rest.jpa.PostagemRepository;
import dsw.projeto_rest.jpa.TarefaRepository;
import dsw.projeto_rest.jpa.UsuarioRepository;
import jakarta.servlet.Servlet;
import jakarta.validation.Valid;

@RestController
public class UsuarioResource {
	
	private UsuarioRepository usuarioRepository;
	private PostagemRepository postagemRepository;
	private TarefaRepository tarefaRepository;

	public UsuarioResource(UsuarioRepository usuarioRepository, PostagemRepository postagemRepository, TarefaRepository tarefaRepository) {
		super();
		this.usuarioRepository = usuarioRepository;
		this.postagemRepository = postagemRepository;
		this.tarefaRepository = tarefaRepository;
	}
	
	@GetMapping("/users")
	public List<Usuario> listarUsuarios() {
		return usuarioRepository.findAll();
	}
	
	@PostMapping("/users")
	public ResponseEntity<Usuario> createUser(@Valid @RequestBody Usuario user) {
		Usuario savedUser = usuarioRepository.save(user);
		URI location = ServletUriComponentsBuilder.fromCurrentRequest()
				.path("/{id}")
				.buildAndExpand(savedUser.getId())
				.toUri();
		return ResponseEntity.created(location).build();
	}
	
	@GetMapping("/users/{id}/posts")
	public List<Postagem> listarPostagensDeUsuario(@PathVariable int id) {
		Optional<Usuario> usuario = usuarioRepository.findById(id);
		return usuario.get().getPostagens();
	}
	
	@PostMapping("/users/{id}/posts")
	public ResponseEntity<Object> criarPostagensDeUsuario(@PathVariable int id, @Valid @RequestBody Postagem postagem){
		Optional<Usuario> usuario = usuarioRepository.findById(id);
		postagem.setUsuario(usuario.get());
		Postagem postagemSalva = postagemRepository.save(postagem);
		URI location = ServletUriComponentsBuilder.fromCurrentRequest()
				.path("/{id}")
				.buildAndExpand(postagemSalva.getId())
				.toUri();
		return ResponseEntity.created(location).build();
	}
	
	@PostMapping("/users/{username}/tarefas")
	public ResponseEntity<Object> criarTarefaDeUsuario(@PathVariable String username, @Valid @RequestBody Tarefa tarefa) {
		Optional<Usuario> usuario = usuarioRepository.findByUsuario(username);
		tarefa.setUsuario(usuario.get());
		Tarefa tarefaSalva = tarefaRepository.save(tarefa);
		URI location = ServletUriComponentsBuilder.fromCurrentRequest()
				.path("/{id}")
				.buildAndExpand(tarefaSalva.getId())
				.toUri();
		return ResponseEntity.created(location).build();
	}
	
	@GetMapping("/users/{username}/tarefas")
	public List<Tarefa> listarTarefasDeUsuario(@PathVariable String username) {
		Optional<Usuario> usuario = usuarioRepository.findByUsuario(username);
		
		if (usuario != null) {
			try {
				return usuario.get().getTarefas();
			} catch (Exception e) {
				return null;
			}
		} else {
			return null;
		}
		
	}
	
	@DeleteMapping("/users/{username}/tarefas/{idTarefa}")
	public void excluirTarefa(@PathVariable String username, @PathVariable int idTarefa) {
		tarefaRepository.deleteById(idTarefa);
	}
	
	@GetMapping("/users/{username}/tarefas/{id}")
	public Tarefa obterTarefa(@PathVariable String username, @PathVariable int id) throws Exception {
		Optional<Tarefa> tarefa = tarefaRepository.findById(id);
		if (tarefa.isEmpty()) {
			throw new Exception("Erro: Tarefa não encontrada: " + id);
		}
		return tarefa.get();
	 	
	}
	
	@PutMapping("/users/{username}/tarefas/{id}")
	public ResponseEntity<Object> alterarTarefa(@PathVariable String username, @Valid @RequestBody Tarefa tarefa) {
		Optional<Usuario> usuario = usuarioRepository.findByUsuario(username);
		tarefa.setUsuario(usuario.get());
		Tarefa tarefaSalva = tarefaRepository.save(tarefa);
		URI location = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(tarefaSalva.getId()).toUri();
		return ResponseEntity.created(location).build();
	}

	@PostMapping("/autenticar")
	public Boolean autenticar(@RequestBody Credencial credencial) {
		System.out.println(credencial.getUsername() + " " + credencial.getSenha());
		Optional<Usuario> usuario = usuarioRepository.findByUsuarioAndSenha(credencial.getUsername(), credencial.getSenha());
		if (!usuario.isEmpty()) {
			boolean senha = BCrypt.checkpw(credencial.getSenha(), usuario.get().getSenha());
			return senha;
		}
		return false;
	}
}
