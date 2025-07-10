import  { clienteApi } from "./cliente.js"

export const obterTarefasApi = (username) =>
clienteApi.get(`/users/${username}/tarefas/`);

export const obterTarefaApi = (username, id) =>
clienteApi.get(`/users/${username}/tarefas/${id}`);

export const excluirTarefasApi = (username, idTarefa) =>
clienteApi.delete(`/users/${username}/tarefas/${idTarefa}`);

export const adicionarTarefaApi = (idUsuario, tarefa) =>
clienteApi.post(`/users/${idUsuario}/tarefas`, tarefa);

export const alterarTarefaApi = (idUsuario, id, tarefa) =>
clienteApi.put(`/users/${idUsuario}/tarefas/${id}`, tarefa);

export const autenticarApi = (credencial) =>
clienteApi.post('/autenticar', credencial);