import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProducts } from "./redux/Shopping/productaction";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Redirect, Route } from "react-router-dom";
import Menu from "./Components/Menu/Menu";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import Cart from "./Components/Cart/Cart";
import Navbar from "./Components/Navbar/Navbar";
import SingleProduct from "./Components/SingleProduct/Single";
import Products from "./Components/Product/Products";

const App = () => {
  const dispatch = useDispatch();

  const productsData = useSelector((state) => state.productreducer);
  const { products, loading, error } = productsData;

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  if (loading == true) {
    return (
      <>
        <h2>Loading</h2>
      </>
    );
  } else if (error) {
    return <h2>{error}</h2>;
  } else {
    return (
      <>
        <BrowserRouter>
          <div>
            <Navbar />
            <Route exact path="/" component={Menu} />
            <Route path="/cart" component={Cart} />
            <Route path="/login" component={Login} />
            <Route path="/pizzas" component={Products} />
            <Route path="/register" component={Register} />

            <Route path="/details/:id" component={SingleProduct} />

            <Redirect to="/" />
          </div>
        </BrowserRouter>
      </>
    );
  }
};

export default App;
