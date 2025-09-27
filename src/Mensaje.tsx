const Mensaje = (props : MensajeProps) => {
    return <div className="mt-3">
        {
            props.resultadoLogin ?
                <div className="alert alert-success">
                    Login exitoso
                </div> :
                <div className="alert alert-danger">
                    Error Login
                </div>
        }
    </div>
}

interface MensajeProps {
    resultadoLogin : boolean
}

export default Mensaje