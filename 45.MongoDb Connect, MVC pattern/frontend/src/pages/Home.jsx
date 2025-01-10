import React from "react";
import { productList } from "../context/productContext";
import Navbar from "../components/navbar/Navbar";

const Home = () => {
    const { products } = productList();
    

    

  return (
    <div>
      <Navbar />
      {products && products.length > 0 ? (
        products.map((product) => (
          <div key={product._id}>
            <h2>{product.name}</h2>
            <p>{product.category}</p>
            <span>{product.price}</span>
          </div>
        ))
      ) : (
        <h2>No products found</h2>
      )}
    </div>
  );
};

export default Home;
