import "./LoginPage.css"

const LoginPage = () => {
    return <div className="row">
        <div className="col"></div>
        <div className="col">
            { /* Seccion Central */ }
            <div>
                <h1 className="titulo">Login</h1>
                { /* Imagen */ }
                <div className="mb-3">
                    <img className="w-70" 
                        src="https://upload.wikimedia.org/wikipedia/commons/e/e2/Universidad_de_Lima_logo.svg" />
                </div>
                { /* Formulario */ }
                <form>
                    <input className="form-control mb-2" type="text" />
                    <input className="form-control mb-2" type="text" />
                    <button className="btn btn-primary w-100" type="button">
                        Ingresar
                    </button>
                </form>
            </div>
        </div>
        <div className="col"></div>
    </div>  

}

export default LoginPage