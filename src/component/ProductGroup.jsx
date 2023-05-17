import React from "react";
import ProductRow from "./ProductRow";
import { motion } from "framer-motion";
import { categories } from "../App";
const ProductGroup = ({ product, isAdmin }) => {
  const currentCategroy = categories.find(
    (category) => category.id === product.category
  );
  return (
    <motion.div whileHover={{scale:1.05}} className="mt-4">
      <div className="flex justify-between  text-2xl text-bold  text-slate-800">
        <h2>{currentCategroy?.name}</h2>
        <h2>Price</h2>
      </div>
      <ProductRow product={product} isAdmin={isAdmin} />
    </motion.div>
  );
};

export default ProductGroup;
