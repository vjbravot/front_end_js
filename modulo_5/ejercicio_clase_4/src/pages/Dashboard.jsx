import { useState } from "react"
import {useAuth} from "../context/AuthContext"

const Dashboard = () => {
    const {user,logout} = useAuth();
    const [secureData, setSecureData] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const token = localStorage.getItem("user");
            if(!token){
                setError("No se encontró un token válido. Inicia sesión nuevamente")
                return;
            }

            try {
                const data = await getSecureData(token);
                setSecureData(data);
            } catch(error) {
                setError("Token inválido o no autorizado", error)
            }
        }
    }, [user])
    
    return (

        <MainLayout>
            {user.role === "admin" &&(
            <>
            <h1>Dashnoard</h1>
            <p>Bienvenido admin, acá están los datos protegidos</p>
            {error && <p>{error}</p>}
            <ul>
                {secureData.map((item) => (
                    <li key={item.id}> {item.info}</li>
                ))}
            </ul>
            <button onClick = {logout} />
            </>)}
            {user.role === "user" && (
                <>
                <p>No tienes permisos</p>
                </>
            )}
        </MainLayout>
    );
}