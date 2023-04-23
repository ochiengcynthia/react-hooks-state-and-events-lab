import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  const [cart, setCart] = React.useState([]);

  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
  const [isDarkMode, setIsDarkMode] = React.useState(false);

  function updateCart(item) {
    if (cart.includes(item)) {
      setCart(cart.filter(cartItem => cartItem !== item));
    } else {
      setCart([...cart, item]);
    }
  }
  const appClass = isDarkMode ? "App dark" : "App light"
  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={() => setIsDarkMode(!isDarkMode)}>Dark Mode</button>
      </header>
      <ShoppingList items={itemData} updateCart={updateCart} />
    </div>
  );
}

export default App;
