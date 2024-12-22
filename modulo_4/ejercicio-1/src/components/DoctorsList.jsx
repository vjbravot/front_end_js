import Doctor from "./Doctor.jsx"
function DoctorsList ({doctors}){

    if (doctors.length === 0){
        
        return <p>No doctors available</p>
    }
    return (
        <ul>
        {Object.values(doctors).map((doctor) => (
            <Doctor 
            key={doctor.id}
            name={doctor.name}
            title={doctor.title}
            years_of_experience={doctor.years_of_experience}
            image={doctor.image}
            />
        ))}
        </ul>
    )
}

export default DoctorsList