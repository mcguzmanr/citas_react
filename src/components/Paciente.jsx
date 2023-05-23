const Paciente = ({paciente, setPaciente, eliminarPaciente}) => {


    const { nombre, propietario, email, fecha, sintomas, id } =  paciente;

    const handleEliminar = () => {
        const respuesta =  confirm('Do you really want to delete this record?');

        if(respuesta) {
            eliminarPaciente(id);
        }
    }

    return (
        <div className="mt-10 mx-5 bg-white px-5 py-10 shadow-md rounded-xl">
            <p className="font-bold mb-3 text-gray-700 uppercase"> 
                Name:
                <span className="ml-1 font-normal normal-case">{nombre}</span>
            </p>

            <p className="font-bold mb-3 text-gray-700 uppercase"> 
                Owner:
                <span className="ml-1 font-normal normal-case">{propietario}</span>
            </p>

            <p className="font-bold mb-3 text-gray-700 uppercase"> 
                email:
                <span className="ml-1 font-normal normal-case">{email}</span>
            </p>

            <p className="font-bold mb-3 text-gray-700 uppercase"> 
                Discharge date:
                <span className="ml-1 font-normal normal-case">{fecha}</span>
            </p>

            <p className="font-bold mb-3 text-gray-700 uppercase"> 
                Symptoms:
                <span className="ml-1 font-normal normal-case">{sintomas}</span>
            </p>

            <div className="flex justify-between mt-10">
                <button 
                    type="button"
                    className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700
                    text-white font-bold uppercase rounded-lg"
                    onClick={() => setPaciente(paciente)}
                >
                    Edit
                </button>

                <button 
                    type="button"
                    className="py-2 px-10 bg-red-600 hover:bg-red-700
                    text-white font-bold uppercase rounded-lg"
                    onClick={handleEliminar}
                >
                    Delete
                </button>
            </div>
        </div>

    )
}

export default Paciente
