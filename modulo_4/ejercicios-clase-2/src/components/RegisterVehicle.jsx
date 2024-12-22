function RegisterVehicle(){
    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Vehículo registado exitosamente");
    };

    return (
        <form onSubmit={handleSubmit}>
        <h2>Registrar Vehículo</h2>
        <label htmlFor="vehicle">Modelo del Vehículo:</label>
        <input type="text" id="vehicle" name="vehicle" placeholder="Ejemplo: Toyota
        Corolla" />
        <label htmlFor="owner">Propietario:</label>
        <input type="text" id="owner" name="owner" placeholder="Nombre del
        propietario" />
        <button type="submit">Registrar</button>
        </form>
        );
        }
        export default RegisterVehicle;