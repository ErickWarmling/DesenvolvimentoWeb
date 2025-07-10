import { createContext, useContext, useState } from "react";
import { autenticarApi } from "../api/tarefas";

export const AutCtx = createContext();
export const useAutCtx = () => useContext(AutCtx);

export default function AutProvider({ children }) {
    const [autenticado, setAutenticado] = useState(false);
    const [usuario, setUsuario] = useState(null);

    async function autenticar(usuario, senha) {
        const credencial = {"usuario:": usuario, "senha": senha};
        const resposta = await autenticarApi(credencial);
        const foiAutenticado = resposta.data;
        
        if (foiAutenticado) {
            setAutenticado(true);
            setUsuario(usuario);
            return true;
        } else {
            setAutenticado(false);
            setUsuario(null);
            return false;
        }
    }

    function sair() {
        setAutenticado(false);
        setUsuario(null);
    }

    return (
        <AutCtx.Provider value={{autenticado, usuario, autenticar, sair}}>
            {children}
        </AutCtx.Provider>
    )
}