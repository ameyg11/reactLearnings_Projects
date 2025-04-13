import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { act } from "react";


const brands = [
  { id: 1, name: "Nike" },
  { id: 2, name: "Adidas" },
  { id: 3, name: "Puma" },
  { id: 4, name: "Reebok" },
  { id: 5, name: "Under Armour" },
  { id: 6, name: "New Balance" },
  { id: 7, name: "Asics" },
  { id: 8, name: "Fila" },
  { id: 9, name: "Converse" },
  { id: 10, name: "Vans" },
];


function App() {

  const [addCart, setAddCart] = useState([])

  const addToCart = (id) => {
    console.log('clicked', id)
    const selectedItem = brands.find(item => item.id === id)
    setAddCart([...addCart, selectedItem])
    console.log(selectedItem)
  }

  return (
    <>
      <p>Add brand to your cart</p>
      {brands.map((brand) => (
        <div key={brand.id}>
          <span>{brand.name}</span>
          <button onClick={() => addToCart(brand.id)}>Add To Cart</button>
        </div>
      ))}
      <div>
        <p>Your Cart</p>
        {
          addCart && addCart.map((brand) =><p id={brand.id}>{brand.name}</p>)
        }
      </div>
    </>
  );
}

export default App;
