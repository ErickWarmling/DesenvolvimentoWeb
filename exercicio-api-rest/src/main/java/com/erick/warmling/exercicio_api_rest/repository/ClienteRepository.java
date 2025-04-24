package com.erick.warmling.exercicio_api_rest.repository;

import com.erick.warmling.exercicio_api_rest.model.Cliente;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ClienteRepository extends JpaRepository<Cliente, Long> {
}
