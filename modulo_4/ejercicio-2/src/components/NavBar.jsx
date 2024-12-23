import {useContext} from "react";
import { ViewContext } from "../context/ViewContext.jsx"



function Navbar() {
  const { currentView, setCurrentView } = useContext(ViewContext); // Consume the context

  return (
    <nav>
      <button 
        onClick={() => setCurrentView("home")}
        style={{ fontWeight: currentView === "home" ? "bold" : "normal" }}
      >
        Home
      </button>
      <button 
        onClick={() => setCurrentView("doctors")}
        style={{ fontWeight: currentView === "doctors" ? "bold" : "normal" }}
      >
        Doctores
      </button>
      <button 
        onClick={() => setCurrentView("services")}
        style={{ fontWeight: currentView === "services" ? "bold" : "normal" }}
      >
        Servicios
      </button>
    </nav>
  );
}

export default Navbar;