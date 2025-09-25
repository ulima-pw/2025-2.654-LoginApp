import Formulario from "./Formulario"
import Imagen from "./Imagen"
import Titulo from "./Titulo"

const SeccionCentral = () => {
    return <div>
        <Titulo texto="Log" color={"#11E111"}/>
        <Imagen mostrarImagen={ false }/>
        <Formulario />
    </div>
}

export default SeccionCentral