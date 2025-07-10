import { useState } from "react"

export default function Mensagem() {
    
    const [mostrar, setMostrar] = useState(false);

    return (

        <div>
            <button className="btn btn-primary" onClick={() => setMostrar(!mostrar)}>
                {mostrar ? "Ocultar conteúdo" : "Mostrar conteúdo"}
            </button>

            {mostrar && (
                <div className="alert alert-info mt-3">Desenvolvimento de Sistemas para Web (55DSW)</div>
            )}
        </div>
    )
}