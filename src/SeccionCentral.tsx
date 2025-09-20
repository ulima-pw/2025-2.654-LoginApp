import Formulario from "./Formulario"
import Imagen from "./Imagen"
import Titulo from "./Titulo"

const SeccionCentral = () => {
    return <div>
        <Titulo />
        { /* Imagen */ }
        <Imagen />
        { /* Formulario */ }
        <Formulario />
    </div>
}

export default SeccionCentral