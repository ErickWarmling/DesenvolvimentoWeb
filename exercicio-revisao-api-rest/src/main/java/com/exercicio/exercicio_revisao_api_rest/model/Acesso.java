package com.exercicio.exercicio_revisao_api_rest.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;

import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "acesso")
public class Acesso {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "acesso_id")
    private Long id;

    @OneToMany(mappedBy = "acesso")
    @Column(name = "acesso_usuario")
    @JsonIgnore
    private List<Usuario> usuarios = new ArrayList<>();

    @Column(name = "acesso_data")
    private String data;

    public Acesso() {
    }

    public Acesso(Long id, String data) {
        this.id = id;
        this.data = data;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public List<Usuario> getUsuarios() {
        return usuarios;
    }

    public void setUsuarios(List<Usuario> usuarios) {
        this.usuarios = usuarios;
    }

    public String getData() {
        return data;
    }

    public void setData(String data) {
        this.data = data;
    }

    @Override
    public String toString() {
        return "Acesso{" +
                "id=" + id +
                ", data='" + data + '\'' +
                '}';
    }
}
