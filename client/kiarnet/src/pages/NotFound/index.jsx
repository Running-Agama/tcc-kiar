import './index.scss'
import { useNavigate } from "react-router-dom";


export default function Notfound(){
    const navigate = useNavigate()
    return (
        <div className="mae">
            
        <div className="meio">
            <h1 className='num'>404</h1>
            <p className='titulo'>Página não encontrada</p>
            <p className='subt'>O link que você seguiu pode estar quebrado, ou a página pode ter sido removida.</p>
            <button onClick={navigate('/')}>Voltar ao inicio</button>

            
   
        </div>
        <p className='footer'>© 2024 KiarNet. Todos os direitos reservados.</p>
        </div>
    )
}