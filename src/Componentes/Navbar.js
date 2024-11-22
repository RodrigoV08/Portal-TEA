import React from 'react';
import { Link } from 'react-router-dom';
import LogoTEA from '../Imagens/LogoTEA.png'; 

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg" style={{
            backgroundColor: '#C1FFC1',
            fontFamily: 'DynaPuff, sans-serif',
            padding: '10px 20px',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
            borderBottom: '1px solid #ccc',
        }}>
            <Link className="navbar-brand" to="/" style={{ position: 'relative', height: '50px', overflow: 'visible' }}>
                <img 
                    src={LogoTEA} 
                    alt="Logo do Portal TEA" 
                    style={{ 
                        height: '100px',
                        width: 'auto', 
                        position: 'absolute', 
                        top: '-25px'
                    }} 
                />
            </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav" style={{ marginLeft: '230px' }}> {/* Espaçamento ajustado */}
                <ul className="navbar-nav ml-auto" style={{ display: 'flex', gap: '1.5rem' }}>
                    <li className="nav-item">
                        <Link className="nav-link" to="/login" style={{ color: '#333' }}>Login</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/register" style={{ color: '#333' }}>Registrar</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/sobre" style={{ color: '#333' }}>Sobre o Autismo</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/TesteAutismo" style={{ color: '#333' }}>Teste Autismo</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/comunidade" style={{ color: '#333' }}>Comunidade</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/ContatoProfissional" style={{ color: '#333' }}>Contato Profissional</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
