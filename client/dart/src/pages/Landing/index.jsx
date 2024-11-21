import './index.scss';

export default function Landing() {
    return (
        <div className="mae">
        <header className="cabecalho">
            <img src="/images/logodart.webp" alt="Logo Dart" className="logo" />
            <nav className="links">
                <a href="#home">HOME</a>
                <a href="#avaliações">AVALIAÇÕES</a>
                <a href="#sobre-nos">SOBRE NÓS</a>
                <a href="#contato">CONTATO</a>
            </nav>
        </header>
    
        <div className="faixa1" id="home">
    <h1>
        Bem Vindo A <span className="dart">DART</span><br />
        <span>Technologies</span>
    </h1>
    <img className="curva-logo" src="/images/curvalogo.png" alt="Logo da curva" />
    <p>Uma empresa de tecnologia própria para o seu negócio!</p>
</div>

        
        <div className="sobre">
        <p>Obrigado pelo seu interesse em nós!</p>
    <h1>A Dart Technologies é a principal agência de web design e desenvolvimento web.</h1>

    <div className="sobre-container">
        <div className="texto">
            <p>Combinamos tecnologia e negócios para gerar resultados frutíferos e sucesso empresarial. Nosso objetivo é entregar confiabilidade, capacidade e longevidade, fazendo seu site crescer e prosperar. Na DART Technologies, destacamo-nos no marketing digital, software web, design e soluções para qualquer necessidade online.</p>
        </div>
        <div className="imagem">
            <img src="/images/imagemsobre.png" alt="Imagem sobre" />
        </div>
    </div>
    <div className="logossobre">
    <div>
        <img src="/images/projetoslogo.png" alt="imagemprojeto" />
        <h1>Projetos</h1>
    </div>
    <div>
        <img className="clientes-logo" src="/images/clienteslogo.png" alt="imagemclientes" />
        <h1>Clientes</h1>
    </div>
    <div>
        <img src="/images/experiencialogo.png" alt="imagemexperiencia" />
        <h1>Experiências</h1>
    </div>
    <div>
        <img src="/images/companylogo.png" alt="imagemcompany" />
        <h1>Companhia</h1>
    </div>
</div>

</div>


<div className="sobre" id="sobre-nos">
    <h2>Por que nos escolher</h2>
    <h1>Para suas necessidades de desenvolvimento web?</h1>
    <p>Somos apaixonados pelo que fazemos e comprometidos com a qualidade. Nosso foco é entregar projetos bem feitos, no prazo, com uma equipe especializada em cada área do processo. Aqui estão alguns motivos para confiar em nossos serviços.</p>
    
    <div className="cards">
        <div className="card">
            <img src="/images/IMGcerebro.webp" alt="" />
            <h1>Experiência</h1>
            <p>Contratar-nos significa contar com profissionais experientes e um sistema de gerenciamento simplificado, garantindo que seus projetos sejam entregues no prazo com a ajuda de um time talentoso.</p>
        </div>
        <div className="card">
            <img src="/images/IMGpessoas.webp" alt="" />
            <h1>Equipe Dedicada</h1>
            <p>Temos equipes dedicadas: desenvolvedores web focam no design, enquanto nossa equipe de design gráfico cuida das imagens para garantir o sucesso do seu site.</p>
        </div>
        <div className="card">
            <img src="/images/IMGrelogio.webp" alt="" />
            <h1>Tempo de resposta rápido</h1>
            <p>Nosso objetivo é entregar soluções de qualidade dentro dos prazos, mantendo os clientes informados sobre o progresso e alinhados com sua visão.</p>
        </div>
        <div className="card">
            <img src="/images/IMGticket.webp" alt="" />
            <h1>Preços competitivos</h1>
            <p>Oferecemos preços competitivos sem comprometer a qualidade, atendendo às demandas dos clientes com alta eficiência.</p>
        </div>
    </div>
</div>


    
        <div className="avaliacao" id='avaliações'>
            <h1>Avaliações de nossos clientes</h1>
            <div className="avaliacoes-container">
                <div className="conteudo">
                    <h2>Kiarnet</h2>
                    <h2>⭐⭐⭐⭐⭐</h2>
                    <p>Otima empresa, depois que minha empresa subiu na web meus negocios só aumentaram!</p>
                </div>
                <div className="conteudo">
                    <h2>Dart</h2>
                    <h2>⭐⭐⭐⭐⭐</h2>
                    <p>Tudo nosso, nada deles</p>
                </div>
            </div>
        </div>
    
        <div className="final" id="contato">  
            <div className="comentario">
                <h1>Nos contate</h1>
                <p>Veja nosso serviço e faça comentários dizendo o que achou da sua experiência!</p>
                <div className="conteudo">
                    <label htmlFor="nome">Nome *</label>
                    <input type="text" id="nome" placeholder="Digite seu nome" />
                </div>
                <div className="conteudo">
                    <label htmlFor="empresa">Empresa</label>
                    <input type="text" id="empresa" placeholder="Digite o nome da empresa" />
                </div>
                <div className="conteudo">
                    <label htmlFor="email">Endereço de Email *</label>
                    <input type="email" id="email" placeholder="Digite seu email" />
                </div>
                <div className="conteudo">
                    <label htmlFor="mensagem">Mensagem *</label>
                    <textarea id="mensagem" placeholder="Escreva sua mensagem aqui"></textarea>
                </div>
                <button type="submit">Enviar</button>
            </div>
        </div>
    </div>
    
    );
}