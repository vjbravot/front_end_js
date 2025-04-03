import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AuthProvider } from "../context/AuthContext";
import ProtectedRoute from "./ProtectedRoute";
import Home from "../pages/Home"
import Doctors from "../pages/Doctors"
import Services from "../pages/Services"
import Appointments from "../pages/Appointments"
import Login from "../pages/Login"
import { useEffect } from "react"

const AppRoutes = () => {

    useEffect(() => {
        if (window.top !== window.self) {
          // Redirect to prevent iframe embedding
          window.top.location = window.location.href;
        }
      }, []);
    return (
        <AuthProvider>
            <Router>
                <Routes>
                    <Route path="/" element={<Home />}/>
                    <Route path="/login" element={<Login />}/>
                    <Route path="/doctors" element={<Doctors />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/appointments" element={
              <ProtectedRoute allowedRoles={["admin", "user"]}>
                <Appointments />
              </ProtectedRoute>
            } />
                </Routes>
            </Router>
        </AuthProvider>
    )
}

export default AppRoutes;