import React from "react";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";

const Product = () => {
  return (
    <>
      <div>
        <input type="text" placeholder="Search Products" />
      </div>
      <div>
        <Link to="featured">Featured Product</Link>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Link to="new">New Product</Link>
      </div>
      <Outlet />
    </>
  );
};

export default Product;
