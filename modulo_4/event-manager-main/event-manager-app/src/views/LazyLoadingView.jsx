import React, { useState, Suspense } from "react";  
const LazyLoadedComponent = React.lazy(() => 
    import("../components/LazyLoadedComponent.jsx"));



function LazyLoadingView(){
    const [loadComponent, setLoadComponent] = useState(false);

    return (
        <div>
            <h1>Vista de carga diferida por click</h1>
            <button onClick={() => setLoadComponent(true)}>Cargar componente</button>
            {
                loadComponent && (
                    <Suspense fallback={<p>Cargando componente...</p>}>
                    <LazyLoadedComponent />
                    </Suspense>
                )
            }
        </div>
    )
}

export default LazyLoadingView;