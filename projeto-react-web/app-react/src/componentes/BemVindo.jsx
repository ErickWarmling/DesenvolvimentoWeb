import { Link, useParams } from "react-router-dom"
import axios from "axios";

export default function BemVindo() {
    const params = useParams();

    function iniciar() {
        axios.get('http://localhost:8080/inicio')
            .then((resposta) => sucesso(resposta))
            .catch((erro) => falhou(erro))
            .finally( () => console.log('Finalizou a chamada...'));
    }

    function sucesso(resposta) {
        console.log('Resposta: ');
        console.log(resposta); 
    }
    
    function falhou(erro) {
        console.log('Erro: ');
        console.log(erro);
    }
    

    return (
    <>
        <h1>Olá, {params.usuario}</h1>
        <Link to='/tarefas'>Tarefas</Link>
        <button onClick={iniciar}>Bem-Vindo</button>
    </>
    )
}