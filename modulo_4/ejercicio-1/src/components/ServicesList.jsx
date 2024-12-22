import Service from "./Service.jsx"

function ServicesList ({services}){
    if (services.length === 0){
        return (
            <p>Services not found</p>
        )
    }
    return (
        <ul>
            {Object.values(services).map((service) => (
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