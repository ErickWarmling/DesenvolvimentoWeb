export default function ListaDeTarefas() {
    const tarefas = [
        {id: 1, descricao: 'Aprender React', concluido: false},
        {id: 2, descricao: 'Aprender Rest APIs', concluido: false},
        {id: 3, descricao: 'Desenvovler uma aplicação', concluido: false},
    ]

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
                                    <td>{tarefa.concluido.toString()}</td>
                                </tr>
                            )
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    )
}