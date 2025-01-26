const MainLayout = ({ children }) => {

    const { user, logout } = useAuth;
    return (
        <div>
            <header>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Inicio</Link>
                        </li>
                        {!user &&
                            <li>
                                <Link to="/login">Login</Link>
                            </li>
                        }
                        {user?.role === "admin" &&
                            <li>
                                <Link to="/dashboard">Dashboard</Link>
                            </li>
                        }
                        {user &&
                            <li>
                                <Link to="/search-flight">Buscar Vuelos</Link>
                            </li>
                        }

                        {user?.role === "admin" &&
                            <li>
                                <Link to="/vulnerabilities">Vulnerabilidades</Link>
                            </li>
                        }
                        <li>
                            <button onClick={logout} style={background = "none"}> Cerrar sesión</button>
                        </li>
                    </ul>
                </nav>
            </header>
            <main>{children}</main>
            <footer> 2025 safeApp</footer>
        </div>
    )
}

export default MainLayout;