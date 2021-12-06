import React from 'react';

function MyShoppingCart(props) {
  const products = props.cart.map((element, index) => {
    return (
      <li>
        {element.name} {element.price}
      </li>
      )
  })
  return (
    <div className="MyShoppingCart">
      <h2>Your Cart!</h2>
      <ul>{products}</ul>
    </div>
  );
}

export default MyShoppingCart;
