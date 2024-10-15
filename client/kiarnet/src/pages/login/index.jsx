import './index.scss'

export default function Login() {

    return (
        <div className='pagina-login'>
            <div className="box">
                <section>
                    <div className="cpf">
                        <h1>CPF</h1>
                        <input type="text" placeholder='Insira seu CPF' />
                    </div>
                    <div className="senha">
                        <h1>Senha</h1>
                        <input type="password" placeholder='*********' />
                    </div>
                </section>
                <footer>
                    <div className='entrar'>
                        <a href="">Entrar</a>
                    </div>
                    <div className='semSenha'>
                        <a href="">Esqueceu a senha?</a>
                    </div>
                </footer>
            </div>
        </div>
    )
}