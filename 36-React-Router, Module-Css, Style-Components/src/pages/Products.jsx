import React from "react";
import { Link, Outlet } from "react-router-dom";

const Products = () => {
  return (
    <div>
      <Link to="productdetail">Product</Link>
      <Outlet />
    </div>
  );
};

export default Products;
