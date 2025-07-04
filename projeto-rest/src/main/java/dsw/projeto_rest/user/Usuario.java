package dsw.projeto_rest.user;

import java.util.ArrayList;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;

@Entity(name="user_details")
public class Usuario {
	
	@Id
	@GeneratedValue
	private Integer id;
	
	@Column(unique=true)
	@NotNull
	private String usuario;
	
	@Size(min=3, message="O nome deve conter apenas 3 letras!")
	private String nome;
	
	@OneToMany(mappedBy="usuario")
	@JsonIgnore
	private List<Postagem> postagens;
	
	@OneToMany(mappedBy = "usuario")
	@JsonIgnore
	private List<Tarefa> tarefas;
	
	public Usuario() {
	}

	public Usuario(Integer id, String nome) {
		super();
		this.id = id;
		this.nome = nome;
		this.postagens = new ArrayList<Postagem>();
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getUsuario() {
		return usuario;
	}

	public void setUsuario(String usuario) {
		this.usuario = usuario;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	@Override
	public String toString() {
		return "Usuario [id=" + id + ", nome=" + nome + "]";
	}

	public List<Postagem> getPostagens() {
		return postagens;
	}

	public List<Tarefa> getTarefas() {
		return tarefas;
	}

}
