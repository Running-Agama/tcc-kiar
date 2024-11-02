import './index.scss'
export default function Footer(){
    return(
        <footer class="ft">
        <div class="ft-warp">
            <div class="ft-warp1">
                <h2>Company</h2>
                <p>Sobre nós</p>
                <p>Carreiras</p>
                <p>Imprensa</p>
            </div>
            <div class="ft-warp2">
                <h2>Support</h2>
                <p>Contatos</p>
                <a href="/duvidas">Duvidas</a>
            </div>
            <div class="ft-warp3">
                <h2>Legal</h2>
                <p>Politica de Privacidade</p>
                <p>Termos de Serviço</p>
                <p>Politica de Cookies</p>
            </div>
        </div>
        <div class="final-footer">
            <p>© 2024 Kiarnet. Todos os direitos reservados.</p>
        </div>
    </footer>
    )
}