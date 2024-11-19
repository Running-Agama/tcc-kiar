import './index.scss';

export default function Landing() {
    return (
        <div className="mae">
        <header className="cabecalho">
            <img src="/images/image-removebg-preview.png" alt="Logo Dart" className="logo" />
            <nav className="links">
                <a href="#home">HOME</a>
                <a href="#servicos">SERVIÇOS</a>
                <a href="#sobre-nos">SOBRE NÓS</a>
                <a href="#contato">CONTATO</a>
            </nav>
        </header>
    
        <div className="faixa1" id="home">  
            <h1>
                Bem Vindo A <span className="dart">DART</span><br />
                <span>Technologies</span>
            </h1>
            <p>Uma empresa de tecnologia própria para o seu negócio!</p>
            <button className="comecar" onClick={() => document.getElementById("sobre-nos").scrollIntoView({ behavior: 'smooth' })}>COMEÇAR</button>
        </div>
        
        <div className="sobre">
        <p>Obrigado pelo seu interesse em nós!</p>
    <h1>A Dart Technologies é a principal agência de web design e desenvolvimento web.</h1>

    <div className="sobre-container">
        <div className="texto">
            <p>Combinamos tecnologia e negócios para gerar resultados frutíferos e sucesso empresarial. Nosso objetivo é entregar confiabilidade, capacidade e longevidade, fazendo seu site crescer e prosperar. Na RR Technologies, destacamo-nos no marketing digital, software web, design e soluções para qualquer necessidade online.</p>
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
            <img src="/images/clienteslogo.png" alt="imagemclientes" />
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
            <h1>para suas necessidades de desenvolvimento web?</h1>
            <p>Temos paixão e amor pelo que fazemos e não acreditamos em cortar atalhos e estabelecer expectativas erradas. Nosso objetivo é melhorar a cada dia e mostrar o que realmente somos, e não fingimos em nenhuma circunstância. Existem vários motivos que farão você se apaixonar por nós por aproveitar serviços de desenvolvimento web de primeira linha. Aqui estão alguns deles.</p>
            <div className="cards">
                <div className="card">
                    <img src="/images/IMGcerebro.webp" alt="" />
                    <h1>Experience</h1>
                    <p>A experiência conta é um ditado comum, e contratar-nos significa contratar profissionais que tenham anos de experiência para agregar ao seu gatinho para que seus projetos caiam no lugar certo. Além disso, temos um sistema de gerenciamento de projetos simplificado para atender aos requisitos do seu projeto. Conectar-se conosco permite que você navegue por um grande conjunto de talentos que podem realizar sua tarefa dentro de prazos fixos.</p>
                </div>
                <div className="card">
                    <img src="/images/IMGpessoas.webp" alt="" />
                    <h1>Dedicated Team</h1>
                    <p>Cada um tem a sua chávena de chá para beber e por isso não confundimos as diferentes áreas de funcionalidade. Temos equipes dedicadas para design e gráficos. Enquanto nossos desenvolvedores web fazem a parte de design, temos nossa própria equipe de design gráfico que cuida de toda a parte de imagens de qualidade para um site de sucesso.</p>
                </div>
                <div className="card">
                    <img src="/images/IMGrelogio.webp" alt="" />
                    <h1>Rapid turnaround time</h1>
                    <p>Nosso objetivo é entregar um trabalho de qualidade dentro de prazos fixos e, portanto, estamos comprometidos em entregar soluções quando nossos clientes precisam delas, sem fazê-los esperar e estender-se além do prazo fixo. Nós traçamos nossos planos de acordo e também atualizamos regularmente nossos clientes sobre o progresso para conseguir o que você deseja. Damos ouvidos à sua visão</p>
                </div>
                <div className="card">
                    <img src="/images/IMGticket.webp" alt="" />
                    <h1>Competitive pricing</h1>
                    <p>O preço é um fator crucial que todo empresário considera ao contratar uma empresa de desenvolvimento web. Somos os melhores do mercado e oferecemos preços competitivos aos nossos clientes atendendo todas as demandas dos clientes com maiores níveis de eficiência.</p>
                </div>
            </div>
        </div>
    
        <div className="avaliacao">
            <h1>Avaliações</h1>
            <div className="avaliacoes-container">
                <div className="conteudo">
                    <h2>CR7</h2>
                    <p>Muchas gracias afición, esto es para vosotros Siuuu</p>
                </div>
                <div className="conteudo">
                    <h2>Mc Lan</h2>
                    <p>não ame, faça amor</p>
                </div>
            </div>
        </div>
    
        <div className="final" id="contato">  
            <div className="comentario">
                <h1>Registrar interesse</h1>
                <p>Faça comentários dizendo sobre o que achou da sua experiência e o que poderíamos melhorar.</p>
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