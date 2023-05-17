import React from "react";
import ProductList from "../src/component/ProductList";
import { motion } from "framer-motion";
import AddForm from "../src/component/AddForm";
function Admin({ selectedProduct, products, showError }) {
  return (
    <>
      <main className="bg-gray-100 h-screen">
        <motion.div
          intial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="md:w-1/2 p-4 contianer h-full flex flex-col md:flex-row bg-white "
        >
          {/* add form */}
          <div className="w-1/2 p-4 flex justify-center">
            {/* <AddForm newProduct={newProduct} setNewProduct={setNewProduct} /> */}
            {selectedProduct && <AddForm selectedProduct={selectedProduct} />}
          </div>

          {/* preview */}
          <div className="md:w-1/2 p-4 flex justify-center preview">
            <ProductList products={products} isAdmin={true} />
          </div>
        </motion.div>
      </main>
      {showError && (
        <div className="toast toast-top toast-end">
          <div className="alert alert-error">
            <div>
              <span>Product Deleted😃</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Admin;
