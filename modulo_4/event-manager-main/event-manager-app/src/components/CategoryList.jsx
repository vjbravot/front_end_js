import { useContext } from "react";
import { CategoryContext } from "../context/CategoryContext.jsx";

function CategoryList() {
    const { categories } = useContext(CategoryContext);

    return (
        <div>
            <h3>Categorías</h3>
            <ul>
                {categories.map((category, index) => <li key={index}>{category}</li>)}
            </ul>
        </div>
    )
}

export default CategoryList;