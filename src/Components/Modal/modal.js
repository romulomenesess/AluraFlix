import style from './modal.module.css'

export default function Modal({ isOpen, setModalOpen}) {
  if (isOpen) {
    return (
      <div className={style.modal}>
        <div className={style.conteudo}>
          <section className={style.secao}>
                <button onClick={setModalOpen} className={style.botaoSair}>X</button>
                <h1 className={style.titulo}>EDITAR CARD:</h1>
                <form className={style.formulario}>
                        <label for="titulo" className={style.label}>Título</label>
                        <input type="text" id="titulo" name="titulo" className={style.input} placeholder="Digite o título do vídeo" required/>

                        <label for="categoria" className={style.label}>Categoria</label>
                        <input type="text" id="categoria" name="categoria" className={style.input} placeholder="Selecione a categoria" required/>

                        <label for="imagem" className={style.label}>Imagem</label>
                        <input type="url" id="imagem" name="imagem" className={style.input} placeholder="Digite o URL da imagem"/>

                        <label for="link" className={style.label}>Vídeo</label>
                        <input type="url" id="link" name="link" className={style.input} placeholder="Digite o URL do vídeo" required/>

                        <label for="descricao" className={style.label}>Descrição</label>
                        <input type="textarea" id="descricao" name="descricao" className={style.input}/>

                        <div className={style.botoes}>
                            <button type="submit" className={style.btn}>Guardar</button>
                            <button type="reset" className={style.btn}>Limpar</button>
                        </div>
                </form>
            </section>
        </div>
      </div>
    )
  }

  return null
}