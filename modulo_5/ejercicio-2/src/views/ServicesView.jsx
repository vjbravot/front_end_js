import { ViewProvider } from "../context/ViewContext.jsx";
import ServicesList from "../components/ServicesList.jsx";

function Services(){
    useEffect(() => {
        async function callServices() {
          try {
            console.log("calling Drs");
            let response = await fetch("/services.json");
            if (!response.ok) {
              throw new Error(`HTTP error! status: ${response.status}`);
            }
            let data = await response.json();
            setServices(data);
            console.log("Data loaded successfully: ", data)
          } catch (error) {
            console.error("Error fetching doctors:", error);
            setServices([]); // Fallback to an empty array
          }
        }
      callServices();
        }, []);

    return (
        <ContextProvider>
            <div>
                <ServicesList />
            </div>
        </ContextProvider>
    )
}

export default Services;