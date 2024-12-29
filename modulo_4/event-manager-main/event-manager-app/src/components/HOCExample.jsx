import BaseComponent from "./BaseComponent";
import WithClickHandler from "../hoc/withClickHandler";
import WithExtraInfo from "../hoc/withExtraInfo";
// Aplicar HOCs
const ClickableComponent = WithClickHandler(BaseComponent);
const EnhancedComponent = WithExtraInfo(ClickableComponent);
function HOCExample() {
return (
<div>
<h2>Ejemplo de Componentes de Orden Superior</h2>
<EnhancedComponent name="Extendido" />
</div>
);
}
export default HOCExample;