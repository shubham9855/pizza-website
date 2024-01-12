import React, { useState, useEffect } from "react";
import { LOGOUT } from "../../redux/Shopping/actiontypes";
import "../Navbar/Navbar.css";
import CloseMenu from "../image/cross-sign.png";
import MenuIcon from "../image/hamburger.svg";
import web from "../image/pizza.svg";
import { Link, useLocation, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Cart from "../Cart/Cart";
import { logout } from "../../redux/Shopping/loginaction";

const Navbar = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const history = useHistory();
  const islogined = useSelector((state) => state.loginReducer);

  //const cart = JSON.parse(localStorage.getItem('cart'));
  const cart = useSelector((state) => state.cartreducer.cart);

  //console.log(cart);

  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  const [isMoblie, setIsMoblie] = useState(true);

  useEffect(() => {
    const token = user?.token;

    setUser(JSON.parse(localStorage.getItem("profile")));
  }, [location]);

  console.log(user);

  const [count, setCount] = useState(0);

  useEffect(() => {
    let inCount = 0;
    if (cart) {
      cart.forEach((item) => {
        console.log("item", item);
        inCount += item.qty;
      });
    }
    setCount(inCount);
  }, [count, cart]);

  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  if (islogined.islogin) {
    return (
      <>
        <div className="header">
          <div className="logo-nav">
            <div className="logo-container">
              <Link
                className="logo-text"
                style={{ textDecoration: "none" }}
                to="/"
              >
                <img src={web} className="logo" alt={web} />
                Pizza
              </Link>
            </div>

            <div className="navu-links">
              <ul className={click ? "nav-options active" : "nav-options"}>
                <li className="option" onClick={closeMobileMenu}>
                  <Link style={{ textDecoration: "none" }} to="/">
                    Home
                  </Link>
                </li>

                <li className="option" onClick={closeMobileMenu}>
                  <Link style={{ textDecoration: "none" }} to="/pizzas">
                    Pizzas
                  </Link>
                </li>

                <li className="option" onClick={closeMobileMenu}>
                  <Link onClick={() => dispatch(logout(history))} to="/">
                    Log Out
                  </Link>
                </li>
                {/* <li className="option" onClick={closeMobileMenu}>
                  <Link style={{ textDecoration: "none" }} to="/orders">
                    Orders
                  </Link>
                </li>

                <li className="option" onClick={closeMobileMenu}>
                  <Link style={{ textDecoration: "none" }} to="/dashboard">
                    Dashboard
                  </Link>
                </li> */}

                {/* <li className="option" onClick={logout}>
                  <Link style={{ textDecoration: "none" }} to="/">
                    Logout
                  </Link>
                </li> */}

                <li className="optio " onClick={closeMobileMenu}>
                  <Link
                    className="cart-link"
                    style={{ textDecoration: "none" }}
                    to="/cart"
                  >
                    <div className="cart-icon">
                      <i className=" fas fa-shopping-cart"></i>
                      <span>{count}</span>{" "}
                    </div>{" "}
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="mobile-menu" onClick={handleClick}>
            {click ? (
              <img src={CloseMenu} className="menu-icon" />
            ) : (
              <img src={MenuIcon} className="menu-icon" />
            )}
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="header">
          <div className="logo-nav">
            <div className="logo-container">
              <Link
                className="logo-text"
                style={{ textDecoration: "none" }}
                to="/"
              >
                <img src={web} className="logo" alt={web} />
                Pizza
              </Link>
            </div>

            <div className="navu-links">
              <ul className={click ? "nav-options active" : "nav-options"}>
                <li className="option" onClick={closeMobileMenu}>
                  <Link style={{ textDecoration: "none" }} to="/">
                    Home
                  </Link>
                </li>

                <li className="option" onClick={closeMobileMenu}>
                  <Link style={{ textDecoration: "none" }} to="/pizzas">
                    Pizzas
                  </Link>
                </li>

                {/* <li className="option" onClick={closeMobileMenu}>
                  <Link
                    onClick={() =>
                      logout({
                        logoutParams: { returnTo: window.location.origin },
                      })
                    }
                  >
                    Log Out
                  </Link>
                </li> */}

                <li className="option" onClick={closeMobileMenu}>
                  <Link to="/login">Log In</Link>
                </li>

                <li className="optio" onClick={closeMobileMenu}>
                  <Link
                    className="cart-link"
                    style={{ textDecoration: "none" }}
                    to="/cart"
                  >
                    <div className="cart-icon">
                      <i className=" fas fa-shopping-cart"></i>
                      <span>{count}</span>{" "}
                    </div>{" "}
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="mobile-menu" onClick={handleClick}>
            {click ? (
              <img src={CloseMenu} className="menu-icon" />
            ) : (
              <img src={MenuIcon} className="menu-icon" />
            )}
          </div>
        </div>
      </>
    );
  }
};

// const mapStateToProps = state => {
//   return {
//     cart : state.productreducer.cart
//   }
// }

// export default connect(mapStateToProps)(Navbar);
export default Navbar;
