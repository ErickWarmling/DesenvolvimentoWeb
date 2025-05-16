import { BrowserRouter, Routes, Route } from "react-router-dom"
import BemVindo from "./BemVindo";
import Erro from "./Erro";
import Login from "./Login";

export default function TarefasApp() {
    return (
        <div className="TarefasApp">
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Login />}></Route>
                    <Route path='/login' element={<Login />}></Route>
                    <Route path='/inicio' element={<BemVindo />}></Route>
                    <Route path='*' element={<Erro />}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}