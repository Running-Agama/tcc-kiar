//TODO: verificar se dados são validos (data de nascimento, celular, email, cpf e outros) ao apertar en avançar
import { useContext } from 'react'
import './index.scss'
import {contextoCadastro} from '../../../pages/Cadastro'
import { useForm } from 'react-hook-form';

export default function InformeDados() {

   const {}

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    console.log(errors);

    return (

    )
}