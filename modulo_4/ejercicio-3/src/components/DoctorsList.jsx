import { useContext, useState, useEffect } from "react";
import Doctor from "./Doctor.jsx";
import { DoctorsContext } from "../context/DoctorsContext.jsx";

function DoctorsList() {
  const { doctors } = useContext(DoctorsContext);
  const [filterDoctors, setFilterDoctors] = useState([]);
  const [searchVal, setSearchVal] = useState("");

  // Update filterDoctors whenever doctors change
  useEffect(() => {
    setFilterDoctors(doctors);
  }, [doctors]);

  function handleClick() {
    if (searchVal === "") {
      setFilterDoctors(doctors);
      return;
    }

    const filterBySearch = doctors.filter((item) => 
      item.specialty.toLowerCase().includes(searchVal.toLowerCase())
    );
    setFilterDoctors(filterBySearch);
  }

  if (doctors.length === 0) {
    return <p>No doctors available</p>;
  }

  return (
    <ul>
      <div>
        <input
          placeholder="Filtro por especialidad"
          onChange={(e) => setSearchVal(e.target.value)}
        />
        <button onClick={handleClick}>Filtrar</button>
      </div>
      {filterDoctors.map((doctor) => (
        <Doctor
          key={doctor.id}
          name={doctor.name}
          title={doctor.title}
          years_of_experience={doctor.years_of_experience}
          image={doctor.image}
          specialty={doctor.specialty}
        />
      ))}
    </ul>
  );
}

export default DoctorsList;