import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ComponenteDeClasse from './componentes/ComponenteDeClasse'
import FunctionLink from './componentes/FunctionLink'
import Alternar from './componentes/Alternar'
import Contador from './componentes/Contador'
import BemVindo from './componentes/BemVindo'
import Relogio from './componentes/Relogio'
import Login from './componentes/Login'
import TarefasApp from './componentes/TarefasApp'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/*Tarefas App
      <PrimeiroComponente/>
      <SegundoComponente/>
      <ComponenteDeClasse/>
      <FunctionLink/><br/>
      <Alternar/>
      <Contador/>
      <BemVindo nome="Erick"/>
      <Relogio/>*/}
      <TarefasApp/>
    </>
  )
}

function PrimeiroComponente() {
  return (
    <div className='PrimeiroComponente'>Primeiro Componente</div>
  )
}

function SegundoComponente() {
  return (
    <div className='SegundoComponente'>Segundo Componente</div>
  )
}

export default App
