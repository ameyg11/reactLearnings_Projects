import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const getData = async () => {
    try{
      const data = await axios.get(URL);
      console.log(data)
    }catch(err){
      return err
    }
  }

  useEffect(() => {
    const URL = `https://dummyjson.com/products/${count}`

    getData(URL);
    // fetch(URL)
    //       .then(res => res.json())
    //       .then(data => console.log(data))
  }, [count])


  return (
    <>
      <button onClick={() => setCount(count + 1)}>Count {count}</button>
    </>
  )
}

export default App
