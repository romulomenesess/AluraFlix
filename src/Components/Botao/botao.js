import style from './botao.module.css'

const Botao = (props) => {
    return (
        <button className={style.botao}>
            {props.children}
        </button>
    )
}
export default Botao