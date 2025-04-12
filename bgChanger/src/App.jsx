import { useState } from "react"

function App() {
  const [color, setColor] = useState("#122620")
  let [count, setCount] = useState(0)

  
  const Counter =  () => {
    count++;
    console.log(count)
    setCount(count)
  }

  return (
    <>

      <div className="w-full h-screen duration-200"
      style={{backgroundColor: color}}
      >
        <div className="flex bg-blend-color-burn justify-center align-middle text-6xl text-justify shadow-slate-900 lg:">
          Counter {count}
        </div>
        <div className="fixed flex flex-wrap mx-20 bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center shadow-lg p-3 rounded-md">
            <button className="bg-red-600 rounded-full w-8 h-8 flex justify-center ml-2 "
            onClick={() =>{setColor("#dc2626")
              Counter()
              {() => {console.log(count)}}
            }}
            ></button>
            <button className="bg-lime-600 rounded-full w-8 h-8 flex justify-center ml-2 "
            onClick={() => setColor("#65a30d")}
            ></button>
            <button className="bg-slate-500 rounded-full w-8 h-8 flex justify-center ml-2 "
            onClick={() => setColor("#64748b")}
            ></button>
            <button className="bg-fuchsia-600 rounded-full w-8 h-8 flex justify-center ml-2 "
            onClick={() => setColor("#c026d3")}
            ></button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App