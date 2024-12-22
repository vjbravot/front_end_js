import { useState } from "react";
function AttributeExample(){
    const [selected, setSelected] = useState(false);
    const [inputValue, setInputValue] = useState("");

    return(
        <div>
            <h2>Ejemplo de atributos</h2>
            <label>
                <input 
                type="checkbox" 
                checked={selected} 
                onChange={() => setSelected(!selected)}
                />
            </label>
            <br />
            <label>
                Texto: 
                <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                />
            </label>
            <p>Texto ingresado: {inputValue}</p>
            <p>Checkbox está {selected ? "marcado": "desmarcado"}</p>
        </div>
    )
}

export default AttributeExample;