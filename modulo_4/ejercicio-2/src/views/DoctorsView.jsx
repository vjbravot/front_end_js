import { ViewProvider } from "../context/ViewContext.jsx";
import DoctorsList from "../components/DoctorsList.jsx";

function Doctors(){
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
      callDoctors();
        }, []);

    return (
        <DoctorProvider>
            <div>
                <DoctorsList />
            </div>
        </DoctorProvider>
    )
}

export default Doctors;