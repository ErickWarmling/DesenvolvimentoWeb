import { useEffect, useState } from "react";
import { obterTarefasApi } from "../api/obterTarefa";

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
                                </tr>
                            )
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    )
}