import { useRef } from 'react';
function FocusInput() {
const inputRef = useRef(null);
const handleFocus = () => {
inputRef.current.focus();
};
return (
<div>
<h2>Enfocar Campo de Texto</h2>
<input ref={inputRef} type="text" placeholder="Escribe algo aquí..." />
<button onClick={handleFocus}>Enfocar</button>
</div>
);
}
export default FocusInput;