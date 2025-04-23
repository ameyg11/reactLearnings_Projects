import React from 'react'
import './App.css';


export default function App() {
  return (
    <div className='text-green-800 justify-center'>
      <input placeholder='Add your wishlist here...' />
      <button>Add</button>
      <div>
        <label>
          <input type='checkbox'/>
          <span className="">Scuba Diving</span>
        </label>
        <button>Delete</button>
      </div>

      <div>
        <label>
          <input type='checkbox'/>
          <span className='text-cyan-500'>Rafting</span>
        </label> 
        <button>Delete</button>
      </div>

      <div>
        <label>
          <input type='checkbox'/>
          <span className='text-cyan-500'>Treaking</span>
        </label>
        <button>Delete</button>
      </div>

      <div>
        <label>
          <input type='checkbox'/>
          <span className='text-cyan-500'>Swimming</span>
        </label>
        <button>Delete</button>
      </div>
    </div>
  )
}