import { createContext, useState } from "react";

export const CategoryContext = createContext();

export default function CategoryProvider({ children }){
    const [categories, setCategories] = useState(["Reuniones", "Proyectos", "Social"])

    const addCategory = (category) => {
        setCategories((prev) => [...prev, category]);
    }

    return (
        <CategoryContext.Provider value = {{ categories, addCategory }}>
            {children}
        </CategoryContext.Provider>
    )
}