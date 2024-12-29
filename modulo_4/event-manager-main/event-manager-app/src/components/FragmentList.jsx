import React from "react";

function FragmentList() {
    const items = [
        {id: 1, name: "Elemento 1"},
        {id: 2, name: "Elemento 2"},
        {id: 3, name: "Elemento 3"}

    ];

    return (
        <div>
            <h3>Lista de fragmentos</h3>
            <ul>
                {items.map((item) => (
                    <React.Fragment key={item.id}>
                    <li>{item.name}</li>
                    <p>Descripción del {item.name}</p>
                    </React.Fragment>

                ))}
            </ul>
        </div>
    )
}

export default FragmentList;