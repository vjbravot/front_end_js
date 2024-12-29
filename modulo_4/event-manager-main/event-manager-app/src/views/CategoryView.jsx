import CategoryForm from "../components/CategoryForm"
import CategoryList from "../components/CategoryList"
import CategoryProvider from "../context/CategoryContext"

function CategoryView() {
    return(
        <CategoryProvider>
            <div>
                <h1>Gestión de categorías</h1>
                <CategoryForm />
                <CategoryList />
            </div>
        </CategoryProvider>
    )
}

export default CategoryView;