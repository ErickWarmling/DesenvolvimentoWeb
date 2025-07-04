import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { obterTarefaApi } from "../api/obterTarefa";
import { useAutCtx } from "./AutProvider";

export default function Tarefa() {
    const { id } = useParams();
    const [descricao, setDescricao] = useState('');
    const autCtx = useAutCtx();
    const usuario = autCtx.usuario;
    useEffect(
        () => obterTarefa(),
        [id]
    )

    function obterTarefa() {
        obterTarefaApi(usuario, id)
        .then(response => {setDescricao(response.data.descricao)})
        .catch(error => console.log(error));
    }
    
    return (
        <div className="container">
            <h1>Detalhes da Tarefa</h1>
            <div>
                Descrição: {descricao}
            </div>
        </div>
    )
}