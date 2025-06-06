import  { clienteApi } from "./cliente.js"

export const obterTarefasApi = (username) =>
clienteApi.get(`/users/${username}/tarefas`);