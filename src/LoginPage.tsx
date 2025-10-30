import { useState } from "react"
import SeccionCentral from "./SeccionCentral"
import { Link, useNavigate } from "react-router-dom"

const LoginPage = () => {
    const [resultadoLogin, setResultadoLogin] = useState<boolean | undefined>(undefined)
    const navigate = useNavigate()

    const login = async (username : string, password : string) => {
        const resp = await fetch("http://localhost:5002/login", {
            method : "post",
            body : JSON.stringify({ 
                username : username,
                password : password
            }),
            headers : {
                "Content-Type" : "application/json"
            }
        })

        if (resp.status == 400) {
            // Error en login
            const data = await resp.json()
            console.error(data.error)

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
            setResultadoLogin(false)
        } else {
            // Login correcto
            const data = await resp.json()
            const token = data.token

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
                    cantidadIntentos : 0,
                    token : token
                }
                sessionStorage.setItem("USER", JSON.stringify(usuario))
            } else {
                const usuario = JSON.parse(dataUsuario)
                usuario.username = username
                usuario.token = token

                sessionStorage.setItem("USER", JSON.stringify(usuario))
            }
            setResultadoLogin(true)
            navigate("/main")  // => MainPage
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