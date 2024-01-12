import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { removeFromCart, adjstQty } from "../../redux/Shopping/productaction";
import web from "../image/web.png";

const CartItem = (data) => {
  const cartItem = data.data[0];
  const qty = data.data.qty;
  console.log("data", data);
  console.log("data.data.qty", data.data.qty);
  console.log("image", cartItem.img);

  const [price, setPrice] = useState(cartItem.price);
  const t = cartItem.price;

  const increment = () => {
    var value = parseInt(document.getElementById("demo").value);
    console.log("inc value", value);
    const key = qty;
    console.log("inc qty", qty);
    value = key;
    value++;
    document.getElementById("demo").value = value;
    dispatch(adjstQty(cartItem.id, value));
  };

  const decrement = () => {
    var value = parseInt(document.getElementById("demo").value);
    console.log("dec value", value);
    const key = qty;
    console.log("dec qty", qty);
    value = key;
    if (value > 1) {
      value--;
      document.getElementById("demo").value = value;
      dispatch(adjstQty(cartItem.id, value));
    }
  };

  // console.log(data);

  const dispatch = useDispatch();

  return (
    <>
      <div className="col-lg-12 col-md-12 col-sm-12 mb-3 shopping-cart">
        {/* start */}

        <div class="item">
          <div class="image">
            <img src={cartItem.img} alt={cartItem.img} />
          </div>

          <div class="description">
            <h5>{cartItem.heading}</h5>
          </div>

          <div class="quantity">
            <input
              className="plus"
              type="button"
              onClick={increment}
              value="+"
            />
            <input
              id="demo"
              className="input"
              type="text"
              name="name"
              value={qty}
            />

            <input
              className="minus"
              type="button"
              onClick={decrement}
              value="-"
            />
          </div>

          <div className="mt-3">
            <p>{price}$</p>
          </div>

          <i
            class="fas fa-trash "
            onClick={() => dispatch(removeFromCart(cartItem.id))}
          ></i>
        </div>
      </div>
    </>
  );
};

export default CartItem;
