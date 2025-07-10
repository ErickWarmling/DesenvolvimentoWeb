import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './componentes/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './componentes/Home'
import Sobre from './componentes/Sobre'
import Contato from './componentes/Contato'
import Disciplina from './componentes/Disciplina'
import Nota from './componentes/Nota'
import Erro from './componentes/Erro'
import AuthenticatedRoute from './componentes/AuthenticatedRoute'

function App() {

  return (
    <Router>
      <Navbar />
      <div className="container mt-4">
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/disciplina" element={<Disciplina />} />
          <Route path="/nota" element={
            <AuthenticatedRoute>
              <Nota />
            </AuthenticatedRoute>
          }/>
          <Route  path='*' element={<Erro />}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App
