import { useReducer } from "react";
import { products } from "./db/products";
import "./App.css";
import Navbar from "./components/navbar";
// import { countReducer } from "./reducers.js/countReducer";

function App() {
  // const initialState = {
  //   price: "",
  //   discount: "",
  //   rating: "",
  // };

  // const [state, dispatch] = useReducer(countReducer, initialState);

  // const filteredProducts = products.filter((product) => {
  //   const { price, discount, rating } = state;
  //   // console.log(state)
  //   return (  
  //     (price === "" || product.price <= price) &&
  //     (discount === "" || product.discount >= discount) &&
  //     (rating === "" || product.rating >= rating)
  //   );
  // });

  const initialState = {
    price: "",
    discount: "",
    rating: "",
    count: 0
  }

  const countReducer = (state, action) => {
    console.log(state)
    console.log(action)
    // console.log(state.discount)
    switch (action.type){
      case "SET_PRICE" :
        return {...state, price: action.payload}
    case "SET_DISCOUNT":
      return { ...state, discount: action.payload};
    case "SET_RATING":
      return { ...state, rating: action.payload };
    case "SET_COUNT":
      return {...state, count: state.count + 1};
    default:
      return state;
  }
  };

  const [state, dispatch] = useReducer(countReducer, initialState);
  
  const filteredProducts = products.filter((product) => {
    // console.log(state)
    const {price, rating, discount} = state;
    return(
      (price === "" || product.price <= price) &&
      (discount === "" || product.discount >= discount) &&
      (rating === "" || product.rating >= rating)
    )
  })

  return (
    <>
    <Navbar count={state.count}/>
    <div style={{ padding: "20px" }}>
      <h1>Products</h1>
      <div style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
        <p >Filters</p>
        <input
          type="number"
          placeholder="set price limit"
          onChange={(e) => dispatch({type: "SET_PRICE", payload: e.target.value})}
        />
        <input 
          type="number"
          placeholder="set discount you want"
          onChange={(e) => dispatch({type: "SET_DISCOUNT", payload: e.target.value})}
        />
        <input
          type="number"
          step="0.1"
          placeholder="set rating"
          onChange={(e) => dispatch({type: "SET_RATING", payload: e.target.value})}
        />
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "10px" }}>
        {filteredProducts.map((product) => (
          <div key={product.id} style={{ border: "1px solid gray", padding: "10px" }}>
            <strong>{product.name}</strong>
            <p>
            Price - {product.price} || Rating - {product.rating} || Discount - {product.discount};
            </p>
            <button onClick={() => dispatch({type: "SET_COUNT"})}>Add to cart</button>
          </div>
        ))}
      </div>

      {/* <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "10px" }}>
        {filteredProducts.map((product) => (
          <div key={product.id} style={{ border: "1px solid gray", padding: "10px" }}>
            <strong>{product.name}</strong>
            <p>
              Price - {product.price} || Rating - {product.rating} || Discount - {product.discount}
            </p>
          </div>
        ))}
      </div> */}
    </div>
    </>
  );
}

export default App;
