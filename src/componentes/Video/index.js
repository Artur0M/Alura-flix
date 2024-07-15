import { Link } from 'react-router-dom'
import styles from './Video.module.css'
import { MdDeleteForever, MdOutlineEdit, MdReadMore } from "react-icons/md"
import { useState } from 'react';

function Video({ video, categoria, aoDeletar, aoEditar, aoVerVideo, aoTopo }) {

    const [topoPagina, setTopoPagina] = useState(false)

    const irAoTopo = () => {
        setTopoPagina(true)
        window.scrollTo(0, 0)
    }

    return (
        <div className={styles.container} style={{ borderColor: categoria.cor, backgroundColor: categoria.cor }}>
            <div className={styles.imagem}>
                <img className={styles.imagemItem} 
                src={video.imagem} 
                alt={video.titulo}
                onClick={() => 
                aoVerVideo(video)}
                
                />
                {/* <div onClick={() => aoVerVideo(video)} className={styles.divImg} style={{ color: categoria.cor }} ></div> */}
            </div>
            <div className={styles.titulo}>
                <p title={video.titulo}>{video.titulo}</p>
            </div>
            <div className={styles.opciones}>
                <div className={styles.item_opcion}
                    onClick={() => aoDeletar(video.id)}
                >
                    <MdDeleteForever 
                        title='Borrar' 
                        size='1.5em' 
                        cursor='pointer'
                    />
                    {/* <p>Deletar</p> */}
                </div>
                <div className={styles.item_opcion}
                    onClick={() => {aoEditar(video); aoTopo();}} 
                
                >
                    <MdOutlineEdit 
                        title='editar' 
                        size='1.5em' 
                        cursor='pointer'
                    />
                    {/* <p>Editar</p> */}
                </div>

                <Link to={`/${video.id}`}  onClick={() => {aoTopo()}}  className={styles.item_opcion}>
                    <MdReadMore 
                        title='sobre' 
                        color='#fff' 
                        size='2em' 
                        cursor='pointer'
                    />
                    {/* <p>Sobre</p> */}
                </Link>
            </div>
        </div>
    )
}

export default Video