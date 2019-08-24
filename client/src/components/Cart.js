import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import CartItem from "./CartItem";
import "../scss/cart.scss";
import ripple from "../logos/ripple.svg";
// import ScrollToTop from "./ScrollToTop";
import { Link } from "react-router-dom";
import Context from "./Context";

function Cart() {
  const [cartData, setCartData] = useState();
  const [dbLoading, setDbLoading] = useState(true);
  const [total, setTotal] = useState(0);
  const context = useContext(Context);
  let p = 0;
  useEffect(() => {
    axios
      .get("/cartItem/")
      .then(res => {
        setDbLoading(false);
        setCartData(res);
      })
      .catch(err => console.log("Err" + err));
  }, []);

  if (!dbLoading) {
    const setPrice = x => {
      p = p + x;
      setTotal(p);
      context.setTotalPrice(p);
    };
    return (
      <div className="cart">
        <div>
          {cartData
            ? cartData.data.map((item, index) => {
                return (
                  <React.Fragment key={index}>
                    <CartItem item={item} setPrice={setPrice} />
                  </React.Fragment>
                );
              })
            : ""}
        </div>
        <Link to="/payout" style={total === 0 ? { display: "none" } : {}}>
          <button id="buyBtn">Checkout ${total.toFixed(2)}</button>
        </Link>

        {/* <ScrollToTop /> */}
      </div>
    );
  } else {
    return (
      <div id="dbConnect">
        <img alt="loading..." src={ripple} />
        <p>Connecting to Database...</p>
      </div>
    );
  }
}

export default Cart;
