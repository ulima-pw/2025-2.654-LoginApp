import { useState } from "react"
import "./Titulo.css"



const Titulo = (props : TituloProps) => {
    const [tamanoLetra, setTamanoLetra] = useState<number>(1) //variable de estado

    const tituloOnClick = () => {
        console.log("Se hizo click")
        setTamanoLetra(tamanoLetra + 0.5)
    }

    return <h1 className="titulo" 
        style={ { 
            backgroundColor : props.color,
            fontSize : `${tamanoLetra}em` 
        } }
        onClick={ tituloOnClick }>
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