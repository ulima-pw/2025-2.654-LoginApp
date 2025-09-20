import Formulario from "./Formulario"
import Imagen from "./Imagen"
import Titulo from "./Titulo"

const SeccionCentral = () => {
    return <div>
        <Titulo texto="Log" color={"#F5E111"}/>
        <Imagen />
        <Formulario />
    </div>
}

export default SeccionCentral