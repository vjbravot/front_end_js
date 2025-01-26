import AppointmentForm from "../components/AppointmentForm.jsx"

function AppointmentView({appointments, setAppointments}) {
    return (
        <div>
            <AppointmentForm appointments={appointments} setAppointments={setAppointments} />
        </div>
    )
}

export default AppointmentView