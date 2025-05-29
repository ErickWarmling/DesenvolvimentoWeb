import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAutCtx } from "./AutProvider";

export default function Login() {
    const [usuario, setUsuario] = useState('');
    const [senha, setSenha] = useState('');
    const [loginSucesso, setLoginSucesso] = useState(false);
    const [loginFalhou, setLoginFalhou] = useState(false);
    const navigate = useNavigate();

    function usuarioHandler(evento) {
        setUsuario(evento.target.value);
    }

    function senhaHandler(evento) {
        setSenha(evento.target.value);
    }

    const autCtx = useAutCtx();

    function loginHandler() {
        const foiAutenticado = autCtx.autenticar(usuario, senha);
        if (foiAutenticado) {
            navigate(`/inicio/${usuario}`)
        }
    }

    return (
        <div className="Login">
            {loginSucesso && <div className="SucessoMsg">Autenticado com sucesso!</div>}
            {loginFalhou && <div className="FalhouMsg">A autenticação falhou, confira seu login e senha.</div>}

            <div className="LoginForm">
                <div>
                    <label>Usuário:</label>
                    <input type="text" name="usuario" value={usuario} onChange={usuarioHandler}/><br/>
                    <label>Senha: </label>
                    <input type="password" name="senha" value={senha} onChange={senhaHandler}/>
                </div>
                <div>
                    <button type="button" name="login" onClick={loginHandler}>Login</button>
                </div>
            </div>
        </div>
    );
}