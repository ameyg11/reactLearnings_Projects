import React from "react";

const Products = () => {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Products</h1>
      <div style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
        <p>Filters</p>
        <input
          type="number"
          placeholder="set price limit"
          onChange={(e) =>
            dispatch({ type: "SET_PRICE", payload: e.target.value })
          }
        />
        <input
          type="number"
          placeholder="set discount you want"
          onChange={(e) =>
            dispatch({ type: "SET_DISCOUNT", payload: e.target.value })
          }
        />
        <input
          type="number"
          step="0.1"
          placeholder="set rating"
          onChange={(e) =>
            dispatch({ type: "SET_RATING", payload: e.target.value })
          }
        />
      </div>
    </div>
  );
};

export default Products;
