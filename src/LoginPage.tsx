import { useState } from "react"
import SeccionCentral from "./SeccionCentral"

const LoginPage = () => {
    const [resultadoLogin, setResultadoLogin] = useState<boolean | undefined>(undefined)

    const login = (username : string, password : string) => {
        if (username == "PW" && password == "juler"){
            // Login exitoso
            console.log("Login exitoso")
            setResultadoLogin(true)
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
        </div>
        <div className="col"></div>
    </div>  
}

export default LoginPage