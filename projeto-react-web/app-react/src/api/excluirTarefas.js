import { clienteApi } from "./cliente.js";

export const excluirTarefasApi = (username, idTarefa) =>
clienteApi.delete(`/users/${username}/tarefas/${idTarefa}`);