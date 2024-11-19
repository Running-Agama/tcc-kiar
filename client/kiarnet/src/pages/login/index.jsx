
import './index.scss';
import {useFieldArray, useForm, useWatch} from 'react-hook-form'


export default function Login() {
    const {
        register,
        watch
    } 
    = useForm()


    return (
        <div className='pagina-login-container'>
            <div className='pagina-login'>
                <div className="box">
                    <form>
                        <div className="form-login">
                        <h2>Bem-vindo à Kiar Net</h2>
                        <p>Conecte-se para acessar sua conta</p>
                        <div className="input-group cpf">
                            <label htmlFor="cpfInput">CPF</label>
                            <input id="cpfInput" type="text" placeholder='Insira seu CPF' aria-label="CPF" />
                        </div>
                        <div className="input-group senha">
                            <label htmlFor="senhaInput">Senha</label>
                            <input id="senhaInput" type="password" placeholder='*********' aria-label="Senha" />
                        </div>


                        <button className='entrar'>Entrar</button>
                        <a className='semSenha' href="">Esqueceu a senha?</a>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    );
}
