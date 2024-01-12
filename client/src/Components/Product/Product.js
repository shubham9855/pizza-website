import React, { useState } from "react";
import { Link } from "react-router-dom";
import { addToCart } from "../../redux/Shopping/productaction";

import { useDispatch } from "react-redux";
import web from "../image/web.png";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Product({ data }) {
  const dispatch = useDispatch();

  const addParticularProduct = (id) => {
    // const dev = document.querySelectorAll('.cart-button');
    // console.log(dev);

    // dev.forEach((e) =>{
    //     e.classList.add('clicked');
    // })

    toast.warn(`🛒 Added to the Cart`, {
      position: "top-right",
      hideProgressBar: true,
      autoClose: 1000,
    });
    dispatch(addToCart(data.id));

    // dev.forEach((e) =>{
    //     e.classList.remove('clicked');
    // })
  };

  return (
    <>
      <div className=" product-group col-lg-3 col-md-4 col-12">
        <div className="product">
          <img src={web} alt={data.img} />
          <div class="product-body">
            <div class="product-desc">
              <Link to={`/details/${data.id}`}>
                <h3 className="text-center">
                  {" "}
                  <a href="#">{data.heading}</a>{" "}
                </h3>
              </Link>
              <p className="text-center mx-2">
                Li Europan lingues es membres del sam familie. Lor separat
                existentie es un myth. Por scientie, musica, sport etc
              </p>
              <div class="favorite">
                <p class="product-price">{data.price}$</p>

                <i class="far fa-heart"></i>
              </div>
            </div>
            <div class="product-controls">
              <button
                onClick={() => addParticularProduct(data.id)}
                className=" cart-button btn btn-get-started "
              >
                <span className="text">
                  Add to cart <i class="fas fa-shopping-cart"></i>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <ToastContainer />
    </>
  );
}

export default Product;
