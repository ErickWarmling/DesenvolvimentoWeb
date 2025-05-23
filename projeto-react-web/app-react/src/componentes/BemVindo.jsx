import { Link, useParams } from "react-router-dom"

export default function BemVindo() {
    const params = useParams();

    return (
    <>
        <h1>Olá, {params.usuario}</h1>
        <Link to='/tarefas'>Tarefas</Link>
    </>
    )
}