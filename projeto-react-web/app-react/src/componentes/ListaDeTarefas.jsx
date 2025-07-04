import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { obterTarefasApi } from "../api/obterTarefa";
import { FaTrashAlt, FaEdit } from 'react-icons/fa';
import { excluirTarefasApi } from "../api/excluirTarefas";

export default function ListaDeTarefas() {
    const [tarefas, setTarefas] = useState([]);

    useEffect(() => atualizarTarefas(), []);
    function atualizarTarefas() {
        obterTarefasApi('admin')
            .then(resposta => {
                console.log(resposta)
                setTarefas(resposta.data)
            })
            .catch(erro => console.log(erro))
    }

    function excluirTarefa(id) {
        console.log('Excluir: ' + id);
        excluirTarefasApi('admin', id)
        .then(() => {
            setMensagem(`Tarefa ${id} excluída com sucesso!`)
            atualizarTarefas()
        })
        .catch(erro => console.log(erro))
    }

    const navigate = useNavigate();
    function visualizarTarefa(id) {
        console.log('Visualizar: ' + id);
        navigate(`/tarefas/${id}`)
    }

    return (
        <div className="container">
            <h1>Tarefas</h1>
            <div>
                <table className="table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Descrição</th>
                            <th>Concluído</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tarefas.map(
                            tarefa => (
                                <tr key={tarefa.id}>
                                    <td>{tarefa.id}</td>
                                    <td>{tarefa.descricao}</td>
                                    <td>{tarefa.foiConcluido.toString()}</td>
                                    <td><button className="btn btn-danger" onClick={
                                        () => excluirTarefa(tarefa.id)}><FaTrashAlt /></button>
                                    </td>
                                    <td><button className="btn btn-sucess" onClick={
                                        () => visualizarTarefa(tarefa.id) }><FaEdit /></button>
                                    </td>
                                </tr>
                            )
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    )
}