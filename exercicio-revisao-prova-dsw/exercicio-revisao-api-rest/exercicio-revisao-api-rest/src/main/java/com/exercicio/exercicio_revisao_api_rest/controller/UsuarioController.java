package com.exercicio.exercicio_revisao_api_rest.controller;

import com.exercicio.exercicio_revisao_api_rest.model.Usuario;
import com.exercicio.exercicio_revisao_api_rest.service.UsuarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class UsuarioController {

    @Autowired
    private UsuarioService usuarioService;

    @GetMapping("/usuarios")
    public List<Usuario> listarTodos() {
        return usuarioService.listarTodos();
    }

    @GetMapping("/usuarios/{id}")
    public ResponseEntity<Usuario> buscarPorId(@PathVariable Long id) {
        return ResponseEntity.ok(usuarioService.buscarPorId(id));
    }

    @GetMapping("/buscarUsuario")
    public List<Usuario> buscarUsuarios(@RequestParam String nome, @RequestParam String cidade) {
        return usuarioService.buscarPorNomeECidade(nome, cidade);
    }

    @PostMapping("/usuarios")
    public ResponseEntity<Usuario> criar(@RequestBody Usuario usuario) {
        return ResponseEntity.ok(usuarioService.criar(usuario));
    }

    @PutMapping("/usuarios/{id}")
    public ResponseEntity<Usuario> atualizar(@PathVariable Long id, @RequestBody Usuario usuario) {
        return ResponseEntity.ok(usuarioService.atualizar(id, usuario));
    }

    @DeleteMapping("/usuarios/{id}")
    public ResponseEntity<Usuario> deletar(@PathVariable Long id) {
        usuarioService.deletar(id);
        return ResponseEntity.noContent().build();
    }
}
