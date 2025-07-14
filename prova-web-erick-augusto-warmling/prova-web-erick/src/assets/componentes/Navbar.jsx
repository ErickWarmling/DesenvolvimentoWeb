import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg bg-dark fixed-top border-bottom border-5 border-light">
            <div className='container-fluid justify-content-center'>
                <ul className="navbar-nav d-flex flex-row gap-4">
                    <li className="nav-item">
                        <Link className="nav-link text-primary" to="/clock">Clock</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-primary" to="/name-form">NameForm</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}