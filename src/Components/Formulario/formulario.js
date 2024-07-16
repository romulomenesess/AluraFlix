import { useState } from 'react';
import style from './formulario.module.css';

const Formulario = () => {

    const [titulo, setTitulo] = useState('');
    const [categoria, setCategoria] = useState('');
    const [imagem, setImagem] = useState('');
    const [url, setUrl] = useState('');
    const [descricao, setDescricao] = useState('');

    const handleSubmit = (event) => {
    event.preventDefault();

  };


    return (
        <section className={style.formulario}>
            <form onSubmit={handleSubmit}>
                <section className={style.container}>

                    <div className={style.conteudoEscrito}>
                        <h1 className={style.titulo}>NOVO VIDEO</h1>
                        <h3 className={style.subtitulo}>Complete o formulário para criar um novo card de vídeo.</h3>
                    </div>

                    <div className={style.formularioContainer}>

                        <h2 className={style.subtitulo2}>Criar Card</h2>

                        <form className={style.formulario}>

                            <div className={style.linha}>
                                <span>
                                    <label for="titulo" className={style.label}>Título</label>
                                    <input type="text" id="titulo" value={titulo} onChange={e => setTitulo(e.target.value)} className={style.input} placeholder="Digite o título do vídeo" required/>
                                </span>
                                <span>
                                    <label for="categoria" className={style.label}>Categoria</label>
                                    <input type="text" id="categoria" value={categoria} onChange={e => setCategoria(e.target.value)} className={style.input} placeholder="Selecione a categoria" required/>
                                </span>
                            </div>

                            <div className={style.linha}>
                                <span >
                                    <label for="imagem" className={style.label}>Imagem</label>
                                    <input type="url" id="imagem" value={imagem} className={style.input} onChange={e => setImagem(e.target.value)} placeholder="Digite o URL da imagem"/>
                                </span>
                                <span>
                                    <label for="url" className={style.label}>Vídeo</label>
                                    <input type="url" id="url" value={url} className={style.input} onChange={e => setUrl(e.target.value)} placeholder="Digite o URL do vídeo" required/>
                                </span>
                            </div>

                            <div className={style.linha}>
                                <span>
                                    <label for="descricao">Descrição</label>
                                    <textarea id="descricao" value={descricao} onChange={e => setDescricao(e.target.value)} className={style.textarea}/>
                                </span>
                            </div>

                            <div className={style.botoes}>
                                <button type="submit" className={style.btn}>Guardar</button>
                                <button type="reset" className={style.btn}>Limpar</button>
                            </div>
                        </form>
                    </div>
                </section>

            </form>
        </section>
    )
}

export default Formulario