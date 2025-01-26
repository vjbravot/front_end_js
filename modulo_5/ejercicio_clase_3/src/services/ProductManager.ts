import { Product } from "../interfaces/IProduct" 

export default class Productmanager {
    private products: Product[] = []

    addProduct(product: Product): void {
        this.products.push(product);
    }

    getProducts(): Product[]{
        return this.products;
    }
}