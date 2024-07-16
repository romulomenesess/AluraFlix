import Banner from '../../Components/Banner/banner'
import Card from '../../Components/Card/card'
import data from '../Json/db.json'
import style from './padrao.module.css'

function Padrao () {
    return (
        <>
            <Banner/>
            <section className={style.container}>
                <div className={style.lista}>
                    {data.videos.map((video) => (
                    <span key={video.id} className={style.span}>
                         
                        <Card video={video}/>
                    </span>
                    ))}
                </div>
            </section>
        </>
    )
}

export default Padrao