import MainLayout from "../layouts/MainLayout"
import { useAuth } from "../context/AuthContext";

import AppointmentForm from "../components/AppointmentForm.jsx"

function AppointmentView({appointments, setAppointments}) {
    const { user } = useAuth();
    return (
        <div>
            <MainLayout />
            <AppointmentForm appointments={appointments} setAppointments={setAppointments} />
        </div>
    )
}

export default AppointmentView