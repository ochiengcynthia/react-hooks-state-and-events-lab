import React from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  const [cartItems, setCartItems] = React.useState([]);

  function handleUpdateCart(itemId) {
    if (cartItems.includes(itemId)) {
      setCartItems(cartItems.filter(id => id !== itemId));
    } else {
      setCartItems([...cartItems, itemId]);
    }
  }

  const itemElements = items.map(item => (
    <Item
      key={item.id}
      name={item.name}
      category={item.category}
      updateCart={() => handleUpdateCart(item.id)}
      inCart={cartItems.includes(item.id)}
    />
  ));

  return (
    <div className="ShoppingList">
      <h2>My List</h2>
      <ul className="Items">{itemElements}</ul>
    </div>
  );
}

export default ShoppingList;
