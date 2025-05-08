package com.exercicio.exercicio_revisao_api_rest.repository;

import com.exercicio.exercicio_revisao_api_rest.model.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PerfilRepository extends JpaRepository<Usuario, Long> {
    List<Usuario> findByNomeAndCidade(String nome, String cidade);
}
