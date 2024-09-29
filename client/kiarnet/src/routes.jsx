
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import AgendaInstalacao from "./components/cadastro-passos/Agendainstalacao"
import InformeDados from "./components/cadastro-passos/Informedados"
import Cadastro from './pages/Cadastro/index.jsx'

//esse apaga n


export default function Rotas(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/cadastro' element={<Cadastro/>}/>
                <Route path='/componentes/cadastro/informedados' element={<InformeDados/>}/>
                <Route path='/componentes/cadastro/agendainstalacao' element={<AgendaInstalacao/>}/>
            </Routes>
        </BrowserRouter>
    )
}