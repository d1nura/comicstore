import React, { useContext, useEffect } from "react";
import Context from "./Context";
import "../scss/payout.scss";
import credit from "../logos/credit.png";

function PayOut() {
  const context = useContext(Context);
  useEffect(() => {
    localStorage.setItem("tPrice", context.totalPrice);
  }, [context.totalPrice]);
  return (
    <div className="payOut">
      <div id="card-pic">
        <img src={credit} alt="credit card" />
      </div>
      <div id="information">
        <h1>Payment Details</h1>
        <div id="card-details">
          <div id="group">
            <label>CARDHOLDER NAME</label>
            <input type="text" />
          </div>
          <div id="group">
            <label>CARD NUMBER</label>
            <input type="number" />
          </div>
          <div id="dates-section">
            <div id="group">
              <label>EXPIRY MONTH</label>
              <input type="text" />
            </div>
            <div id="group">
              <label>EXPIRY YEAR</label>
              <input type="text" />
            </div>
            <div id="group">
              <label>CVC</label>
              <input type="number" />
            </div>
          </div>
        </div>
        <div id="pay">
          <h2>
            Payment amount: &nbsp;
            <span>
              $
              {context.totalPrice === 0
                ? localStorage.getItem("tPrice")
                : context.totalPrice}
            </span>
          </h2>
          <button>PAY</button>
        </div>
      </div>
    </div>
  );
}

export default PayOut;
