package dsw.projeto_rest.jpa;

import org.springframework.data.jpa.repository.JpaRepository;

import dsw.projeto_rest.user.Postagem;

public interface PostagemRepository extends JpaRepository<Postagem, Integer>{

}
