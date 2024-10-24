import './index.scss'

function Cabecalho() {

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
                    <li><a href="/planos" class="signup">Cadastrar</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Cabecalho;