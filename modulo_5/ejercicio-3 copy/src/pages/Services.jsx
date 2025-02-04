import ServicesList from "../components/ServicesList.jsx";
import MainLayout from "../layouts/MainLayout.jsx"
import { useAuth } from "../context/AuthContext";
import { useEffect } from "react"
import { ServicesProvider } from "../context/ServicesContext.jsx"
function Services() {
  const { user } = useAuth();

  return (
    <ServicesProvider>
      <div>
        <MainLayout />
        <ServicesList />
      </div>
    </ServicesProvider>
  )
}

export default Services;