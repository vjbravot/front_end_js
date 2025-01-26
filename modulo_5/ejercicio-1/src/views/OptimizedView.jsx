import React, { Profiler } from "react";
import DoctorsList from "../components/DoctorsList";
import {DoctorsProvider} from "../context/DoctorsContext.jsx"

function OptimizedView() {
const onRenderCallback = (
id, // Nombre del Profiler (OptimizedEventList)
phase, // "mount" o "update"
actualDuration // Tiempo que tardó en renderizar
) => {
console.log(`${id} (${phase}) tomó ${actualDuration}ms para renderizar.`);
};
return (
<div>
<h1>Optimización del Rendimiento</h1>
<Profiler id="Optimized Doctors List" onRender={onRenderCallback}>
<DoctorsProvider><DoctorsList/></DoctorsProvider>
</Profiler>
</div>
);
}
export default OptimizedView;