import {useState } from 'react';
import './index.scss'
import Barraprogresso from '../../components/Barraprogresso';
import {useForm} from 'react-hook-form'

export function Cadastro() {
    const [passo, setPasso] = useState(0)
    const {  handleSubmit ,watch, register, formState: {errors, isValid} } = useForm({
        reValidateMode: 'onChange',
        mode: 'onChange'})
    function proximoPasso() {

    }
    function passoAnterior() {
        if (!passo >= 0) {
            setPasso(passo - 1)
        }
    }

    const onSubmit = (data) => {
        console.log(data); // Aqui você extrai o objeto com os dados do formulário
    };
    return (



        <div className="conteudo">
            <div className="barra-progresso" style={{ position: 'sticky', width: '100%', top: '10px' }}>
                <Barraprogresso progresso={(33 * passo)} />
                <button onClick={passoAnterior}>Voltar</button>
            </div>


            <div className="campo-passos">
                <form onSubmit={handleSubmit(onSubmit)}>
                    {passo === 0 &&
 <div className="conteudo">
 <h1>Informe seus dados</h1>
 <div className="campos-informedados">

     {/* Nome Completo */}
     <div className="linha">
         <input 
             type="text" 
             placeholder="Nome completo" 
             className='campo-um-input' 
             {...register('nome', { 
                 required: "O nome completo é obrigatório" 
             })} 
         />
         {errors.nome && <p style={{fontSize: '10px', color: 'red', position: 'absolute', marginTop:'50px'}}>{errors.nome.message}</p>}
     </div>

     {/* CEP */}
     <div className="linha">
         <input 
             type="text"
             placeholder="CEP:" 
             className='campo-um-input' 
             {...register('cep', {
                 required: "CEP obrigatório", 
                 pattern: { 
                     value: /^[0-9]{5}-?[0-9]{3}$/, 
                     message: "Formato de CEP inválido" 
                 } 
             })} 
         />
         {errors.cep && <p style={{fontSize: '10px', color: 'red', position: 'absolute', marginTop:'50px'}}>{errors.cep.message}</p>}
     </div>

     {/* Celular e Telefone */}
     <div className="linha">
         <input 
             type="tel" 
             className="campo" 
             placeholder="Celular"
             {...register('celular', { 
                 required: "O celular é obrigatório" 
             })} 
         />
         {errors.celular && <p style={{fontSize: '10px', color: 'red', position: 'absolute', marginTop:'50px'}}>{errors.celular.message}</p>}

         <input 
             type="tel" 
             className="campo" 
             placeholder="Telefone (opcional)"
             {...register('telefone')} 
         />
     </div>

     {/* Email */}
     <div className="linha">
         <input 
             type="email" 
             placeholder="Email:" 
             className='campo-um-input' 
             {...register('email', { 
                 required: "O email é obrigatório" 
             })} 
         />
         {errors.email && <p style={{fontSize: '10px', color: 'red', position: 'absolute', marginTop:'50px'}}>{errors.email.message}</p>}
     </div>

     {/* CPF */}
     <div className="linha">
         <input 
             type="text" 
             className="campo-um-input" 
             placeholder="CPF:" 
             {...register('cpf', { 
                 required: "O CPF é obrigatório" 
             })} 
         />
         {errors.cpf && <p style={{fontSize: '10px', color: 'red', position: 'absolute', marginTop:'50px'}}>{errors.cpf.message}</p>}
     </div>

     {/* Número e Data de Nascimento */}
     <div className="linha">
         <input 
             type='number' 
             className='campo' 
             placeholder='Número'
             {...register('numeroEndereco', { 
                 required: "O número do endereço é obrigatório" 
             })} 
         />
         {errors.numeroEndereco && <p style={{fontSize: '10px', color: 'red', position: 'absolute', marginTop:'50px'}} >{errors.numeroEndereco.message}</p>}
        
        <div className="dt" style={{height: '45px' , width: '45%'}}>
        <input 
             type="date" 
             className="campo" 
             placeholder="Data de nascimento:" 
             {...register('datanascimento', { 
                 required: "A data de nascimento é obrigatória" ,
                 valueAsDate: true
             })} 
             style={{width:'100%'}}
         />
         {errors.datanascimento && <p style={{fontSize: '10px', color: 'red'}}>{errors.datanascimento.message}</p>}
        </div>

     </div>
 </div>
 <button className='botao' disabled={!isValid} onClick={()=>setPasso(passo + 1)}>proximo</button>
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