import SeccionCentral from "./SeccionCentral"

const LoginPage = () => {

    const login = (username : string, password : string) => {
        if (username == "PW" && password == "juler"){
            // Login exitoso
            console.log("Login exitoso")
        }else {
            // Error login
            console.log("Error login")
        }
    }

    return <div className="row">
        <div className="col"></div>
        <div className="col">
            <SeccionCentral 
                onLogin={ login }/>
        </div>
        <div className="col"></div>
    </div>  

}

export default LoginPage