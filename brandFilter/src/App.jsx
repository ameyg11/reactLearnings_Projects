import { useState } from 'react';
import './App.css';

function App() {
  const [search, setSearch] = useState('');
  const [filteredBrands, setFilteredBrands] = useState([]);

  const brands = [
    { id: 1, name: 'Nike' },
    { id: 2, name: 'Adidas' },
    { id: 3, name: 'Puma' },
    { id: 4, name: 'Reebok' },
    { id: 5, name: 'Under Armour' },
    { id: 6, name: 'New Balance' },
    { id: 7, name: 'Asics' },
    { id: 8, name: 'Fila' },
    { id: 9, name: 'Converse' },
    { id: 10, name: 'Vans' }
  ];

  const handleChange = (e) => {
    const value = e.target.value;
    setSearch(value);

    const filtered = brands.filter(brand =>
      brand.name.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredBrands(filtered);
  };

  return (
    <>
      <input value={search} onChange={handleChange} placeholder="Search brands..." />
      <p>Your value is: {search}</p>

      <ul>
        {(search ? filteredBrands : brands).map(brand => (
          <li key={brand.id}>{brand.name}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
