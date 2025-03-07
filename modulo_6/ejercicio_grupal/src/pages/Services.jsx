import ServicesList from "../components/ServicesList.jsx";
import MainLayout from "../layouts/MainLayout.jsx"
import { useAuth } from "../context/AuthContext";
import { useEffect } from "react"
import { ServicesProvider } from "../context/ServicesContext.jsx"
function Services() {
  const { user } = useAuth();

  const getLocation = () => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            lat: position.coords.latitude,
            lon: position.coords.longitude,
          });
        },
        (error) => {
          console.log("Error obteniendo la ubicación:",
            error);
        }
      );
    } else {
      console.log("Geolocalización no soportada en este navegador.");
    }
  };

  return (
    <ServicesProvider>
      <div>
        <MainLayout />
        <button onClick = {getLocation}> Filtrar por ubicación</button>
        <ServicesList />
      </div>
    </ServicesProvider>
  )
}

export default Services;