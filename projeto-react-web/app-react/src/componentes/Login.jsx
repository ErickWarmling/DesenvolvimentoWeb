import { useState } from "react";
import { useNavigate } from "react-router-dom";

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

    function loginHandler() {
        if(usuario === 'admin' && senha === '1234') {
            console.log('Login efetuado com sucesso...');
            setLoginSucesso(true);
            setLoginFalhou(false);
            navigate(`/inicio/${usuario}`);
        } else {
            console.log('Falhou');
            setLoginFalhou(true);
            setLoginSucesso(false);
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