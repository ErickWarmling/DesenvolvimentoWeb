package dsw.projeto_rest.user;

import java.util.ArrayList;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.validation.constraints.Size;

@Entity(name="user_details")
public class Usuario {
	
	@Id
	@GeneratedValue
	private Integer id;
	
	@Size(min=3, message="O nome deve conter apenas 3 letras!")
	private String nome;
	
	@OneToMany(mappedBy="usuario")
	@JsonIgnore
	private List<Postagem> postagens;
	
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
	
}
