import React from "react";
import "./Products.css";
import { useSelector } from "react-redux";
import Product from "./Product";

const Products = () => {
  const products = useSelector((state) => state.productreducer.products);

  return (
    <>
      <div className="container menu">
        <h2 className=" text-center mb-2 mt-5">Menu</h2>
        <div className="row">
          {/* I am using useSelector hook to access the global state and is using array destructuring to get tha array on ehich map method is applicable and passing the data as props to Pcomman Componenet*/}

          {products.map((data, ind) => {
            return <Product key={ind} data={data} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Products;
