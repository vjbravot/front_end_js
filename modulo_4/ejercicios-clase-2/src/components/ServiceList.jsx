import { Component } from "react";

class ServiceList extends Component {
    render(){
    const services = ["Cambio de aceite", "Revisión de frenos", "Cambio de llantas"]

    return (
        <div>
            <h2>Servicios disponibles</h2>
            <ul>
                {services.map((service, index) => (
                    <li key={index}>{service}</li>
                ))}
            </ul>
        </div>
    )
}
}

export default ServiceList;