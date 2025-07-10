import { Link } from 'react-router-dom';
import { useAuth } from './AuthProvider';

export default function Navbar() {
    const { autenticado, login, logout } = useAuth();

    return (
        <nav className="navbar navbar-expand-lg bg-dark fixed-top border-bottom border-5 border-light">
            <div className='container-fluid justify-content-center'>
                <ul className="navbar-nav d-flex flex-row gap-4">
                    <li className="nav-item">
                        <Link className="nav-link text-primary" to="/home">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-primary" to="/sobre">Sobre</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-primary" to="/contato">Contato</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-primary" to="/disciplina">Disciplinas</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-primary" to="/nota">Notas</Link>
                    </li>
                </ul>
                <button onClick={ autenticado ? logout : login} className='btn btn-outline-light'>
                    {autenticado ? "Logout" : "Login"}
                </button>
            </div>
        </nav>
    )
}