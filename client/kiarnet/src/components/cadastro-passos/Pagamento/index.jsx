

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

     
       
    )
}