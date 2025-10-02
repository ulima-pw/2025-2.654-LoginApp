import { useState } from "react"
import SeccionCentral from "./SeccionCentral"
import { Link, useNavigate } from "react-router-dom"

const LoginPage = () => {
    const [resultadoLogin, setResultadoLogin] = useState<boolean | undefined>(undefined)
    const navigate = useNavigate()

    const login = (username : string, password : string) => {
        if (username == "PW" && password == "juler"){
            // Login exitoso
            console.log("Login exitoso")
            setResultadoLogin(true)
            navigate("/main")  // => MainPage

            const fechaAnterior = localStorage.getItem("FECHA_LOGIN")

            const cantMilisecs = new Date().getTime().toString()

            if (fechaAnterior != null) {
                localStorage.setItem("FECHA_ANTERIOR_LOGIN", fechaAnterior)
            }else {
                localStorage.setItem("FECHA_ANTERIOR_LOGIN", cantMilisecs)
            }
            localStorage.setItem("FECHA_LOGIN", cantMilisecs)

            const dataUsuario = sessionStorage.getItem("USER")
            if (dataUsuario == null) {
                const usuario = {
                    username : username,
                    cantidadIntentos : 0
                }
                sessionStorage.setItem("USER", JSON.stringify(usuario))
            } else {
                const usuario = JSON.parse(dataUsuario)
                usuario.username = username

                sessionStorage.setItem("USER", JSON.stringify(usuario))
            }
        }else {
            // Error login
            console.log("Error login")
            setResultadoLogin(false)

            const dataUsuario = sessionStorage.getItem("USER")
            if (dataUsuario == null) {
                const usuario = {
                    username : username,
                    cantidadIntentos : 1
                }
                sessionStorage.setItem("USER", JSON.stringify(usuario))
            } else {
                const usuario = JSON.parse(dataUsuario)
                usuario.username = username
                usuario.cantidadIntentos += 1

                sessionStorage.setItem("USER", JSON.stringify(usuario))
            }
        }
    }

    return <div className="row">
        <div className="col"></div>
        <div className="col">
            <SeccionCentral 
                onLogin={ login }
                resultadoLogin={ resultadoLogin }/>
            <Link to={"/main"}>Ir a MainPage</Link>
        </div>
        <div className="col"></div>
    </div>  
}

export default LoginPage