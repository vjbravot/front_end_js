import { useRef } from "react";
function FocusInput() {
    const inputRef = useRef(null);

    const handleFocus = () => {
        inputRef.current.focus();
    }

    return (
        <div>
            <h2>Enfocar campo de texto</h2>
            <input ref={inputRef} type="text" placeholder="Escribe algo acá" />
            <button onClick={handleFocus}>Enfocar</button>
        </div>
    )
}

export default FocusInput;