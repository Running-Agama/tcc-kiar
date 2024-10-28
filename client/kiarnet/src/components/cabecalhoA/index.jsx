import { useState } from 'react';
import './index.scss'

function Cabecalho() {
    const [aberto, setAberto] = useState(false)

    function estadoMenu (){
        alert('clicaste em mim aiiii')
        setAberto(!aberto)
    }
    return (
        <header>
            <nav class="navbar">
                <div class="logo">Kiarnet</div>
                <ul class="nav-links">
                    <li><a href="/">Home</a></li>
                    <li><a href="/sobre">Sobre nós</a></li>
                    <li><a href="/planos">Planos</a></li>
                    <li><a href="/Contato">Contato</a></li>
                    <li><a href="/login">Login</a></li>
                    <li><a href="/planos" className="signup">Cadastrar</a></li>
                </ul>
                <button className={aberto ? 'menu-aberto' : 'menu'} onClick={()=>estadoMenu}>≡</button>
            </nav>
        </header>
    )
}

export default Cabecalho;