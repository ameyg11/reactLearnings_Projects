import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'
import Product from './component/product'

function App() {
  const [count, setCount] = useState(0)

  let infoUser = {
    name:'Amey',
    age:21
  }

  let newArr =[1, 2, 3, 4, 'amey'];


  return (
    <>
    <h1 className='bg-green-400 mb-4 text-black p-4 rounded-xl '>Tailwind Test</h1>

    <Card userName="chai aur code"/> 
    <Card userName='chai aur react' btnText="Subscribe" />
    <Product userName={infoUser.name} btnText="Subscribe"/>
    </>
  )
}

export default App
