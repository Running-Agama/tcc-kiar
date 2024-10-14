

import { useContext, useEffect, useState } from 'react'
import './index.scss'
import BancoConta from '../../inserir-dados-bancarios'
import { contextoCadastro } from '../../../pages/Cadastro'
import { useDetectClickOutside } from 'react-detect-click-outside';
import axios from 'axios'
export default function Pagamento() {
    
    const [confirmarEmail, setConfirmarEmail] = useState('')


   const [
    cep, setCep,
    dadosEndereco, setDadosEndereco,
    escolhaDebito, setEscolhaDebito,
    tipoResidencia, setTipoResidencia,
    emailFatura, setEmailFatura,
    diaVencimento, setDiaVencimento,
    nomeCompleto, setNomeCompleto,
    numeroEndereco, setNumeroEndereco
   ]
    = useContext(contextoCadastro)
   

    async function consultaCEP(){

       const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/ `)
       setDadosEndereco(response.data)
       console.log(dadosEndereco)
    }

    useEffect(()=>{
        consultaCEP()
    },[])
    return (

     
        <div className="conteudo">
            <p>Escolha a data de vencimento:</p>
            <div className="opcoes-data">
                <button onClick={()=>setDiaVencimento(24)}>24</button>
                <button onClick={()=>setDiaVencimento(18)}>18</button>
                <button onClick={()=>setDiaVencimento(12)}>12</button>
                <button onClick={()=>setDiaVencimento(6)}>06</button>
            </div>
 
            <div className="campos-informedados">
                <p>Informe seu email para envio da fatura:</p>

                <input type="text" className="campo-um-input" placeholder="email para envio da fatura" onChange={(e)=>setEmailFatura(e.target.value)} />
                <input type="text" className="campo-um-input" placeholder="Confirme o email" onChange={(e)=>setConfirmarEmail(e.target.value)} />


                <p>Deseja cadastrar sua conta em débito automatico?</p>
                <div className="campo">

                    <div className="campo-input-radio">
                        <div className="input-radio">
                            <input type="radio" name='selecao-debito' id='selecao-debito-sim' onChange={() => setEscolhaDebito(true)}></input>
                            <label htmlFor="selecao-debito-sim">Sim</label>
                        </div>

                        <div className="input-radio">
                            <input type="radio" name='selecao-debito' id='selecao-debito-nao' onChange={() => setEscolhaDebito(false)}></input>
                            <label htmlFor="selecao-debito-nao">Não</label>
                        </div>
                    </div>





                </div>
                <div className="debito-automatico">
                    {escolhaDebito === true && <BancoConta/>}
                </div>
            
                <p>Confirme seu endereço:</p>

                <div className="info-endereco">
                    <div className="linha-info-endereco">
                        <p className='nome-linha'>CEP:</p>
                        <p>{dadosEndereco.cep}</p>
                    </div>
                    <div className="linha-info-endereco">
                        <p>Bairro:</p>
                        <p>{dadosEndereco.bairro}</p>
                    </div>
                    <div className="linha-info-endereco">
                        <p className='nome-linha'>Cidade:</p>
                        <p>{dadosEndereco.localidade}</p>
                    </div>
                    <div className="linha-info-endereco">
                        <p className='nome-linha'>Estado:</p>
                        <p>{dadosEndereco.uf}</p>
                    </div>
                    <div className="linha-info-endereco">
                        <p className='nome-linha'>Endereço/Rua:</p>
                        <p>{dadosEndereco.logradouro}</p>
                    </div>
                    <div className="linha-info-endereco">
                        <p>Número:</p>
                        <p>{numeroEndereco}</p>
                    </div>

                   



                    <div className="campo-tipo-residencia">
                    <p>Selecione o tipo da sua residência:</p>
                        <div className="campo-input-radio">
                            <div className="input-radio">
                                <input type="radio" name="selecao-residencia" id="selecao-residencia-casa" onChange={() => setTipoResidencia('Casa')} />
                                <label htmlFor="selecao-residencia-casa">Casa</label>
                            </div>

                            <div className="input-radio">
                                <input type="radio" name="selecao-residencia" id="selecao-residencia-apartamento" onChange={() => setTipoResidencia('Apartamento')} />
                                <label htmlFor="selecao-residencia-apartamento">Apartamento</label>
                            </div>
                        </div>

                        <input type="text" className='complemento' placeholder='Complemento (opcional)' maxLength="120" />
                    </div>



                    
                </div>
                
            </div>

        </div>
    )
}