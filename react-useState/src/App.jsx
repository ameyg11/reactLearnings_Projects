import { use, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import btnModule from './button.module.css'


export default function App(){

  const initial = {
    name: '',
    email: '',
    password: '',
    contact: ''
  }

  const [form, setForm] = useState(initial);

  console.log(form)

  function nameChange(e){
        // console.log(e.target)
        // console.log(e.target.value)
        setForm({...form, name: e.target.value})
      }

  const mailChange = e => {
    setForm({...form, email: e.target.value})
  }
  const passChange = e => {
    setForm({...form, password: e.target.value})
  }
  const numChange = e => {
    setForm({...form, contact: e.target.value})
  }

  return(
    <>
    <div>
      <label>Name : </label>
      <input onChange={nameChange} placeholder='Enter your name'/>
    </div>
    <p>Your name is {form.name}</p>
    <div>
      <label>E-mail : </label>
      <input  onChange={mailChange} placeholder='Enter your mail'/>
    </div>
    <div>
      <label>Password : </label>
      <input  onChange={passChange} placeholder='Enter your password'/>
    </div>
    <div>
      <label>Contact : </label>
      <input  onChange={numChange} placeholder='Enter your mobile number'/>
    </div>
    </>
  )
}

// const RemoveButton = (props) => {

//   const {count, setCount} = props;

//   {console.log(props)}
//   function handleDecrement() {
//       // console.log(count);
//       // {count > 0 ? setCount((count) => count - 1) : alert('value should be greater than zero')}
//       setCount(count - 1)
//       // setCount((count) => count + 1)   
//     }

//   return (
//     <button onClick={handleDecrement}>Decrement {props.count}</button>
//   )
// }

// const AddButton = (props) => {

//   console.log(props)
//   function handleIncrement() {
//       console.log(props.count);
//       props.setCount(props.count+ 1)
//       // setCount((count) => count + 1)
//     }

//   return (
//     <button onClick={handleIncrement}>Increment {props.count}</button>
//   )
// }

// function App() {
//   // const [count, setCount] = useState(0)

//   // const [text, setText] = useState('hello');

//   // const [hide, setHide] = useState(false);

//   // const [form, setForm] = useState({
//   //   firstName: 'Barbara',
//   //   lastName: 'Hepworth',
//   //   email: 'bhepworth@sculpture.com'
//   // })

//   // function handleChange(e) {
//   //   setText(e.target.value);
//   // }
//   // function handleIncrement() {
//   //   console.log(count);
//   //   setCount((count) => count + 1)
//   //   // setCount((count) => count + 1)
//   // }
//   // function handleDecrement() {
//   //   console.log(count);
//   //   {count > 0 ? setCount((count) => count - 1) : alert('value should be greater than zero')}
//   //   // setCount((count) => count - 1)
//   //   // setCount((count) => count + 1)
//   // }

//   // function hidePassword(){
//   //   // setHide((hide) => hide = !hide)
//   //   setHide(!hide)
//   // }

//   const [value, setValue] = useState("")

//   const [count, setCount] = useState(0)

//   function handleChange(e){
//     console.log(e.target)
//     console.log(e.target.value)
//     setValue(e.target.value)
//   }

//   return (
//     <>
//       <AddButton count={count} setCount={setCount}/> 
//       <p>value is {value} & {count} </p>
//       <RemoveButton count={count} setCount={setCount}/>
//       <input onChange={handleChange} placeholder='enter your text'/>
//       {/* <div className='form'>
//         <label>first Name</label> <input type='text' value={form.firstName} onChange={(e) => setForm({...form,firstName:e.target.value})}/>
//         {console.log(form)}
//       </div>

//       <input  onChange={() => handleChange()} type = {hide ? 'text' : 'password'} style={{margin:'2px', height:'30px'}} placeholder='Enter Your Password'/>
//       <button onClick={() => hidePassword()} style={{ height:'45px'}}>{hide ? 'hide' : 'Show'}</button>
//       <p>Your password is {text}</p>
//       <h1>Hey</h1>
//       <button onClick={() => handleIncrement()} className={btnModule.danger}>Click {count}</button>
//       <input value={text} onChange={handleChange} style={{margin:'12px', height:'30px'}}/>
//       <button onClick={() => handleDecrement()}  className={btnModule.safe} >Click {count}</button>
//       <p>You typed: {text} & count is {count}</p>
//       <button onClick={() => setText('hello')}>
//         Reset
//       </button> */}
//     </>
//   )
// }

// export default App
