import './App.css'
import { useRef, useState } from 'react'

function App() {

  const [count, setCount] = useState(0);
  const ref = useRef("amey")

  console.log(ref)
  console.log(ref.current)

  let timerId = useRef('')

  const onStartClick = () => {
    timerId.current = setInterval(() => {
      setCount(count => count + 1);
    }, 1000)
    // console.log(timerId)
  }

  const onStopClick = () => {
    console.log(timerId.current)
    clearInterval(timerId.current)
  }


  return (
    <>
      <h1>Heyy</h1>
      <p>Count - {count}</p>
      <button  onClick={onStartClick} style={{margin:'14px'}}>Start</button>
      <button onClick={onStopClick}>Stop</button>
    </>
  )
}

export default App
