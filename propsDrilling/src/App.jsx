import { useState } from 'react'
import './App.css'
import  Button  from './Components/Button'
import { useCount } from './context/count-context'

function App() {

  const {count, setCount} = useCount();

  const onButtonClick = () => {
    setCount(count + 1);
  }

  return (
    <>
      <Button onButtonClick={onButtonClick}/>
    </>
  )
}

export default App
