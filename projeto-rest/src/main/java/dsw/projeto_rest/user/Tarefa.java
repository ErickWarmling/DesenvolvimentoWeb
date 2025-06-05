package dsw.projeto_rest.user;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.criteria.Fetch;

@Entity
public class Tarefa {
	
	@Id
	@GeneratedValue
	private Integer id;
	
	private String descricao;
	private boolean foiConcluido;
	
	@ManyToOne(fetch=FetchType.LAZY)
	@JsonIgnore
	private Usuario usuario;

	public Tarefa() {
		super();
	}
	
	public Tarefa(Integer id, String descricao, boolean foiConcluido) {
		super();
		this.id = id;
		this.descricao = descricao;
		this.foiConcluido = foiConcluido;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getDescricao() {
		return descricao;
	}

	public void setDescricao(String descricao) {
		this.descricao = descricao;
	}

	public boolean isFoiConcluido() {
		return foiConcluido;
	}

	public void setFoiConcluido(boolean foiConcluido) {
		this.foiConcluido = foiConcluido;
	}

	public Usuario getUsuario() {
		return usuario;
	}

	public void setUsuario(Usuario usuario) {
		this.usuario = usuario;
	}

	@Override
	public String toString() {
		return "Tarefa [id=" + id + ", descricao=" + descricao + ", foiConcluido=" + foiConcluido + "]";
	}
}
