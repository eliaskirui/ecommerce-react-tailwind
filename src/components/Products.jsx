import React from "react";
import { ApiTopProducts, ApiTopProduct } from "../apifolder/TopProductsApi";
import Product from "./Product";

function Products() {
  return (
    <div className="flex flex-wrap p-5 justify-between ">
      {ApiTopProducts.map((product, index) => {
        return <Product item={product} key={index} />;
      })}
    </div>
  );
}

export default Products;
