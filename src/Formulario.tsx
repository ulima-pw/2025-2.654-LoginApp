const Formulario = () => {
    return <form>
        <input placeholder={"Ingrese usuario"} className="form-control mb-2" type="text" />
        <input placeholder="Ingrese password" className="form-control mb-2" type="text" />
        <button className="btn btn-primary w-100" type="button">
            Ingresar
        </button>
    </form>
}

export default Formulario