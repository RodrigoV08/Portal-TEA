import React from 'react';
import { Link } from 'react-router-dom'; 

const Footer = () => {
    return (
        <footer 
            style={{
                background: 'linear-gradient(135deg, #76C776, #76C776)',  // Gradiente escurecido
                color: '#333',
                padding: '1rem',
                textAlign: 'center',
                fontFamily: 'DynaPuff, sans-serif', 
            }}
        >
            <div className="container">
                <ul 
                    style={{
                        listStyle: 'none',
                        padding: 0,
                        margin: 0,
                        display: 'flex',
                        justifyContent: 'center',
                        gap: '6rem', 
                    }}
                >
                    <li><Link to="/Privacidade" style={{ color: '#333', textDecoration: 'none' }}>Privacidade</Link></li> 
                    <li><Link to="/SobreNos" style={{ color: '#333', textDecoration: 'none' }}>Sobre Nós</Link></li> 
                    <li><Link to="/contato" style={{ color: '#333', textDecoration: 'none' }}>Contato</Link></li>
                    <li><Link to="/DireitosAutorais" style={{ color: '#333', textDecoration: 'none' }}>Direitos Autorais</Link></li> 
                    <li><Link to="/Suporte" style={{ color: '#333', textDecoration: 'none' }}>Suporte</Link></li>
             
                    <li><Link to="/FAQ" style={{ color: '#333', textDecoration: 'none' }}>FAQ</Link></li>
                </ul>
            </div>
        </footer>
    );
}

export default Footer;
