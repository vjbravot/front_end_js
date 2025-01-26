import { useContext, useState, useEffect } from "react";
import Doctor from "./Doctor.jsx";
import { DoctorsContext } from "../context/DoctorsContext.jsx";

function DoctorsList() {
  const { doctors, fetchDoctors, errorMessage } = useContext(DoctorsContext);
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

  function handleReload(){
    fetchDoctors();
  }

  if (!doctors || doctors.length === 0) {
    return (
      <div>
      {errorMessage && <p style={{color: "red"}}>{errorMessage}</p>}
    <p>No hay doctores disponibles</p>
    <button onClick={handleReload}>Intentar nuevamente</button>
    </div>
    )
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
      <button onClick={handleReload}>Recargar lista</button>
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