import { useState, useEffect, useContext } from "react";
import DoctorsList from "./components/DoctorsList.jsx"
import ServicesList from "./components/ServicesList.jsx"
import AppointmentForm from "./components/AppointmentForm.jsx"
import FocusInput from "./components/FocusInput.jsx"
import Doctors from "./views/DoctorsView.jsx"
import Home from "./views/HomeView.jsx"
import Services from "./views/ServicesView.jsx"
import NavBar from "./components/NavBar.jsx"
import {ViewContext} from "./context/ViewContext.jsx"
import {DoctorsProvider} from "./context/DoctorsContext.jsx"
import {ServicesProvider} from "./context/ServicesContext.jsx"
function App() {
  const [appointments, setAppointments] = useState([]);
  const { currentView } = useContext(ViewContext);

  console.log("appointments: ",appointments)
  console.log("current view: ", currentView)
  return (
    <>
    <NavBar />
    <div>
      {currentView === "home" && <Home/>}
      {currentView === "doctors" && <DoctorsProvider><DoctorsList/></DoctorsProvider>}
      {currentView === "services" && <ServicesProvider><ServicesList/></ServicesProvider>}
    </div>
      {/* <AppointmentForm appointments={appointments} setAppointments={setAppointments}/>
      <DoctorsList doctors={doctors} />
      <ServicesList services={services} /> */}
      
    </>
  );
}

export default App;