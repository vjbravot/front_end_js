import {useEffect, useState} from "react";
import './App.css'
import PropertyList from "./components/PropertyList.jsx"
import ContactForm from "./components/ContactForm.jsx"



function App() {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    setProperties([
      {id: 1, name: 'Casa Moderna', location: 'Ciudad A', price: 120000},
      {id: 2, name: 'Casa Moderna', location: 'Ciudad B', price: 95000},
      {id: 3, name: 'Casa Moderna', location: 'Ciudad C', price: 150000}

    ])
  }, []);

  return (
    <div className='container my-5'>
      <h1 className='text-center'>Plataforma Inmobiliaria</h1>
      <div className='row'>
        <div classname='col'>
          <PropertyList properties={properties} />
          <ContactForm />
        </div>
      </div>
    </div>
  )
}

export default App
