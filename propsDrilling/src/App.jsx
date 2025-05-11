import { useState } from 'react'
import './App.css'
import  Button  from './Components/Button'

function App() {

  const [count, setCount] = useState(0);

  const onButtonClick = () => {
    setCount(count + 1);
  }

  return (
    <>
      <Button count={count} onButtonClick={onButtonClick}/>
    </>
  )
}

export default App
