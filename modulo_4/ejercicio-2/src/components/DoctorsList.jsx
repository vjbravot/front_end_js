import { useContext } from "react";
import Doctor from "./Doctor.jsx"
import { DoctorsContext } from "../context/DoctorsContext.jsx";

function DoctorsList (){
    const { doctors } = useContext(DoctorsContext);

    if (doctors.length === 0){
        
        return <p>No doctors available</p>
    }
    return (
        <ul>
        {doctors.map((doctor) => (
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