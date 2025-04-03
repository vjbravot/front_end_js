import { createContext, useState, useEffect } from "react";
import { saveToIndexedDB, getFromIndexedDB } from "../utils/indexedDB.js";

const DoctorsContext = createContext();

function DoctorsProvider({ children }) {
  const [doctors, setDoctors] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const fetchDoctors = async () => {
    try {
      console.log("Fetching doctors...");
      let response = await fetch("doctors.json");

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      let data = await response.json();
      console.log("Fetched data:", data);

      if (!Array.isArray(data)) {
        console.error("Unexpected data format:", data);
        setErrorMessage("Error: Invalid data format");
        return;
      }

      // Simply use the IDs from the doctors.json file (no need to create new ones)
      const formattedData = data.map((doctor) => ({
        ...doctor, // Use all properties from the doctor object
        id: doctor.id, // Use the ID from the doctor object
      }));

      // Save to IndexedDB and update state
      await saveToIndexedDB(formattedData); 
      setDoctors(formattedData); 
    } catch (error) {
      console.error("Error fetching doctors:", error);
      setDoctors([]);  // Fallback to an empty array
      setErrorMessage("Fallo en la carga de doctores, intente nuevamente");
    }
  };

  useEffect(() => {
    async function loadDoctors() {
      const cachedDoctors = await getFromIndexedDB("doctors");
      if (cachedDoctors && cachedDoctors.length > 0) {
        console.log("Loading doctors from IndexedDB...");
        setDoctors(cachedDoctors);
      } else {
        fetchDoctors();  // Fetch from network if no cache
      }
    }
    loadDoctors();
  }, []);

  return (
    <DoctorsContext.Provider value={{ doctors, fetchDoctors, errorMessage }}>
      {children}
    </DoctorsContext.Provider>
  );
}

export { DoctorsContext, DoctorsProvider };
