import React from 'react';

function AllTheThings(props) {
 const products = props.products.map((element, index) => {
  return (
    <li>
      {element.name} {element.price}
    </li>
    )
 })
  return (
    <div className="AllTheThings">
      <h2>Put these in your cart!</h2>
      <ul>
        {products}
      </ul>
    </div>
      

  );
}

export default AllTheThings;
