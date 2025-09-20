const Imagen = (props : ImagenProps) => {
    return <div className="mb-3">
        {
            props.mostrarImagen == true ? 
                <img className="w-70" src="https://upload.wikimedia.org/wikipedia/commons/e/e2/Universidad_de_Lima_logo.svg" /> : 
                ""
        }
    </div>
}

interface ImagenProps {
    mostrarImagen : boolean
}

export default Imagen