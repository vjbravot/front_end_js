import { useState } from "react"; 
function TransformableEvent({ event }) {
    const [status, setStatus] = useState(event.status);

    const toggleStatus = () => {
        setStatus((prevStatus) => prevStatus === "Pendiente" ? "Completado" : "Pendiente");
        console.log(status)
    }
    return (
        <div className={`event-item ${status === "Completado" ? "completed" : ""}`}
        onClick={toggleStatus}>
            <h3>{event.title}</h3>
            <p>Fecha: {event.date}</p>
            <p>Estado: {status}</p>
       </div>
    )
}

export default TransformableEvent;