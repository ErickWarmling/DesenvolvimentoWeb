import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { alterarTarefaApi, obterTarefaApi } from "../api/tarefas";
import { useAutCtx } from "./AutProvider";
import { Field, Formik, Form } from "formik";

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

    const navigate = useNavigate();
    function onSubmit(dados) {
        const tarefa = {
            id: id,
            usuario: usuario,
            descricao: dados.descricao,
            concluido: false,
        }
        console.log(tarefa);
        if (id == -1) {
            adicionarTarefaApi(usuario, tarefa)
            .then(response => {navigate('/tarefas')})
            .catch(error => console.log(error));
        } else {
            alterarTarefaApi(usuario, id, tarefa)
            .then(response => {navigate('/tarefas')})
            .catch(error => console.log(error));
        }
    }
    
    return (
        <div className="container">
            <h1>Detalhes da Tarefa</h1>
            <div>
                <Formik initialValues={{descricao}} enableReinitialize = {true} onSubmit = {onSubmit}>
                        {
                            (props) => (
                                <Form>
                                    <fieldset className="form-group" name="descricao">
                                        <label>Descrição</label>
                                        <Field type="text" className="form-control" name="descricao" /> 
                                    </fieldset>
                                    <div>
                                        <button type="submit" className="btn btn-sucess m-5">Salvar</button>
                                    </div>
                                </Form>
                            )
                        }
                </Formik>
            </div>
        </div>
    )
}