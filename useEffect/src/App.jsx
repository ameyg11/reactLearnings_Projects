import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import CleanUp from './cleanUp'
import Lecture3 from './lecture3'

function App() {
  const [count, setCount] = useState(0)
  const [products, setProducts] = useState([]);

  const getData = async (URL) => {
    try{
      const {data: {products}} = await axios.get(URL);
      console.log(products)
      setProducts(products)
    }catch(err){
      return err
    }
  }

  useEffect(() => {
    const URL = `https://dummyjson.com/products`

    getData(URL);
    // fetch(URL)
    //       .then(res => res.json())
    //       .then(data => console.log(data))
  }, [])


  return (
    <>
      <Lecture3 />
      {/* <CleanUp /> */}
      <button onClick={() => setCount(count + 1)}>Count {count}</button>
      {
        products && products.length > 0 && products.map(product => <p>{product.title}</p>)
      }
    </>
  )
}

export default App
