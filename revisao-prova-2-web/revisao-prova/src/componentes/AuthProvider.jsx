import { useState, createContext, useContext } from "react";

const AuthContext = createContext();

export default function AuthProvider({ children }) {
    const [autenticado, setAutenticado] = useState(false);
    
    const login = () => setAutenticado(true);
    const logout = () => setAutenticado(false);

    return (
        <AuthContext.Provider value={{ autenticado, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}

export function useAuth() {
    return useContext(AuthContext);
}