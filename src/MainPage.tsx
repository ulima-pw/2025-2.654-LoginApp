import { useEffect, useState } from "react"
import Titulo from "./Titulo"
import { data, useNavigate } from "react-router-dom"

const MainPage = () => {
    const navigate = useNavigate()
    const [texto, setTexto] = useState<string>("")

    const httpProfile = async () => {
        const dataUsuarioStr = sessionStorage.getItem("USER")
        if (dataUsuarioStr == null) {
            // No hay nada en sessionStore
            // Error de credenciales
            navigate("/")
            return
        }
        const token = JSON.parse(dataUsuarioStr).token

        const resp = await fetch("http://localhost:5002/profile", {
            headers : {
                "Authorization" : `Bearer ${token}`
            }
        })

        if (resp.status == 200) {
            const data = await resp.text()
            setTexto(data)
        }else {
            // Error de credenciales
            navigate("/")
        }
    }

    const fechaUltimoLogin = localStorage.getItem("FECHA_ANTERIOR_LOGIN")
    const fechaLogin = localStorage.getItem("FECHA_LOGIN")

    if (fechaLogin != null && fechaUltimoLogin != null) {
        const fUltimo = parseInt(fechaUltimoLogin)
        const fLogin = parseInt(fechaLogin)

        const cantidadSegundos = (fLogin - fUltimo) / 1000
        console.log(cantidadSegundos)
    }

    useEffect( () => {
        httpProfile()
    }, [] )

    return <div>
        <Titulo texto={texto} color="blue"/>
    </div>
}

export default MainPage