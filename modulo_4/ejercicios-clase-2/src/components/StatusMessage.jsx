import { useState } from "react";

function StatusMessage(){
    const [status, setStatus] = useState('Esperando acción')

    return (
        <div>
            <h2>Estado del sistema</h2>
            <p>{status}</p>
            <button onClick={() => setStatus("vehículo en proceso de mantenimiento")}>Actualizar estad</button>
        </div>
    )
}

export default StatusMessage;