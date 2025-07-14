import { useEffect, useState } from "react";
import axios from "axios";

export default function Clock() {
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://worldtimeapi.org/api/timezone/America/Sao_Paulo');
                setData(response.data);
            } catch (error) {
                console.log(error);
            }
        }

        fetchData();
    }, []); 

    if (!data) {
        return <p>Carregando</p>
    }

    const horario = new Date(data.datetime);
    const horaFormatada = horario.toLocaleTimeString("pt-BR");

    return (
        <p>Hora atual em São Paulo: {horaFormatada}</p>
    )
}