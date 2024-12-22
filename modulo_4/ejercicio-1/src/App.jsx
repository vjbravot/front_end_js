import { useState, useEffect } from "react";
import DoctorsList from "./components/DoctorsList.jsx"
import ServicesList from "./components/ServicesList.jsx"
import AppointmentForm from "./components/AppointmentForm.jsx"
function App() {
  const [doctors, setDoctors] = useState([]);
  const [services, setServices] = useState([]);
  const [appointments, setAppointments] = useState([]);
  
  useEffect(() => {
    async function callDoctors() {
      try {
        console.log("calling Drs");
        let response = await fetch("/doctors.json");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        let data = await response.json();
        setDoctors(data);
        console.log("Data loaded successfully: ", data)
      } catch (error) {
        console.error("Error fetching doctors:", error);
        setDoctors([]); // Fallback to an empty array
      }
    }

    async function callServices(){
      try{
        console.log("calling Services");
        let response = await fetch("services.json");
        if (!response.ok){
          throw new Error(`HTTP error! status: ${response.status}`)
        }
        let data = await response.json();
        setServices(data);
        console.log("Data loaded successfully: ", data)
      } catch (error) {
        console.error("Error fetchin services:", error);
        setServices([]); // Fallback to an empty array
      }
    }

    callDoctors();
    callServices();
    
  }, []);

  console.log("appoitnemtns: ",appointments)

  return (
    <>
      <AppointmentForm appointments={appointments} setAppointments={setAppointments}/>
      <DoctorsList doctors={doctors} />
      <ServicesList services={services} />
    </>
  );
}

export default App;