import logo from './logo.svg';
import './App.css';
import HeaderNav from './Header';
import CardContainer from './cardContainer';
import { blog } from './Data/blog';

const name = 'Amey'

// function MyButton(){
//   return (
//     <>
//     <p>Here is your Button</p>
//     <button>Submit</button>
//     </>
//   )
// }

// const MyButton = () => <button>Submit</button>

let count = 0;


const Loader = () => {
  return <p>Loading...</p>
}

const isLoading = true

const SearchBar = () => <input placeholder='Search here'/>

const Header = () => {

  const OnIncrement = () => {
    count = count + 1;
    console.log({count});
  }

  const SearchHandler = (event) => {
    console.log(event.target.value);
    // console.log(event.key);
  }

  let isAdmin = true;
  
  return (
    <>
    
    <div style = {{backgroundColor: 'gray',display: 'flex', flex:'1 0 auto' }}>
    <h1 className='h1'>Shopify App</h1>
    <input style={{backgroundColor: 'black'}} placeholder='Search'/>
    <SearchBar />
    <ul style = {{display: 'flex', padding: '5px', margin: '15px'}}>
      <li>Home</li>
      <li>About</li>
      <li>Contact</li>
    </ul>
    </div>
    {
      isAdmin ? <button style={{backgroundColor: 'darkgrey', flex: 'center', marginLeft: '400px', padding: '20px'}} onClick={OnIncrement}>Count {count}</button> : <input onChange={SearchHandler} placeholder='Search'/>
    }
    {/* <button onClick={!isLoading}>Hiii</button> */}
    </>
  )
}

const products = [{id: '1', item:'Shirts'},{id: '2', item:'SweatShirts'},{id: '3', item:"T-Shirts"},{id: '4', item:'Pants'}]

function App() {

const headerInfo = {
  name:'Amey',
  mail:'ameyg11@gamil.com',
  phone:345679
}

  return (
    <>
    <HeaderNav email = 'ameyg11@gmail.com' headerInfo = {headerInfo}>
      <h1>This is children prop part</h1>
    </HeaderNav>
    <h1>Welcome to learn react</h1>
    {isLoading ? <Header /> : <Loader/>}
    {products.map((prod) =>{
      return (
        <ul className={`${prod.id % 2 === 0 ? 'bg-color' : 'bg-color2'}`} key={prod.id}>
          <li >
            {prod.item}
          </li>
        </ul>
      )
    })}
    {/* {blog.map((obj,idx)=> {
      return(
        <CardContainer title = {obj.title} desc = {obj.body}/>
      )
    })} */}
    <Loader/>    
    </>
  );
}

export default App;