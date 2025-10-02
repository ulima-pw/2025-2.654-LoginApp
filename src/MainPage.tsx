import Titulo from "./Titulo"

const MainPage = () => {

    const fechaUltimoLogin = localStorage.getItem("FECHA_ANTERIOR_LOGIN")
    const fechaLogin = localStorage.getItem("FECHA_LOGIN")

    if (fechaLogin != null && fechaUltimoLogin != null) {
        const fUltimo = parseInt(fechaUltimoLogin)
        const fLogin = parseInt(fechaLogin)

        const cantidadSegundos = (fLogin - fUltimo) / 1000
        console.log(cantidadSegundos)
    }

    return <div>
        <Titulo texto="Main" color="blue"/>
    </div>
}

export default MainPage