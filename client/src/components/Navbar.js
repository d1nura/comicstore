import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../logos/logo1.png";
import search from "../logos/magnifier-tool.svg";
import menu from "../logos/menu.svg";
import cancel from "../logos/cancel.svg";
import "../scss/navbar.scss";
import axios from "axios";
import Context from "../components/Context";
import SearchBar from "./SearchBar";

function Navbar() {
  const context = useContext(Context);
  const [cartItems, setCartItems] = useState();
  const [showSearch, setShowSearch] = useState(true);
  const [showMenu, setShowMenu] = useState(false);

  let count = 0;

  useEffect(() => {
    console.log("nav");
    axios
      .get("/cartItem/")
      .then(res => {
        setCartItems(
          res.data.map(item => {
            return item.count;
          })
        );
      })
      .catch(err => console.log("Err" + err));
  }, []);

  if (cartItems) {
    cartItems.map(item => {
      count = count + item;
      return count;
    });
  }

  const changeSearch = () => {
    setShowSearch(showSearch ? false : true);
  };
  const changeMenu = () => {
    setShowMenu(true);
  };
  const closeMenu = () => {
    setShowMenu(false);
  };

  return (
    <nav>
      <div id="firstLayer">
        <img id="logo" alt="logo" src={logo} />
        <div id="search-box" onClick={changeSearch}>
          <img id="search" alt="search" src={search} />
        </div>
        <div id="menu" onClick={changeMenu}>
          <img alt="menu" src={menu} />
        </div>
      </div>
      <div
        id="secondLayer"
        style={showMenu ? { transform: "translate(0)" } : {}}
      >
        <img id="closeBtn" src={cancel} alt="close" onClick={closeMenu} />
        <Link to="/">comics</Link>
        <Link to="/events">events</Link>
        <Link to="/characters">characters</Link>
        <Link to="/creators">creators</Link>
        <Link to="/cart" id="cartLink">
          cart
          <p id="cartItemCount">
            {cartItems && !context.cartNo ? count : count + context.cartNo}
          </p>
        </Link>
      </div>
      <SearchBar showSearch={showSearch} />
    </nav>
  );
}

export default Navbar;
