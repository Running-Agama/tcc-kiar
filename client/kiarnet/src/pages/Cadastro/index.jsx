import { useEffect, useState } from 'react';
import InformeDados from '../../components/cadastro-passos/Informedados';
import AgendaInstalacao from '../../components/cadastro-passos/Pagamento';
import './index.scss'
import Barraprogresso from '../../components/Barraprogresso';
import Pagamento from '../../components/cadastro-passos/Pagamento';
import BancoConta from '../../components/inserir-dados-bancarios';

export default function Cadastro(){
    const [passo, setPasso] = useState(0)
    return(

    <div className="conteudo">
        <div className="barra-progresso" style={{position: 'sticky', width: '100%', top: '10px'}}>
            <Barraprogresso progresso={(35*passo)}/>
            <button onClick={()=> setPasso(passo - 1)}>Voltar</button>
        </div>
         
        <div className="campo-passos">
            {passo === 0 && <InformeDados/>}
            {passo === 1 && <Pagamento/>}
            {passo === 2 && <BancoConta/>}
        </div>



        <button className='botao' onClick={()=>setPasso(passo + 1)}>Avançar</button>
    </div>
    )
}