import { useRef, useCallback } from "react";

function AppointmentForm({appointments, setAppointments}){
    const inputRef = useRef(null);

    const handleSubmit = useCallback(
        (e) => {
        e.preventDefault(); // Prevents page reload
        const formData = new FormData(e.target); // Get form data
        const data = Object.fromEntries(formData); // Convert to object
        setAppointments([...appointments, data])
    },[appointments, setAppointments]);
    function handleFocus() {
        inputRef.current.focus();
    }
    return(
        <div>
        <form onSubmit={handleSubmit}>
        <label>
            Ingresa Nombre: <input ref={inputRef} name="name" defaultValue="Enter name" />
        </label>
        <label>
            Ingresa Correo: <input name="email" defaultValue="Enter email"/>
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
    )
}
export default AppointmentForm