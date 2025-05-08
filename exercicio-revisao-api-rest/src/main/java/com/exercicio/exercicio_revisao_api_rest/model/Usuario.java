package com.exercicio.exercicio_revisao_api_rest.model;

import jakarta.persistence.*;

@Entity
@Table(name = "usuario")
public class Usuario {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "usu_nome", nullable = false)
    private String nome;

    @Column(name = "usu_descricao")
    private String descricao;

    @Column(name = "usu_data_nascimento", nullable = false)
    private String dataNascimento;

    @Column(name = "usu_cidade")
    private String cidade;

    @Column(name = "usu_ocupacao")
    private String ocupacao;

    @Column(name = "usu_interesses")
    private String interesses;

    @ManyToOne()
    @JoinColumn(name = "acesso_id")
    private Acesso acesso;

    public Usuario() {
    }

    public Usuario(Long id, String nome, String descricao, String dataNascimento, String cidade, String ocupacao, String interesses) {
        this.id = id;
        this.nome = nome;
        this.descricao = descricao;
        this.dataNascimento = dataNascimento;
        this.cidade = cidade;
        this.ocupacao = ocupacao;
        this.interesses = interesses;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getDescricao() {
        return descricao;
    }

    public void setDescricao(String descricao) {
        this.descricao = descricao;
    }

    public String getDataNascimento() {
        return dataNascimento;
    }

    public void setDataNascimento(String dataNascimento) {
        this.dataNascimento = dataNascimento;
    }

    public String getCidade() {
        return cidade;
    }

    public void setCidade(String cidade) {
        this.cidade = cidade;
    }

    public String getOcupacao() {
        return ocupacao;
    }

    public void setOcupacao(String ocupacao) {
        this.ocupacao = ocupacao;
    }

    public String getInteresses() {
        return interesses;
    }

    public void setInteresses(String interesses) {
        this.interesses = interesses;
    }

    public Acesso getAcesso() {
        return acesso;
    }

    public void setAcesso(Acesso acesso) {
        this.acesso = acesso;
    }

    @Override
    public String toString() {
        return "Usuario{" +
                "id=" + id +
                ", nome='" + nome + '\'' +
                ", descricao='" + descricao + '\'' +
                ", dataNascimento='" + dataNascimento + '\'' +
                ", cidade='" + cidade + '\'' +
                ", ocupacao='" + ocupacao + '\'' +
                ", interesses='" + interesses + '\'' +
                '}';
    }
}
