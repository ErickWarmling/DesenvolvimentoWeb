import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Clock from './assets/componentes/Clock'
import NameForm from './assets/componentes/NameForm'
import Navbar from './assets/componentes/Navbar';
import { NameProvider } from './assets/componentes/NameContext';


function App() {

  return (
    <NameProvider>
      <Router>
        <Navbar />
        <div className="container mt-4">
          <Routes>
            <Route path="/clock" element={<Clock />} />
            <Route path="/name-form" element={<NameForm />} />
          </Routes>
        </div>
      </Router>
    </NameProvider>
  );
}

export default App
