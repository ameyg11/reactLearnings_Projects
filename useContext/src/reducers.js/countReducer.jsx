export const countReducer = (state, action) => {
  switch (action.type) {
    case "SET_PRICE":
      return { ...state, price: action.payload };
    case "SET_DISCOUNT":
      return { ...state, discount: action.payload };
    case "SET_RATING":
      return { ...state, rating: action.payload };
    default:
      return state;
  }
};