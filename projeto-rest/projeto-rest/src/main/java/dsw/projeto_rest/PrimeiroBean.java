package dsw.projeto_rest;

public class PrimeiroBean {

	private String mensagem;
	
	public PrimeiroBean() {
		super();
	}

	public PrimeiroBean(String mensagem) {
		super();
		this.mensagem = mensagem;
	}

	public String getMensagem() {
		return mensagem;
	}

	public void setMensagem(String mensagem) {
		this.mensagem = mensagem;
	}

	@Override
	public String toString() {
		return "PrimeiroBean [mensagem=" + mensagem + "]";
	}
}
