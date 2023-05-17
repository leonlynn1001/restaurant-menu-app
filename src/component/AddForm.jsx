import React, { useContext } from "react";
import { categories } from "../App";
import { MenuContext } from "../App";
const AddForm = ({ selectedProduct }) => {
  const { handleProductDataChange } = useContext(MenuContext);
  const handleInputChange = (e) => {
    handleProductDataChange(selectedProduct.id, {
      ...selectedProduct,
      [e.target.name]: e.target.value,
    });
  };
  // const handleInputChange = (e) => {
  //   setNewProduct({ ...newProduct, [e.target.name]: e.target.value });
  // };

  return (
    <form className="w-2/3">
      <div className="form-control w-full ">
        <label className="label">
          <span className="label-text">Product Name</span>
        </label>
        <input
          type="text"
          placeholder="Enter Product Name"
          className="input input-bordered input-sm w-full "
          value={selectedProduct.name}
          name="name"
          onChange={handleInputChange}
        />
      </div>
      <div className="form-control w-full ">
        <label className="label">
          <span className="label-text">ProductPrice</span>
        </label>
        <input
          type="text"
          placeholder="Enter Product Price"
          className="input input-bordered input-sm w-full "
          value={selectedProduct.price}
          name="price"
          onChange={handleInputChange}
        />
      </div>
      <div className="form-control w-full ">
        <label className="label">
          <span className="label-text">Category</span>
        </label>

        <select
          className="select select-bordered select-sm w-full "
          name="category"
          value={selectedProduct.category}
          onChange={(e) => {
            handleProductDataChange(selectedProduct.id, {
              ...selectedProduct,
              [e.target.name]: parseInt(e.target.value),
            });
          }}
        >
          <option disabled selected>
            Select category
          </option>
          {/* <option>Drinks</option>
          <option>Cake</option>
          <option>Pizza</option> */}
          {categories.map((category) => (
            <option
              // key={category.id}
              value={category.id}
              selected={category.id === selectedProduct.category}
            >
              {category.name}
            </option>
          ))}
        </select>
      </div>
      {/* <button className="btn btn-sm btn-primary mt-2">Save</button> */}
    </form>
  );
};

export default AddForm;
