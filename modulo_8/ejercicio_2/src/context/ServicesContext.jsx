import { createContext, useState, useEffect } from "react";
import { saveToIndexedDB, getFromIndexedDB } from "../utils/indexedDB.js";

const ServicesContext = createContext();

function ServicesProvider({ children }) {
  const [services, setServices] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const fetchServices = async () => {
    try {
      console.log("Fetching services...");
      let response = await fetch("services.json");

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

      // We don't need to modify the IDs because the service data already contains them.
      const formattedData = data.map((service) => ({
        ...service, // Use all properties from the service object
        id: service.id, // Ensure we use the ID provided in services.json
      }));

      // Save the services to IndexedDB and update the state
      await saveToIndexedDB(formattedData);
      setServices(formattedData); // Update state with fetched services
    } catch (error) {
      console.error("Error fetching services:", error);
      setServices([]);  // Fallback to an empty array
      setErrorMessage("Fallo en la carga de servicios, intente nuevamente");
    }
  };

  useEffect(() => {
    async function loadServices() {
      const cachedServices = await getFromIndexedDB("services");
      if (cachedServices && cachedServices.length > 0) {
        console.log("Loading services from IndexedDB...");
        setServices(cachedServices);
      } else {
        fetchServices(); // Fetch from network if no cached data is available
      }
    }
    loadServices();
  }, []);

  return (
    <ServicesContext.Provider value={{ services, fetchServices, errorMessage }}>
      {children}
    </ServicesContext.Provider>
  );
}

export { ServicesContext, ServicesProvider };
