import Button from "./components/Button"
import multiplicar from "./utils/math"
import ProductCard from "./components/ProductCard"
import ProductManager from "./services/ProductManager"
import {Product} from "./interfaces/IProduct"
import ProductList from "./components/ProductList"
import React from "react"
import './App.css'

function App() {
  
  const handleClick = () => {
    alert("Botón presionado");
  }

  const resultado = multiplicar(3,4);

  const producto: Product = { id: 1, name: "Laptop", price: 1200};

  const manager = new ProductManager();
  manager.addProduct({ id: 2, name: "Tablet" , price: 500});
  manager.addProduct(producto);
  const productos = manager.getProducts();

  return (
    <>
      <h1>Ejemplo de typescript en react</h1>
      <Button label = "haz click acá" onClick = {handleClick}></Button>
      <hr />
      <h3>Resultado: {resultado}</h3>
      <hr />
      <ProductCard {...producto} />
      <hr />
      <ProductList {... productos} />
    </>
  )
}

export default App
