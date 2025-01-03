import { createContext, useState, useEffect } from "react";

const DoctorsContext = createContext();

function DoctorsProvider({ children }) {
  const [doctors, setDoctors] = useState([])

  useEffect(() => {

    async function callDoctors(){
      try{
        console.log("calling Doctors");
        let response = await fetch("doctors.json");
        if (!response.ok){
          throw new Error(`HTTP error! status: ${response.status}`)
        }
        let data = await response.json();
        setDoctors(data);
        console.log("Data loaded successfully: ", data)
      } catch (error) {
        console.error("Error fetchin services:", error);
        setDoctors([]); // Fallback to an empty array
      }
    }

    callDoctors();
    
  }, []);
    return (
      <DoctorsContext.Provider value={{ doctors, setDoctors}}>
        {children}
      </DoctorsContext.Provider>
    );
  }
  export { DoctorsContext, DoctorsProvider };