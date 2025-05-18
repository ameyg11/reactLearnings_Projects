export const reducerFun = (state, action) => {
    console.log("this is state variable",state);
    console.log("this is action varialble",action)
    switch (action.type) {
      case 'Increment':
        return{
        ...state,
        count: state.count + 1
        }
      case 'Decrement':
        return{
        ...state,
        count: state.count - 1
        }
    }
  };