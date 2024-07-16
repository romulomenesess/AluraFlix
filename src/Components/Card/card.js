import style from './card.module.css';
import Modal from '../Modal/modal'
import { useState } from 'react';
import data from '../../Routes/Json/db.json'

export default  function Card (videos) {
        const [openModal, setOpenModal] = useState(false)

        return (
            <div className={style.container}>
            
            <img 
                className={style.imagem}
                src={data.videos.imagem}
                alt= {data.videos.titulo}
            ></img> 

                <div className={style.botoes}>
                        <button className={style.botao} id={style.del}>DELETAR</button>
                        <button className={style.botao} id={style.edt} onClick={() => setOpenModal(true)}>EDITAR</button>
                        <Modal isOpen={openModal} setModalOpen={() => setOpenModal(!openModal)}></Modal>
                </div>
            </div>
    )
}
