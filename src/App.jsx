import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import logo from "../images/brand-logo.png";

import "./App.css";
import AddForm from "./component/AddForm";
import ProductGroup from "./component/ProductGroup";
import ProductRow from "./component/ProductRow";
const sampleProducts = [
  {
    id: 1,
    name: "Latte",
    price: "4000",
    category: 1,
  },
  {
    id: 2,
    name: "Americano",
    price: "4000",
    category: 1,
  },
  {
    id: 3,
    name: "pine cake",
    price: "8000",
    category: 2,
  },
];
const categories = [
  {
    id: 1,
    name: "Drinks",
  },
  {
    id: 2,
    name: "Cake",
  },
  {
    id: 3,
    name: "Pizza",
  },
];
function App() {
  const [products, setProducts] = useState(sampleProducts);
  const [newProduct, setNewProduct] = useState({
    id: uuidv4(),
    name: "",
    price: "",
    category: "",
  });
  useEffect(() => {
    const productJson = localStorage.getItem("product");
    if (productJson !== null) setNewProduct(JSON.parse(productJson));
  }, []);
  useEffect(() => {
    localStorage.setItem(
      "product",
      JSON.stringify([newProduct.name, newProduct.price])
    );
  }, [newProduct]);
  return (
    <main className="bg-gray-100 h-screen">
      <div className="container  mx-auto bg-white flex h-100">
        {/* add form */}
        <div className="w-1/2 p-4">
          <AddForm newProduct={newProduct} setNewProduct={setNewProduct} />
        </div>
        {/* preview */}
        <div className="w-1/2 p-4 flex justify-center preview">
          <div className="w-2/3 mx-auto">
            <div className="flex justify-center items-center">
              <img src={logo} alt="logo" className="h-40" />
            </div>
            {products.map((product) => (
              <ProductGroup key={product.id} product={product} />
            ))}
            <ProductRow name={newProduct.name} price={newProduct.price} />
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
