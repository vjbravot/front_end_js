import { useState, useEffect, useContext } from "react";
import DoctorsList from "./components/DoctorsList.jsx"
import ServicesList from "./components/ServicesList.jsx"
import AppointmentView from "./views/AppointmentView.jsx"
import FocusInput from "./components/FocusInput.jsx"
import Doctors from "./views/DoctorsView.jsx"
import PortalView from "./views/PortalView.jsx"
import Home from "./views/HomeView.jsx"
import Services from "./views/ServicesView.jsx"
import NavBar from "./components/NavBar.jsx"
import HocView from "./views/HocView.jsx"
import OptimizedView from "./views/OptimizedView.jsx"
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
      {currentView === "hoc" && <HocView />}
      {currentView === "optimized" && <OptimizedView />}
      {currentView === "portal" && <PortalView />}
      {currentView === "appointment" && <AppointmentView appointments={appointments} setAppointments={setAppointments} />}
    </div>
      {/* <AppointmentForm appointments={appointments} setAppointments={setAppointments}/>
      <DoctorsList doctors={doctors} />
      <ServicesList services={services} /> */}
      
    </>
  );
}

export default App;