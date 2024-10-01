import { useEffect, useState } from 'react';
import InformeDados from '../../components/cadastro-passos/Informedados';
import AgendaInstalacao from '../../components/cadastro-passos/Agendainstalacao';
import './index.scss'
import Barraprogresso from '../../components/Barraprogresso';

export default function Cadastro(){
    const [passo, setPasso] = useState(0)
    return(

    <div className="conteudo">
        <div className="barra-progresso" style={{position: 'sticky', width: '100%', top: '10px'}}>
            <Barraprogresso progresso={(35*passo)}/>
            <button onClick={()=> setPasso(passo - 1)}>Voltar</button>
        </div>
        
        <p>Barra de progresso deve estar aqui</p>
        

        {passo == 0 && <InformeDados/>}
        {passo == 1 && <AgendaInstalacao/>}


        <button className='botao' onClick={()=>setPasso(passo + 1)}>Avançar</button>
    </div>
    )
}