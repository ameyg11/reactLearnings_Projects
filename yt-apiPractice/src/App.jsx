import React, { useState } from "react";

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

export default function App() {
  const [selectedItem, setSeletectedItem] = useState([]);

  const onAddToCartClick = (id) => {
    console.log("Clicked");
    console.log(id);
    const selectedBrand = brands.find((brand) => {
      return brand.id === id;
    })
    console.log(selectedBrand.name)
    setSeletectedItem([...selectedItem, selectedBrand]) 
  };

  const onRemoveClick = (id) => {
    const filteredBrand = selectedItem.filter((brand) => brand.id != id)
    setSeletectedItem(filteredBrand)
  }

  return (
    <>
      <div>
        <p>Add to cart</p>
        {brands.map((brand) => {
          return (
            <div key={brand.id}>
              <span>{brand.name}</span>
              <button onClick={() => onAddToCartClick(brand.id)}>
                Add to Cart
              </button>
            </div>
          );
        })}
      </div>
      <div>
        <p>Your Cart</p>
        {
          selectedItem.map(brand =><p key={brand.id}>{brand.name} <button onClick={() => onRemoveClick(brand.id)}>Remove</button></p>)
        }
      </div>
    </>
  );
}
