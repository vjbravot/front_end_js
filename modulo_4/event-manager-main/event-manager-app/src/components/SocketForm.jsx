import { useState } from "react";
import SocketContext from "./context/SocketContext";

function SocketForm() {
    const [title, setTitle] = useState("");
    const { addEcent } = useContext(SocketContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        const newEvent = { title, date: new Date().toLocaleString(), status:
            "Pendiente" };
            // Añadir el nuevo evento usando la función del contexto
            addEvent(newEvent);
            // Limpiar el formulario
            setTitle("");
            };

            return (
                <form onSubmit={handleSubmit}>
                {/* Campo de entrada para el título del evento */}
                <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Nuevo evento"
                />
                {/* Botón para enviar el formulario */}
                <button type="submit">Añadir Evento</button>
                </form>
                );
                }
                export default SocketForm;
