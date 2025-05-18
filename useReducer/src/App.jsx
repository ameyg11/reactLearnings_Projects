import { useReducer, useState } from "react";
import "./App.css";
import { reducerFun } from "./reducer/reducers";

function App() {
  const initialValue = {
    count: 0,
  };

  // const reducerFun = (state, action) => {
  //   console.log("this is state variable",state);
  //   console.log("this is action varialble",action)
  //   switch (action.type) {
  //     case 'Increment':
  //       return{
  //       ...state,
  //       count: state.count + 1
  //       }
  //     case 'Decrement':
  //       return{
  //       ...state,
  //       count: state.count - 1
  //       }
  //   }
  // };

  const [state, dispatch] = useReducer(reducerFun, initialValue);

  const onDecClick = () => {
    dispatch({ type: "Decrement" });
  };

  // console.log(initialValue);

  return (
    <>
      {state.count}
      <div>
        <button
          onClick={() => dispatch({ type: "Increment", payload: "1234" })}
        >
          Increment
        </button>
        <button onClick={onDecClick}>Decrement</button>
      </div>
    </>
  );
}

export default App;
