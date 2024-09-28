import { useState } from 'react'
import './index.scss'

export default function AgendaInstalacao(){
    const [escolhaDebito, setEscolhaDebito] = useState(false)

    return(
        <div className="conteudo">
            <p>Escolha a data de vencimento:</p>
            <div className="opcoes-data">
                <button>03</button>
                <button>03</button>
                <button>03</button>
                <button>03</button>
            </div>

            <div className="campos-informedados">
                <p>Informe seu email para envio da fatura:</p>
                
                <input type="text"  className="campo-um-input" placeholder="email para envio da fatura"/>
                <input type="text"  className="campo-um-input" placeholder="Confirme o email"/>
                

                <p>Deseja cadastrar sua conta em débito automatico?</p>
                <p>Ver como colocar os labels abaixo dos botoes depois</p>
                <div className="campo"> 
                    <input type="radio" name='selecao-debito' id='selecao-debito-sim' onChange={()=>setEscolhaDebito(true)}></input>
                    <input type="radio" name='selecao-debito' id='selecao-debito-nao' onChange={()=>setEscolhaDebito(false)}></input>
                                        
                    <label htmlFor="selecao-debito-sim">Sim</label>
                    <label htmlFor="selecao-debito-nao">Não</label>
                </div>
                {escolhaDebito == true ? <p>ta true</p> : <p>ta false</p>}

                <p>Confirme seu endereço:</p>

                <div className="info-endereco">
                    <div className="linha-info-endereco">
                        <p className='nome-linha'>CEP:</p>
                        <p>02121-000</p>
                    </div>
                    <div className="linha-info-endereco">
                        <p>Bairro:</p>
                        <p>Bairro do Limoeiro</p>
                    </div>
                    <div className="linha-info-endereco">
                        <p className='nome-linha'>Cidade:</p>
                        <p>Sampa</p>
                    </div>
                    <div className="linha-info-endereco">
                        <p className='nome-linha'>Estado:</p>
                        <p>SAMPA MEOOO</p>
                    </div>
                    <div className="linha-info-endereco">
                        <p className='nome-linha'>Endereço/Rua:</p>
                        <p>Rua Mariano Procópio</p>
                    </div>
                    <div className="linha-info-endereco">
                        <p>Número:</p>
                        <p>17</p>
                    </div>




                </div>
            </div>

        </div>
    )
}