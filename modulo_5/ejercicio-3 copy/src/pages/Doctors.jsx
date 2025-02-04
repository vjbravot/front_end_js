import DoctorsList from "../components/DoctorsList.jsx";
import { useAuth } from "../context/AuthContext";
import MainLayout from "../layouts/MainLayout"
import { DoctorsProvider } from "../context/DoctorsContext.jsx"
function Doctors() {

    return (
        <div>
            <MainLayout />
            <DoctorsProvider>
                <DoctorsList />
            </DoctorsProvider>
        </div>
    )
}

export default Doctors;