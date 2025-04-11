package dsw.projeto_rest.jpa;

import org.springframework.data.jpa.repository.JpaRepository;

import dsw.projeto_rest.user.Usuario;

public interface UsuarioRepository extends JpaRepository<Usuario, Integer>{

}
