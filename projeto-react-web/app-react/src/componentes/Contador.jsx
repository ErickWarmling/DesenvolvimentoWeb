import { useState } from "react";

export default function Contador() {
    
    const [cont, setCont] = useState(0);

    function incContador() {
        setCont(cont + 1);
        console.log(cont);
    }

    function decrementar () {
        setCont(cont - 1);
        console.log(cont);
    }

    return (
        <div className="Contador">
            <span className="contador">{cont}</span>
            <div>
                <button className="contadorBtn" onClick={incContador}>+1</button>
                <button className="decrementarBtn" onClick={decrementar}>-1</button>
            </div>
        </div>
    )
}