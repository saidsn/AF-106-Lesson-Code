import React from "react";
import Child from "../child/Child";

const Product = ({ productName, productPrice, products }) => {
  return (
    <div>
      {/* <p>Productname: {productName}</p>
      <p>ProductPrice: {productPrice}Azn</p> */}

      {products.map((product, i) => {
        return (
          <li key={i}>
            {product.name} ---- {product.price}
          </li>
        );
      })}
      <Child name={productName} price={productPrice} />
    </div>
  );
};

export default Product;
