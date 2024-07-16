import style from './rodape.module.css'
import logo from '../../Imgs/logo.png'

function Rodape () {
    return (
        <footer className={style.rodape}>
            <img className={style.logo} src={logo} alt='Logo da AluraFlix'/>
        </footer>
    )
}

export default Rodape