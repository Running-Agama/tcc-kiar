import {useState } from 'react';
import './index.scss'
import Barraprogresso from '../../components/Barraprogresso';
import {useForm} from 'react-hook-form'

export function Cadastro() {
    const [passo, setPasso] = useState(0)
    const { watch, register, formState: {errors} } = useForm({mode: "all"})
    function proximoPasso() {

    }
    function passoAnterior() {
        if (!passo >= 0) {
            setPasso(passo - 1)
        }
    }

    return (



        <div className="conteudo">
            <div className="barra-progresso" style={{ position: 'sticky', width: '100%', top: '10px' }}>
                <Barraprogresso progresso={(33 * passo)} />
                <button onClick={passoAnterior}>Voltar</button>
            </div>


            <div className="campo-passos">
                <form onSubmit={(e)=> console.log(e)}>
                    {passo === 0 &&
                               <div className="conteudo">
                               <h1>Informe seus dados</h1>
                               <div className="campos-informedados">
                  
                                   <div className="linha">
                                   <input 
                                        type="text" 
                                        placeholder="Nome completo" 
                                        className='campo-um-input' 
                                        id="username"
                                        name="username" 
                                        {...register('nome', {required: true, message: "O nome completo é obrigatório fera" })}
                                        />
                                        {errors.username && <p>errors.username</p>}
                                   </div>
                                   
                                   <div className="linha">
                                       <input 
                                        type="text"
                                        pattern='[0-9]+' 
                                        placeholder="CEP:" 
                                        className='campo-um-input' 
                                        {...register('cep', {required: true, message: "CEP obrigatorio"})}/>
                                   </div>
                   
                                   <div className="linha">
                                       <input type="tel" className="campo" placeholder="Celular"
                                       {...register('celular', {required: true})} />
                   
                                       <input type="tel" className="campo" placeholder="Telefone (opcional)"
                                       {...register('telefone', {required: false})}  />
                                   </div>
                   
                                   
                                   <div className="linha">
                                       <input type="email" placeholder="Email:" className='campo-um-input' 
                                       {...register('email', {required: false})}  />
                                   </div>
                   
                                   <div className="linha">
                                   <input type="text" className="campo-um-input" placeholder="CPF:" 
                                    {...register('cpf', {required: true})}  />
                                   </div>
                                   <div className="linha">
                                       <input type='number' className='campo' placeholder='Número'
                                       {...register('numeroEndereco', {required:true})}/>
                                       <input type="date" className="campo" placeholder="Data de nascimento:" 
                                       {...register('datanascimento', {required: true})} />
                                   </div>
                               </div>   
                               <pre>
                           {JSON.stringify(watch(), null, 2)}
                           <input type="submit"/>
                       </pre>

                               <button className='botao' onClick={()=>setPasso(passo + 1)}>proximo</button>
                           </div>
                           

                          

                    }
                    {
                        passo === 1 &&
                        <div className="conteudo-passo2">
   
                                <p>Escolha a data de vencimento:</p>
                                <div className="opcoes-data">
                                    <button >24</button>
                                    <button >18</button>
                                    <button >12</button>
                                    <button >06</button>
                                </div>

                                <div className="campos-informedados">
                                    <p>Informe seu email para envio da fatura:</p>

                                    <div className="campo-email">
                                        <input type="text" className="campo-um-input" placeholder="email para envio da fatura" />
                                        <input type="text" className="campo-um-input" placeholder="Confirme o email"  />
                                    </div>



                                    <p>Deseja cadastrar sua conta em débito automatico?</p>
                                    <div className="campo">

                                        <div className="campo-input-radio">
                                            <div className="input-radio">
                                                <input type="radio" name='selecao-debito' id='selecao-debito-sim'></input>
                                                <label htmlFor="selecao-debito-sim">Sim</label>
                                            </div>

                                            <div className="input-radio">
                                                <input type="radio" name='selecao-debito' id='selecao-debito-nao'></input>
                                                <label htmlFor="selecao-debito-nao">Não</label>
                                            </div>
                                        </div>
                                    </div>

                                    <p>Confirme seu endereço:</p>

                                    <div className="info-endereco">
                                        <div className="linha-info-endereco">
                                            <p className='nome-linha'>CEP:</p>
                                            <p></p>
                                        </div>
                                        <div className="linha-info-endereco">
                                            <p>Bairro:</p>
                                            <p></p>
                                        </div>
                                        <div className="linha-info-endereco">
                                            <p className='nome-linha'>Cidade:</p>
                                            <p></p>
                                        </div>
                                        <div className="linha-info-endereco">
                                            <p className='nome-linha'>Estado:</p>
                                            <p></p>
                                        </div>
                                        <div className="linha-info-endereco">
                                            <p className='nome-linha'>Endereço/Rua:</p>
                                            <p></p>
                                        </div>
                                        <div className="linha-info-endereco">
                                            <p>Número:</p>
                                            <p></p>
                                        </div>

                                        <div className="campo-tipo-residencia">
                                            <p>Selecione o tipo da sua residência:</p>
                                            <div className="campo-input-radio">
                                                <div className="input-radio">
                                                    <input type="radio" name="selecao-residencia" id="selecao-residencia-casa"  />
                                                    <label htmlFor="selecao-residencia-casa">Casa</label>
                                                </div>

                                                <div className="input-radio">
                                                    <input type="radio" name="selecao-residencia" id="selecao-residencia-apartamento"/>
                                                    <label htmlFor="selecao-residencia-apartamento">Apartamento</label>
                                                </div>
                                            </div>

                                            <input type="text" className='complemento' placeholder='Complemento (opcional)' maxLength="120" />
                                        </div>

                                        <button  className='botao' onClick={()=>setPasso(passo + 1)}>proximo</button>
                                        
                                    </div>

                                </div>

                            </div>

                    }
                    {
                        passo === 2 &&
                        <div className="conteudo-passo3">
                            <h1>Selecione as datas de instalação</h1>

                                <div className="opcoes-instalacao">
                                    <div className="opcao-instalacao">
                                        <p>primeira opção</p>
                                        <input type="date" name="" id="" />
                                    </div>

                                    <div className="opcao-instalacao" style={{marginTop: "30px"}}>
                                        <p>Segunda opção</p>
                                        <input type="date" name="" id="" />
                                    </div>
                                </div>

                                <button className="botao">
                                    Finalizar cadastro
                                </button>
                            </div>

                    }

                </form>

            </div>
        </div>
    )
}