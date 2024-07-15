import CampoFormulario from 'componentes/CampoFormulario'
import styles from './Formulario.module.css'
import { useState } from 'react'
import ListaSuspensa from 'componentes/ListaSuspensa'
import Textarea from 'componentes/Textarea'
import { BotaoFormulario } from 'componentes/Boton'
import fetch from 'cross-fetch'
import { api } from "api"

function Formulario({ aoCadastrar, categorias }) {

    const [formData, setFormData] = useState({
        titulo: '',
        descricao: '',
        imagem: '',
        link: '',
        categoria: '',
    })

    const limparFormulario = () => {
        setFormData({
            titulo: '',
            descricao: '',
            imagem: '',
            link: '',
            categoria: '',
        })
    }

    return (
        <form onReset={limparFormulario} className={styles.formulario} >
            <div className={styles.cabecalho}>
                <h1>Nuevo video</h1>
                <p>Complete el formulario para añadir una nueva card.</p>
            </div>

            <div className={styles.sessaoCampos}>
                <h2>Crear Card</h2>
                <div className={styles.campos}>
                    <CampoFormulario
                        obrigatorio={true}
                        label="Título"
                        placeholder="Inserta el título"
                        valor={formData.titulo}
                        aoAlterado={(valor) => setFormData({ ...formData, titulo: valor })}
                        tipo="text"
                        minLength="3"
                        maxLength=""
                    />

                    <ListaSuspensa
                        obrigatorio={true}
                        label="Categoría"
                        placeholder="Seleccione una categoria..."
                        itens={categorias}
                        valor={formData.categoria}
                        aoAlterado={(valor) => setFormData({ ...formData, categoria: valor })}

                    />

                    <CampoFormulario
                        obrigatorio={true}
                        label="Imagen"
                        placeholder="URL da imagen"
                        valor={formData.imagem}
                        aoAlterado={(valor) => setFormData({ ...formData, imagem: valor })}
                        tipo="url"
                    />

                    <CampoFormulario
                        obrigatorio={true}
                        label="Video"
                        placeholder="URL del vídeo"
                        valor={formData.link}
                        aoAlterado={(valor) => setFormData({ ...formData, link: valor })}
                        tipo="url"
                    />

                    <Textarea
                        obrigatorio={true}
                        label="Descripcion"
                        placeholder="Sobre que es el video?"
                        valor={formData.descricao}
                        aoAlterado={(valor) => setFormData({ ...formData, descricao: valor })}
                        tipo="text"
                        minLength="10"
                        maxLength="250"
                    />

                </div>
                <div className={styles.botoes}>
                    <BotaoFormulario
                        children="Guardar"
                        type='submit'
                    />
                    <BotaoFormulario
                        children="Limpiar"
                        type='reset'
                    />
                </div>
            </div>
        </form>
    )
}

export default Formulario