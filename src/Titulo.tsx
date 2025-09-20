import "./Titulo.css"

const Titulo = (props : TituloProps) => {
    return <h1 className="titulo" style={ { backgroundColor : props.color } }>
        {
            props.texto
        }
    </h1>
}

interface TituloProps {
    texto : string
    color : string
}

export default Titulo