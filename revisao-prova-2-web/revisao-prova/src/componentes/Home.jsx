import { useState } from "react"
import Mensagem from "./Mensagem"

export default function Home() {
    return (
        <div>
            <p>Bem-vindo à página inicial do sistema!</p>
            <Mensagem />
        </div>
    )
}