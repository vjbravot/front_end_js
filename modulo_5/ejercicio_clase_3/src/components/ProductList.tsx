import React from "react"
import { Product } from "../interfaces/IProduct"

const ProductList: React.FC<Product[]> = (products: Product[]) => {
    return (
        <div>
            <h3>Gestión de productos</h3>
            {Object.values(products).map((producto) => (
                <div key={producto.id}>
                    <h4>{producto.name}</h4>
                    <p>Precio: ${producto.price}</p>
                </div>
            ))}
        </div>)
}

export default ProductList