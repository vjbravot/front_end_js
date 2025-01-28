import { useState, useRef, useCallback } from "react";
import DOMPurify from "dompurify";

function AppointmentForm() {
    const [appointments, setAppointments] = useState([]); // Initialize appointments as an empty array
    const inputRef = useRef(null);

    const handleSubmit = useCallback(
        (e) => {
            e.preventDefault(); // Prevents page reload
            const formData = new FormData(e.target); // Get form data
            const data = Object.fromEntries(formData); // Convert to object

            // Sanitize the inputs to prevent XSS
            const sanitizedData = {
                ...data,
                name: DOMPurify.sanitize(data.name),
                email: DOMPurify.sanitize(data.email),
                hour: DOMPurify.sanitize(data.hour),
            };

            console.log("Adding appointment: ", sanitizedData);
            setAppointments((prevAppointments) => [...prevAppointments, sanitizedData]); // Using functional update
        },
        [setAppointments]
    );

    function handleFocus() {
        inputRef.current.focus();
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    Ingresa Nombre:{" "}
                    <input ref={inputRef} name="name" defaultValue="Enter name" />
                </label>
                <label>
                    Ingresa Correo:{" "}
                    <input name="email" defaultValue="Enter email" />
                </label>
                <p>
                    Selecciona horario:
                    <label>
                        <input type="radio" name="hour" value="9-10" />
                        9:00-10:00
                    </label>
                    <label>
                        <input type="radio" name="hour" value="10-11" />
                        10:00-11:00
                    </label>
                    <label>
                        <input type="radio" name="hour" value="11-12" />
                        11:00-12:00
                    </label>
                </p>
                <button type="submit">Reservar</button>
            </form>

            <button onClick={handleFocus}>Enfocar form</button>
        </div>
    );
}

export default AppointmentForm;