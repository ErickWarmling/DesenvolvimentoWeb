import { createContext, useContext, useState } from "react";

export const AutCtx = createContext();
export const useAutCtx = () => useContext(AutCtx);

export default function AutProvider({ children }) {
    const [autenticado, setAutenticado] = useState(false);
    const [usuario, setUsuario] = useState(null);

    function autenticar(usuario, senha) {
        if (usuario === 'admin' && senha === '1234') {
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