import { useContext, useState } from "react";
import { CategoryContext } from "../context/CategoryContext.jsx";

function CategoryForm() {
    const [newCategory, setNewCategory] = useState("")
    const { addCategory } = useContext(CategoryContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (newCategory.trim()) {
            addCategory(newCategory);
            setNewCategory("");
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
            type="text"
            value={newCategory}
            onChange={(e) => setNewCategory(e.target.value)}
            placholder="Nueva categoría" />
            <button type="submit">Añadir</button>
        </form>
    )
}

export default CategoryForm;