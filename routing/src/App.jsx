
import './App.css'
import { Link, NavLink, Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home'
import { About } from './pages/About'
import { Cart } from './pages/Cart'


function App() {
  
  const getStyles =  ({isActive}) => {
    return {
      color: isActive ? "red" : ''
    }
  }

  return (
    <div className='App'>
      <NavLink to='/' style={getStyles}>|| Home ||</NavLink>
      <NavLink to='/cart' style={getStyles}> Cart ||</NavLink>
      <NavLink to='/about' style={getStyles}> About ||</NavLink>

      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/cart' element={<Cart />}/>
      </Routes>
    </div>
  )
}

export default App
