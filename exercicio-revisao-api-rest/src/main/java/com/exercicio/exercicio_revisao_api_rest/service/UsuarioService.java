package com.exercicio.exercicio_revisao_api_rest.service;

import com.exercicio.exercicio_revisao_api_rest.model.Usuario;
import com.exercicio.exercicio_revisao_api_rest.repository.PerfilRepository;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.List;

@Service
public class UsuarioService {

    @Autowired
    private PerfilRepository perfilRepository;

    public List<Usuario> listarTodos() {
        return perfilRepository.findAll();
    }

    public Usuario buscarPorId(Long id) {
        Usuario usuario = perfilRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Usuário não encontrado com o id: " + id));
        return usuario;
    }

    public List<Usuario> buscarPorNomeECidade(String nome, String cidade) {
        return perfilRepository.findByNomeAndCidade(nome, cidade);
    }

    public Usuario criar(Usuario usuario) {
        return perfilRepository.save(usuario);
    }

    public Usuario atualizar(Long id, Usuario usuarioAtualizado) {
        Usuario usuario = perfilRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Usuário não encontrado com o id: " + id));

        usuario.setNome(usuarioAtualizado.getNome());
        usuario.setDescricao(usuarioAtualizado.getDescricao());
        usuario.setDataNascimento(usuarioAtualizado.getDataNascimento());
        usuario.setOcupacao(usuarioAtualizado.getOcupacao());
        usuario.setInteresses(usuarioAtualizado.getInteresses());

        return perfilRepository.save(usuario);
    }

    public void deletar(Long id) {
        if (!perfilRepository.existsById(id)) {
            throw new EntityNotFoundException("Usuário não encontrado com o id: " + id);
        }

        perfilRepository.deleteById(id);
    }
}
