import { createContext, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";

import User from "../pages/User";
import Admin from "../pages/Admin";

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
export const categories = [
  {
    id: 1,
    name: "Drinks🍹",
  },
  {
    id: 2,
    name: "Cake 🧁",
  },
  {
    id: 3,
    name: "Pizza 🍕",
  },
];
export const MenuContext = createContext();
const STORAGE_KEY = "menuapp.products";
function App() {
  const [products, setProducts] = useState(sampleProducts);
  // const [newProduct, setNewProduct] = useState({
  //   id: uuidv4(),
  //   name: "",
  //   price: "",
  //   category: "",
  // });
  const [selectedProductId, setSelectedProductId] = useState();
  const selectedProduct = products.find(
    (product) => product.id === selectedProductId
  );
  const [showError, setShowError] = useState(false);
  // initial
  useEffect(() => {
    const productsJSON = localStorage.getItem(STORAGE_KEY);
    if (productsJSON !== null) setProducts(JSON.parse(productsJSON));
  }, []);
  //state change(del,edit) fik yin run ml
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(products));
  }, [products]);
  function handleNewProductAdd() {
    const newProduct = {
      id: uuidv4(),
      name: "",
      price: "",
      category: "",
    };
    setProducts([...products, newProduct]);
    setSelectedProductId(newProduct.id);
  }
  function handleProductDelete(id) {
    setProducts(products.filter((item) => item.id !== id));
    setShowError(true);
    setTimeout(() => {
      setShowError(false);
    }, 3000);
  }
  function handleProductDataChange(id, updateproductData) {
    const newProducts = [...products];
    const productIndex = newProducts.findIndex((product) => product.id === id);
    newProducts[productIndex] = updateproductData;
    setProducts(newProducts);
  }
  function handleProductSelect(id) {
    setSelectedProductId(id);
  }
  const menuContextValue = {
    handleProductDelete,
    handleNewProductAdd,
    handleProductSelect,
    handleProductDataChange,
  };

  return (
    <MenuContext.Provider value={menuContextValue}>
      <nav className="container py-2 ">
        <ul className="flex justify-around text-blue-500">
          <Link to="/">User</Link>
          <Link to="/admin">Admin</Link>
        </ul>
      </nav>
      {/* where our componensts will render */}
      <Routes>
        <Route path="/" element={<User products={products} />} />
        <Route
          path="/admin"
          element={
            <Admin
              selectedProduct={selectedProduct}
              showError={showError}
              products={products}
            />
          }
        />
      </Routes>
    </MenuContext.Provider>
  );
}

export default App;
function Home() {
  return <div>Home</div>;
}
function AboutUs() {
  return <div>About Us</div>;
}
function Courses() {
  return <div>Courses</div>;
}
