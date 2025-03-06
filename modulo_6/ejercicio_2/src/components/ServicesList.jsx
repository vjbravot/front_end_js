import Service from "./Service.tsx"
import { useContext } from "react"
import { ServicesContext } from "../context/ServicesContext.jsx"

function ServicesList (){
    const { services } = useContext(ServicesContext);
    if (services.length === 0){
        return (
            <p>Services not found</p>
        )
    }
    return (
        <ul>
            {services.map((service) => (
                <Service 
                key={service.id}
                title={service.title}
                description={service.description}
                image={service.image}
                />
            ))}
        </ul>
    )
}

export default ServicesList