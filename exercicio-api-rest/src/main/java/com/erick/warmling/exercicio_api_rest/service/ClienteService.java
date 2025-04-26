package com.erick.warmling.exercicio_api_rest.service;

import com.erick.warmling.exercicio_api_rest.model.Cliente;
import com.erick.warmling.exercicio_api_rest.model.Produto;
import com.erick.warmling.exercicio_api_rest.repository.ClienteRepository;
import com.erick.warmling.exercicio_api_rest.repository.ProdutoRepository;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ClienteService {

    private final ClienteRepository clienteRepository;
    private final ProdutoRepository produtoRepository;

    public ClienteService(ClienteRepository clienteRepository, ProdutoRepository produtoRepository) {
        this.clienteRepository = clienteRepository;
        this.produtoRepository = produtoRepository;
    }

    public List<Cliente> listarTodos() {
        return clienteRepository.findAll();
    }

    public Cliente buscarPorId(Long id) {
        Cliente cliente = clienteRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Cliente não encontrado"));
        return cliente;
    }

    public Cliente criar(Cliente cliente) {
        return clienteRepository.save(cliente);
    }

    public Cliente atualizar(Long id, Cliente clienteAtualizado) {
            Cliente cliente = clienteRepository.findById(id)
                    .orElseThrow(() -> new EntityNotFoundException("Cliente não encontrado"));

            cliente.setNome(clienteAtualizado.getNome());
            cliente.setCpf(clienteAtualizado.getCpf());
            cliente.setCnpj(clienteAtualizado.getCnpj());
            cliente.setTipoCliente(clienteAtualizado.getTipoCliente());

            return clienteRepository.save(cliente);
    }

    public void deletar(Long id) {
        if (!clienteRepository.existsById(id)) {
            throw new EntityNotFoundException("Cliente não encontrado");
        }

        clienteRepository.deleteById(id);
    }

    public Cliente associarProdutoAoCliente(Long cliente_id, Long produto_id) {
        Cliente cliente = clienteRepository.findById(cliente_id)
                .orElseThrow(() -> new EntityNotFoundException("Cliente não encontrado"));
        Produto produto = produtoRepository.findById(produto_id)
                .orElseThrow(() -> new EntityNotFoundException("Produto não encontrado"));

        cliente.getProdutos().add(produto);
        produto.getClientes().add(cliente);

        clienteRepository.save(cliente);
        produtoRepository.save(produto);

        return cliente;
    }
}
