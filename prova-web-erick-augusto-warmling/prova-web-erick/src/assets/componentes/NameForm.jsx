import { Form, Button } from "react-bootstrap";
import { useState } from "react";
import { useName } from "./NameContext";
import DisplayName from "./DisplayName";


export default function NameForm() {
    const [nomeForm, setNomeForm] = useState('');
    const { setNome } = useName();
    const [mostrarNome, setMostrarNome] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setNome(nomeForm);
        setMostrarNome(true);
    }

    return (
        <>
            <Form className="form-prova" onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                    <Form.Label>Nome</Form.Label>
                    <Form.Control 
                        type="text"
                        name="nome"
                        value={nomeForm}
                        onChange={(e) => setNomeForm(e.target.value)}
                    />
                </Form.Group>
                <Button type="submit" className="w-100 enter-button">
                    Entrar
                </Button>
            </Form>

            {mostrarNome && <DisplayName />}
        </>
    )
}