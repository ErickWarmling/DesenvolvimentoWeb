import { Link } from "react-router-dom"
import { useAutCtx } from "./AutProvider"

export default function Cabecalho() {
    const autCtx = useAutCtx();
    const foiAutenticado = autCtx.autenticado;

    function sair() {
        autCtx.setAutenticado(false);
    }

    return (
        <header className="border-bottom border-light border-5 mb-5 p-2">
            <div className="container">
                <div className="row">
                    <nav className="navbar navbar-expand-lg">
                        <a className="navbar-brand ms-2 fs-2 fw-bold text-black" href="http://ceavi.udesc.br">UDESC</a>
                        <div className="collapse navbar-collapse">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    { foiAutenticado && <Link className="nav-link" to="/inicio/admin">Início</Link>}
                                </li>
                                <li className="nav-item">
                                    { foiAutenticado && <Link className="nav-link" to="/tarefas">Tarefas</Link>}
                                </li>
                            </ul>
                        </div>
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                { !foiAutenticado && 
                                <Link className="nav-link" to="/login">Entrar</Link>}
                            </li>
                            <li className="nav-item">
                                { foiAutenticado && 
                                <Link className="nav-link" to="/sair" onClick={sair}>Sair</Link>}
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
)}
   
   