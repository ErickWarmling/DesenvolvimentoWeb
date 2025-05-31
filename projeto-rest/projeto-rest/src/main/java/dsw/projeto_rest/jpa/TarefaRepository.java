package dsw.projeto_rest.jpa;

import org.springframework.data.jpa.repository.JpaRepository;

import dsw.projeto_rest.user.Tarefa;

public interface TarefaRepository extends JpaRepository<Tarefa, Integer>{

}
