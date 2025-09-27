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
        }else {
            // Error login
            console.log("Error login")
            setResultadoLogin(false)
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