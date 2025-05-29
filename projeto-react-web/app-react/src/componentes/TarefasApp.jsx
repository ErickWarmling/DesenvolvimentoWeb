import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import BemVindo from "./BemVindo";
import Cabecalho from "./Cabecalho";
import Rodape from "./Rodape";
import Erro from "./Erro";
import ListaDeTarefas from "./ListaDeTarefas";
import Login from "./Login";
import "./TarefasApp.css"
import Logout from "./Logout";
import AutProvider, { useAutCtx } from "./AutProvider";

function AuthenticatedRoute({children}) {
    const autCtx = useAutCtx();

    if (autCtx.autenticado) {
        return children;
    }
    return <Navigate to="/" />
}

export default function TarefasApp() {
    return (
        <div className="TarefasApp">
            <AutProvider>
                <BrowserRouter>
                    <Cabecalho />
                    <Routes>
                        <Route path='/' element={<Login />}></Route>
                        <Route path='/login' element={<Login />}></Route>
                        <Route path='/inicio/:usuario' element={
                            <AuthenticatedRoute>
                                <BemVindo />
                            </AuthenticatedRoute>}>
                        </Route>
                        <Route path='*' element={<Erro />}></Route>
                        <Route path='/tarefas' element={<ListaDeTarefas />}></Route>
                        <Route path="/sair" element={<Logout />}></Route>
                    </Routes>
                    <Rodape />
                </BrowserRouter>
            </AutProvider>
        </div>
    );
}