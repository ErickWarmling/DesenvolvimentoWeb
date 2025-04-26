package com.erick.warmling.exercicio_api_rest.controller;

import com.erick.warmling.exercicio_api_rest.model.Cliente;
import com.erick.warmling.exercicio_api_rest.model.Produto;
import com.erick.warmling.exercicio_api_rest.service.ClienteService;
import com.erick.warmling.exercicio_api_rest.service.ProdutoService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/clientes")
public class ClienteController {

    private final ClienteService clienteService;
    private final ProdutoService produtoService;

    public ClienteController(ClienteService clienteService, ProdutoService produtoService) {
        this.clienteService = clienteService;
        this.produtoService = produtoService;
    }

    @GetMapping
    public List<Cliente> listarTodos() {
        return clienteService.listarTodos();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Cliente> buscarPorId(@PathVariable Long id) {
        return ResponseEntity.ok(clienteService.buscarPorId(id));
    }

    @PostMapping
    public ResponseEntity<Cliente> criar(@RequestBody Cliente cliente) {
        return ResponseEntity.ok(clienteService.criar(cliente));
    }

    @PutMapping("/{id}")
    public ResponseEntity<Cliente> atualizar(@PathVariable Long id, @RequestBody Cliente cliente) {
        return ResponseEntity.ok(clienteService.atualizar(id, cliente));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Cliente> deletar(@PathVariable Long id) {
        clienteService.deletar(id);
        return ResponseEntity.noContent().build();
    }

    @PostMapping("/{cliente_id}/produtos/{produto_id}")
    public ResponseEntity<Cliente> associarProdutoAoCliente(@PathVariable Long cliente_id, @PathVariable Long produto_id) {
        Cliente clienteAtualizado = clienteService.associarProdutoAoCliente(cliente_id, produto_id);
        return  ResponseEntity.ok(clienteAtualizado);
    }
}

