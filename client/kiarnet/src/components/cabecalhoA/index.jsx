import { useState, useEffect } from 'react';
import './index.scss';

function Cabecalho() {
    const [aberto, setAberto] = useState(false);

    function estadoMenu() {
        setAberto(!aberto);
    }

    useEffect(() => {
        //creio que dava pra fazer isso em nem 5 linhas mas sem tempo irmao
        const handleResize = () => {
            if (window.innerWidth <= 839 && aberto) {
                document.body.classList.add('no-scroll');
            } else {
                document.body.classList.remove('no-scroll');
            }
        };
        handleResize(); 
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
            document.body.classList.remove('no-scroll');
        };
    }, [aberto]);

    return (
        <header>
            <nav className="navbar">
                <div className="logo">Kiarnet</div>
                <button className="menu" onClick={estadoMenu}>≡</button>
                <ul className={`nav-links ${aberto ? 'ativo' : ''}`}>
                    <li><a href="/">Home</a></li>
                    <li><a href="/sobre">Sobre nós</a></li>
                    <li><a href="/planos">Planos</a></li>
                    <li><a href="/Contato">Contato</a></li>
                    <li><a href="/planos" className="signup">Cadastrar</a></li>
                </ul>
            </nav>
            {aberto && <div className="overlay" onClick={estadoMenu}></div>}
        </header>
    );
}

export default Cabecalho;
