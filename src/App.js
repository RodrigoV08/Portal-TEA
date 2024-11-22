import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Componentes/Navbar';
import Carrosel from './Componentes/Carrosel';
import Footer from './Componentes/Footer';
import Login from './Componentes/Login';
import Register from './Componentes/Register';
import Sobre from './Componentes/Sobre';
import Contato from './Componentes/Contato';
import ContatoProfissional from './Componentes/ContatoProfissional';
import SobreNos from './Componentes/SobreNos';
import Comunidade from './Componentes/Comunidade';
import TesteAutismo from './Componentes/TesteAutismo';
import Privacidade from './Componentes/Privacidade';
import DireitosAutorais from './Componentes/DireitosAutorais';
import Suporte from './Componentes/Suporte';
import FAQ from './Componentes/FAQ';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Carrosel />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/ContatoProfissional" element={<ContatoProfissional />} />
          <Route path="/SobreNos" element={<SobreNos />} />
          <Route path="/Comunidade" element={<Comunidade />} />
          <Route path="/TesteAutismo" element={<TesteAutismo />} />
          <Route path="/Privacidade" element={<Privacidade />} />
          <Route path="/DireitosAutorais" element={<DireitosAutorais/>} />
          <Route path="/Suporte" element={<Suporte/>} />
          <Route path="/FAQ" element={<FAQ/>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
