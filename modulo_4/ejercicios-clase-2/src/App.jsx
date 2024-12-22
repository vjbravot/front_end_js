import RegisterVehicle from './components/RegisterVehicle';
import ServiceList from './components/ServiceList';
import StatusMessage from './components/StatusMessage';
import FocusInput from './components/FocusInput';
import AttributeExample from './components/AttributeExample'
function App() {
return (
<div>
<h1>Mantenimiento de Vehículos</h1>
<RegisterVehicle />
<ServiceList />
<StatusMessage />
<FocusInput />
<AttributeExample />
</div>
);
}
export default App;
