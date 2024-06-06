import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <h1>Dia do Meio Ambiente</h1>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">Sobre</Link></li>
                    <li><Link to="/importance">Importância</Link></li>
                    <li><Link to="/how-to-help">Como Ajudar</Link></li>
                    <li><Link to="/contact">Contato</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
