import { useAuth } from "../context/AuthContext"
const Home = () => {
    const {user} = useAuth();

    return (
        <Mainlayout>
            <h1>Bienvenidos a SafeApp</h1>
            {!user && <p><a href="/login">Iniciar sesión</a></p>}
            {user && <p>Estás autenticado como <strong>{ user.role }</strong></p>}
        </Mainlayout>
    )
}

export default Home;