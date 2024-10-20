import Cabecalho from '../../components/cabecalhoA';
import './index.scss';
import { useNavigate } from 'react-router-dom';

export default function Contato() {
    const navigate = useNavigate();

    return (
        <div className="conteudo-contato">
            <Cabecalho/>
        
        <div className="contatoContainer">
            
            <header className="headerContato">
                <h1>Entre em Contato com a KiarNet</h1>
                <p>Estamos aqui para responder suas dúvidas e ouvir suas sugestões!</p>
            </header>

            <div className="formContato">
                <form>
                    <div className="inputGroup">
                        <label htmlFor="nome">Nome</label>
                        <input type="text" id="nome" placeholder="Seu nome completo" required />
                    </div>
                    <div className="inputGroup">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" placeholder="Seu melhor email" required />
                    </div>
                    <div className="inputGroup">
                        <label htmlFor="mensagem">Mensagem</label>
                        <textarea id="mensagem" rows="5" placeholder="Escreva sua mensagem aqui..." required></textarea>
                    </div>
                    <button type="submit" className="btnEnviar">Enviar Mensagem</button>
                </form>
            </div>

            <div className="infoContato">
                <h2>Informações de Contato</h2>
                <p>Email: suporte@kiarnet.com</p>
                <p>Telefone: +55 (11) 1234-5678</p>
                <p>Endereço: Av. Conexão Digital, 1000, São Paulo, SP</p>
            </div>

            <div className="btnVoltarHome">
                <button onClick={() => navigate('/')}>Voltar à Home</button>
            </div>
        </div>
        </div>
    );
}
