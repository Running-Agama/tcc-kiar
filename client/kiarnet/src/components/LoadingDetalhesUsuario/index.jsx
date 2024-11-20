import { MoonLoader } from "react-spinners";
import './index.scss'
export default function LoadingDetalhesUsuario(){
    return(
        <div className="loading-overlay">
            <MoonLoader color="white"/>
        </div>
    )
}