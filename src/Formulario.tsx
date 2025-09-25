import { useState, type ChangeEvent } from "react"

const Formulario = () => {
    const [username, setUsername] = useState<string>("")
    const [password, setPassword] = useState<string>("")

    const handleUsernameOnChange = (e : ChangeEvent<HTMLInputElement>) => {
        setUsername(e.currentTarget.value)
    }

    const handlePasswordOnChange = (e : ChangeEvent<HTMLInputElement>) => {
        setPassword(e.currentTarget.value)
    }

    return <form>
        <input placeholder={"Ingrese usuario"} 
            className="form-control mb-2" 
            type="text"
            value={ username }
            onChange={ handleUsernameOnChange } />
        <input placeholder="Ingrese password" 
            className="form-control mb-2" 
            type="password"
            value={ password }
            onChange={ handlePasswordOnChange } />
        <button className="btn btn-primary w-100" type="button">
            Ingresar
        </button>
    </form>
}

export default Formulario