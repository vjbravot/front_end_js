import React from "react";
import MainLayout from "../layouts/MainLayout"
import { useAuth } from "../context/AuthContext";

function Home(){

    const { user } = useAuth();
    return(
        <div>
            <MainLayout />
            <h1> Centro Sinapsis</h1> 
            <p> Esta es la página principal del centro médico</p>
        </div>
    )
}

export default Home;