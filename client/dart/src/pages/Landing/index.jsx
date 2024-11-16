import './index.scss';

export default function Landing() {
    return (
        <div className="mae">
            <header className="cabecalho">
                <img src="https://media.discordapp.net/attachments/1290667549364846647/1307072768700973147/image-removebg-preview.png?ex=6738f9e0&is=6737a860&hm=01b8bae84c3a7ab8f75a0b5e75b9251f99d0fce12c535a98e258dc8496acdfb8&=&format=webp&quality=lossless" alt="Logo Dart" className="logo" />
                <nav className="links">
                    <a href="#home">HOME</a>
                    <a href="#servicos">SERVIÇOS</a>
                    <a href="#sobre-nos">SOBRE NÓS</a>
                    <a href="#contato">CONTATO</a>
                </nav>
            </header>
        </div>
    );
}
