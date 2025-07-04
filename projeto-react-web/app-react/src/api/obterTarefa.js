import  { clienteApi } from "./cliente.js"

export const obterTarefasApi = (username) =>
clienteApi.get(`/users/${username}/tarefas/`);

export const obterTarefaApi = (username, id) =>
clienteApi.get(`/users/${usuario}/tarefas/${id}`);