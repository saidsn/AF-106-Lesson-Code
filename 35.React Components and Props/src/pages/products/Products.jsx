import React from "react";
import Product from "../../components/product/Product";
import Button from "../../components/button/Button";
let mehsullar = [
  {
    name: "Sud",
    price: 56,
  },
  {
    name: "Shampoo",
    price: 45,
  },
  {
    name: "Soap",
    price: 23,
  },
];
const Products = () => {
  return (
    <div>
      <Product productName="Sud" productPrice={56} products={mehsullar} />
      <Button
        type="submit"
        style={{
          backgroundColor: "black",
          color: "white",
          padding: "10px",
          width: "100px",
          borderRadius: "10px",
        }}
      >
        Click me!
      </Button>
    </div>
  );
};

export default Products;
