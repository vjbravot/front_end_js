import { createContext, useState, useEffect } from "react";

const ServicesContext = createContext();

function ServicesProvider({ children }) {
  const [services, setServices] = useState([])

  useEffect(() => {

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

    callServices();
    
  }, []);
    return (
      <ServicesContext.Provider value={{ services, setServices }}>
        {children}
      </ServicesContext.Provider>
    );
  }
  export { ServicesContext, ServicesProvider };