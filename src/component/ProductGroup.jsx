import React from "react";
import ProductRow from "./ProductRow";

const ProductGroup = ({product}) => {
  return (
    <div className="mt-4">
      <div className="flex justify-between  text-2xl text-bold  text-slate-800">
        <h2>{product.name}</h2>
        <h2>{product.price}</h2>
      </div>
      <ProductRow name="latte" price="4000" />
      <ProductRow name="mocha" price="5000" />
    </div>
  );
};

export default ProductGroup;
