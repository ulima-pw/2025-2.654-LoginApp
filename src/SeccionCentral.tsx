import Formulario from "./Formulario"
import Imagen from "./Imagen"
import Titulo from "./Titulo"

const SeccionCentral = (props : SeccionCentralProps) => {
    return <div>
        <Titulo texto="Log" color={"#11E111"}/>
        <Imagen mostrarImagen={ false }/>
        <Formulario onLogin={ props.onLogin }/>
    </div>
}

interface SeccionCentralProps {
    onLogin : (username : string, password : string ) => void
}

export default SeccionCentral