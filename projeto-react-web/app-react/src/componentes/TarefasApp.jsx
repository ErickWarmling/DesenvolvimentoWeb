import { BrowserRouter, Routes, Route } from "react-router-dom"
import BemVindo from "./BemVindo";
import Cabecalho from "./Cabecalho";
import Rodape from "./Rodape";
import Erro from "./Erro";
import ListaDeTarefas from "./ListaDeTarefas";
import Login from "./Login";
import "./TarefasApp.css"
import Logout from "./Logout";

export default function TarefasApp() {
    return (
        <div className="TarefasApp">
            <BrowserRouter>
                <Cabecalho />
                <Routes>
                    <Route path='/' element={<Login />}></Route>
                    <Route path='/login' element={<Login />}></Route>
                    <Route path='/inicio/:usuario' element={<BemVindo />}></Route>
                    <Route path='*' element={<Erro />}></Route>
                    <Route path='/tarefas' element={<ListaDeTarefas />}></Route>
                    <Route path="/sair" element={<Logout />}></Route>
                </Routes>
                <Rodape />
            </BrowserRouter>
        </div>
    );
}