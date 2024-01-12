import React, { useState, useEffect } from "react";
import "./Cart.css";
import emptyCart from "../image/empty-cart.png";
import { Link, useHistory } from "react-router-dom";
import CartItem from "./CartItem";
import { useSelector, useDispatch } from "react-redux";
import { CLEAR_CART } from "../../redux/Shopping/actiontypes";

function Cart() {
  const dispatch = useDispatch();
  const history = useHistory();

  const user = JSON.parse(localStorage.getItem("profile"));
  // console.log(carting)

  const cart = useSelector((state) => state.cartreducer.cart);
  // const cart = JSON.parse(localStorage.getItem('cart'));

  var totalPrice = 0;

  useEffect(() => {}, [cart]);

  if (cart) {
    cart.map((item) => {
      totalPrice = totalPrice + item[0].price * item.qty;
    });
  }

  // Logic of posting an Order

  const inState = { address: "", phone: "" };
  const [formData, setformData] = useState(inState);

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(createOrder(formData, totalPrice, cart, user.result._id));
    dispatch({ type: CLEAR_CART });

    history.push("/orders");

    console.log(formData);
    console.log(totalPrice);
    console.log(cart);
  };

  const handleChange = (e) => {
    setformData({ ...formData, [e.target.name]: e.target.value });
  };

  console.log(totalPrice);

  if (user) {
    if (cart == null || cart.length == 0) {
      return (
        <>
          <div className=" empty-page ">
            <div className=" empty-cart">
              <div className="empty-text">
                <h2> Cart is empty... 🙁</h2>
                <div className="cart-text">
                  <p>
                    You probably haven't added anything to the cart yet. To
                    Order a pizza, go to the menu page
                  </p>
                </div>
              </div>
              <div className="empty-img">
                <img className="img-fluid" src={emptyCart} alt={emptyCart} />
              </div>
            </div>
          </div>
        </>
      );
    } else {
      return (
        <>
          <div className="cart-page">
            <div className="container ">
              <div className="order-heading text-center mb-10">
                <i class="fas fa-shopping-cart sum-img"></i>
                <h3 className="sum"> Cart summary</h3>
              </div>

              <hr className="line"></hr>
              <div className="row">
                {cart.map((data, ind) => {
                  return <CartItem key={ind} data={data} />;
                })}
              </div>
              <hr className="line"></hr>

              <div className="total-price">
                <p>
                  Total Amount: <h4 className="amount">{totalPrice}$</h4>
                </p>

                <div>
                  <h5>Payement : COD</h5>

                  <form className="price-form" onSubmit={handleSubmit}>
                    <label>
                      <strong> Address :</strong>{" "}
                    </label>
                    <br></br>
                    <input
                      type="text"
                      name="address"
                      placeholder="Address"
                      onChange={handleChange}
                    ></input>{" "}
                    <br></br>
                    <label className="mt-2">
                      <strong> Phone No :</strong>
                    </label>
                    <br></br>
                    <input
                      type="text"
                      name="phone"
                      onChange={handleChange}
                      placeholder="Phone Number"
                    ></input>
                    <br></br>
                    <button
                      className="price-btn btn btn-get-started"
                      type="submit"
                    >
                      {" "}
                      Order Now{" "}
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </>
      );
    }
  } else {
    if (cart == null || cart.length == 0) {
      return (
        <>
          <div className=" empty-page ">
            <div className=" empty-cart">
              <div className="empty-text">
                <h2> Cart is empty... 🙁</h2>
                <div className="cart-text">
                  <p>
                    You probably haven't added anything to the cart yet. To
                    Order a pizza, go to the menu page
                  </p>
                </div>
              </div>
              <div className="empty-img">
                <img className="img-fluid" src={emptyCart} alt={emptyCart} />
              </div>
            </div>
          </div>
        </>
      );
    } else {
      return (
        <>
          <div className="cart-page">
            <div className="container ">
              <div className="order-heading text-center mb-10">
                <i class="fas fa-shopping-cart sum-img"></i>
                <h3 className="sum"> Cart summary</h3>
              </div>

              <hr className="line"></hr>
              <div className="row">
                {cart.map((data, ind) => {
                  return <CartItem key={ind} data={data} />;
                })}
              </div>
              <hr className="line"></hr>

              <div className="total-price">
                <p>
                  Total Amount: <h4 className="amount">{totalPrice}$</h4>
                </p>

                <div>
                  <h5>Payement : COD</h5>

                  <form className="price-form">
                    <label>
                      <strong> Address :</strong>{" "}
                    </label>
                    <br></br>
                    <input type="text" placeholder="Address"></input> <br></br>
                    <label className="mt-2">
                      <strong> Phone No :</strong>
                    </label>
                    <br></br>
                    <input type="text" placeholder="Phone Number"></input>
                    <br></br>
                  </form>

                  <Link style={{ textDecoration: "none" }} to="/login">
                    <button className=" btn btn-get-started log-cont">
                      {" "}
                      Login To Continue{" "}
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </>
      );
    }
  }
}

export default Cart;
