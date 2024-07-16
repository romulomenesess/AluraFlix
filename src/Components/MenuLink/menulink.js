import { Link, useLocation } from 'react-router-dom'
import style from './menulink.module.css'
export default function Menulink ( {children, to}) {

    const localizacao = useLocation();
    return (
        <Link className={`
            ${style.link}
            ${localizacao.pathname === to ? 
            style.linkDestacado : ''}`}  
            to={to}> {children}
        </Link>
    )
}