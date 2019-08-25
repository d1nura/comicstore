import React, { useState, useContext } from "react";
import useHttp from "../hooks/http";
import axios from "axios";
import ripple from "../logos/ripple.svg";
import Context from "../components/Context";

function CartItem(props) {
  const [no, setNo] = useState(props.item.count);
  const [removeDiv, setRemoveDiv] = useState(false);
  const [data, loading] = useHttp(`/comics/${props.item.comicId}?`);
  const [load, setLoad] = useState();

  const context = useContext(Context);

  const removeCountItem = () => {
    setLoad(true);
    if (no > 1) {
      setNo(no - 1);
      context.setCartNo(context.cartNo - 1);
      // context.setCount(0);
      // props.setCartTotalNo(cartTotalNo + 1);
      axios
        .post(`/cartItem/update/${props.item.comicId}`, {
          count: no - 1
        })
        .then(res => {
          setLoad(false);
          // context.setRemove(false);
          console.log(res.data);
        })
        .catch(err => console.log("Err4" + err));
      // localStorage.setItem("cartNo", localStorage.getItem("cartNo") - 1);
    } else {
      setNo(1);
      setLoad(false);
    }
  };
  const addCountItem = () => {
    setLoad(true);
    setNo(no + 1);
    context.setCartNo(context.cartNo + 1);
    // console.log(context.cartNo + i);
    axios
      .post(`/cartItem/update/${props.item.comicId}`, {
        count: no + 1
      })
      .then(res => {
        setLoad(false);
        // context.setRemove(e.tartget.innerText);
        console.log(res.data);
      })
      .catch(err => console.log("Err4" + err));
    // localStorage.setItem("cartNo", localStorage.setItem("cartNo"));
  };

  const deleteItem = () => {
    setNo(0);
    setLoad(true);

    axios
      .delete(`/cartItem/${props.item.comicId}`)
      .then(res => {
        console.log(res.data);
        setLoad(false);
        setRemoveDiv(true);
        // context.setRemove(true);
      })
      .catch(err => console.log(err));
    context.setCartNo(context.cartNo - no);
  };

  const details = () => {
    return (
      <div
        id="cartRows"
        className={load ? "blur" : ""}
        style={removeDiv ? { display: "none" } : {}}
      >
        <div id="smallCoverPic">
          <img
            src={`${data.results[0].thumbnail.path}/portrait_medium.jpg`}
            alt="comic cover"
          />
        </div>

        <p id="itemTitle">{data.results[0].title}</p>

        <div id="btnSet">
          <button disabled={load} onClick={removeCountItem}>
            -
          </button>
          <p id="btnSetP">
            {load ? <img id="ripple" alt="loading.." src={ripple} /> : no}
          </p>
          <button disabled={load} onClick={addCountItem}>
            +
          </button>
        </div>
        <div id="priceTag">
          {/* className={showTag ? "showTag" : ""} */}
          <p>
            $
            <span>
              {data.results[0].prices[0].price !== 0
                ? parseFloat(data.results[0].prices[0].price * no).toFixed(2)
                : 3.99 * no}
            </span>
          </p>
          <button id="delete" onClick={deleteItem}>
            remove
          </button>
        </div>
      </div>
    );
  };

  if (data && !loading) {
    data.results[0].prices[0].price !== 0
      ? props.setPrice(data.results[0].prices[0].price * no)
      : props.setPrice(3.99 * no);
    return details();
  } else {
    return (
      <div>
        <img alt="loading..." src={ripple} />
      </div>
    );
  }
}

export default CartItem;
