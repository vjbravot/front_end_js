import { useState } from "react";
import Header from "./components/Header";
import Home from "./views/Home.jsx";
import LazyLoadingView from "./views/LazyLoadingView.jsx"
import TransformableElementView from "./views/TransformableEventView.jsx"
import CategoryView from "./views/CategoryView.jsx"
import FragmentView from "./views/FragmentView.jsx"
import TransitionView from "./views/TransitionView.jsx"
import OptimizedView from "./views/OptimizedView";
import HOCView from "./views/HOCView.jsx"
import SocketIOView from "./views/SocketIOView";
import "./App.css";
function App() {
// Estado para controlar la vista actual
const [view, setView] = useState("home");
return (
<div className="App">
<Header />
<nav>
{/* Botones para cambiar la vista */}
<button onClick={() => setView("home")}>Inicio</button>
<button onClick={() => setView("socketio")}>Socket.io</button>
<button onClick={() => setView("lazy")}>Lazy</button>
<button onClick={() => setView("transform")}>Transformar Elementos</button>
<button onClick={() => setView("categories")}>Categorías</button>
<button onClick={() => setView("fragment")}>Fragmentos</button>
<button onClick={() => setView("transition")}>Transiciones</button>
<button onClick={() => setView("HOC")}>HOCs</button>
<button onClick={() => setView("optimized")}>Optimización</button>
</nav>
{/* Mostramos la vista actual */}
{view === "home" && <Home />}
{view === "socketio" && <SocketIOView />}
{view === "lazy" && <LazyLoadingView />}
{view === "transform" && <TransformableElementView />}
{view === "categories" && <CategoryView />}
{view === "fragment" && <FragmentView />}
{view === "transition" && <TransitionView />}
{view === "HOC" && <HOCView />}
{view === "optimized" && <OptimizedView />}
</div>
);
}
export default App;
