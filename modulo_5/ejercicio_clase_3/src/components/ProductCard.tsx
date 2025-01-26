import React from "react";
import { Product } from "../interfaces/IProduct"


const ProductCard: React.FC<Product> = ( data: Product) => {
    return (
        <div>
            <h3>{data.name}</h3>
            <p>ID: {data.id}</p>
            <p>Precio: ${data.price}</p>
        </div>
    )
}

export default ProductCard;