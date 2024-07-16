import style from './banner.module.css'
import banner from '../../Imgs/banner.png'

function Banner () {
    return (
        <section className={style.secao}>
            <div className={style.destaque}>
                <div className={style.conteudoEscrito}>
                    <h2 className={style.titulo}>SEO com React</h2>
                    <p className={style.paragrafo}>Eu to aqui pra nesse vídeo dizer que a gente vai
                        aprender a começar uma app inspirada no desenho 
                        Pokémon com Nextjs e React, ver algumas dicas sobre 
                        performance e de quebra conhecer uma plataforma 
                        sensacional pra fazer deploy que é a Vercel. 
                        Tudo em 22 minutos nesse vídeo feito com todo o 
                        carinho do mundo construindo uma "Pokedex"! </p>
                </div>

                <div className={style.conteudo}>
                    <img className={style.banner} src={banner} alt='Banner principal'/>
                </div>
            </div>
        </section>
    )
}

export default Banner