import { useName } from "./NameContext";

export default function DisplayName () {
    const { nome } = useName();

    return (
        <div>
            <h2>Nome salvo:</h2>
            <p>{nome ? nome : "Nenhum nome salvo" }</p>
        </div>
    )
}