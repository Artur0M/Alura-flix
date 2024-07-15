import Video from 'componentes/Video'
import styles from './SessaoPorCategoria.module.css'

function SessaoPorCategoria({ videos, categoria, aoCadastrar, aoDeletar, aoEditar, aoVerVideo, aoTopo }) {
    return (
        (videos.length > 0) && <section className={styles.categoria}>
            <div className={styles.categorias__container} style={{backgroundColor: categoria.cor}}>
                <h3 style={{ backgroundColor: categoria.cor }}>
                {categoria.nome}
            </h3>
            </div>
            <div className={styles.videos}>
                {videos.map((video, indice) => {
                    return <Video
                        className={styles.videos}
                        video={video}
                        key={indice}
                        categoria={categoria}
                        aoCadastrar={aoCadastrar}
                        aoDeletar={aoDeletar}
                        aoEditar={aoEditar}
                        aoVerVideo={aoVerVideo}
                        aoTopo = {aoTopo}
                    />
                })}
            </div>
        </section>
    )
}

export default SessaoPorCategoria