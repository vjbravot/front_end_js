import { useContext } from "react";
import { ViewContext } from "../context/ViewContext.jsx"



function Navbar() {
  const { currentView, setCurrentView } = useContext(ViewContext); // Consume the context

  return (
    <nav className="menu">
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

      <button
        onClick={() => setCurrentView("hoc")}
        style={{ fontWeight: currentView === "hoc" ? "bold" : "normal" }}
      >
        HOC
      </button>

      <button
        onClick={() => setCurrentView("optimized")}
        style={{ fontWeight: currentView === "optimized" ? "bold" : "normal" }}
      >
        Optimized
      </button>

      <button
        onClick={() => setCurrentView("portal")}
        style={{ fontWeight: currentView === "portal" ? "bold" : "normal" }}
      >
        Portal
      </button>

    </nav>

  );
}

export default Navbar;