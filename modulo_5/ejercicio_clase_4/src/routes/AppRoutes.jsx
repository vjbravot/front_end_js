import {Route, Router, Routes} from "react-router-dom"
import { AuthProvider } from "../context/AuthContext"
import Home from "../pages/Home"
import Login from "../pages/Login"
const AppRoutes = () => {
    return (
        <AuthProvider>
            <Router>
            <Routes>
            <Route path = "/" element = {<Home />} />
            <Route path = "/login" element = {<Login />} />
            <Route path = "/dashboard" element = {
                <ProtectedRoute allowedRoles={["admin,user"]}>
                <p>Dashboard</p> 
                </ProtectedRoute>} />
            <Route path = "/search-flights" element = {<SearchFlights />} />
            <Route path = "/vulnerabilities" element = {<p>Vulnerabilidades</p>} />
            </Routes>
            </Router>
        </AuthProvider>
    )
}

export default AppRoutes;