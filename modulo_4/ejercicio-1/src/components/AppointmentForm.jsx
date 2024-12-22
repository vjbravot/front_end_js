


function AppointmentForm({appointments, setAppointments}){
    function handleSubmit(e){
    
        e.preventDefault(); // Prevents page reload
        const formData = new FormData(e.target); // Get form data
        const data = Object.fromEntries(formData); // Convert to object
        setAppointments([...appointments, data])
    }
    return(
        <form onSubmit={handleSubmit}>
        <label>
            Ingresa Nombre: <input name="name" defaultValue="Enter name" />
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
    )
}
export default AppointmentForm