import { createContext, useContext, useState } from "react";

const NameContext = createContext();

export function NameProvider({ children }) {
    const [nome, setNome] = useState("");

    return (
        <NameContext.Provider value={{nome, setNome}}>
            { children }
        </NameContext.Provider>
    )
}

export function useName() {
        return useContext(NameContext);
}