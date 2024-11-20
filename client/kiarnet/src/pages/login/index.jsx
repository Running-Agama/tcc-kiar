
import './index.scss';
import { useFieldArray, useForm, useWatch } from 'react-hook-form'
import loginadm from '../../service/loginadm/loginadm';
import InputMask from 'react-input-mask';
import {useNavigate} from 'react-router-dom'
export default function Login() {
    const {
        register,
        watch,
        handleSubmit,
        formState: { isvalid, errors }

    }
        = useForm({
            mode: "onChange"
        })

    const navegar = useNavigate()

    async function handleLoginAdm(data){
        const resposta = await loginadm(data)
        if(resposta === 'não encontrado'){
            return console.log('não encontrado kkk')
        }
        sessionStorage.setItem('token', resposta)
        navegar('/crm')
    }
    return (
        <div className='pagina-login-container'>
            <div className='pagina-login'>
                <div className="box">
                    <form onSubmit={handleSubmit(handleLoginAdm)}>
                        <div className="form-login">
                            <h2>Bem-vindo à Kiar Net</h2>
                            <p>Conecte-se para acessar sua conta</p>
                            <div className="input-group cpf">
                                <label htmlFor="cpfInput">CPF</label>
                                <InputMask
                                    mask={'999.999.999-99'}
                                    id="cpfInput" 
                                    type="text" 
                                    placeholder='Insira seu CPF' 
                                    aria-label="CPF" 
                                    {...register('cpf', {
                                         required: true
                                    })} 
                                />
                                

                            </div>
                            <div className="input-group senha">
                                <label htmlFor="senhaInput">Senha</label>

                                <input id="senhaInput" type="password" placeholder='*********' aria-label="Senha" {...register("senha", {
                                    required: true
                                })} />
                            </div>
                            
                            <div className="botoes-entrar">
                                <button className='entrar'disabled={isvalid} type='submit'>Entrar</button>
                            </div>

                        </div>
                    </form>

                </div>
            </div>
        </div>
    );
}
