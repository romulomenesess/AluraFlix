import style from './cabecalho.module.css'
import logo from '../../Imgs/logo.png'
import CabecalhoLink from '../CabecalhoLink/cabecalholink'

function Cabecalho () {
    return (
        <header className={style.cabecalho}>
            <img className={style.logo} src={logo} alt='Logo da AluraFlix'></img>
            <div className={style.botoes}>
                <CabecalhoLink />
            </div>
        </header>
    )
}
export default Cabecalho