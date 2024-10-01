import { useEffect, useState } from 'react';
import InformeDados from '../../components/cadastro-passos/Informedados';
import AgendaInstalacao from '../../components/cadastro-passos/Agendainstalacao';
export default function Cadastro(){
    const [passo, setPasso] = useState(0)

    function verificarPasso(){
        if(passo === 1){
            return <InformeDados/>
        }
        if(passo === 2){
            return <AgendaInstalacao/>
        }
    }
    return(

    <div className="">
        <p>Barra de progresso deve estar aqui</p>
        
        {verificarPasso}

        <button onClick={setPasso(passo + 1)}>Proximo passo</button>
    </div>
    )
}