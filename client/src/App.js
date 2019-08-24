import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.scss";
import Navbar from "./components/Navbar";
import Characters from "./components/Characters";
import Comics from "./components/Comics";
import Context from "./components/Context";
import ComicDetails from "./components/ComicDetails";
import HeroComponent from "./components/HeroComponent";
import Creator from "./components/Creators";
import Events from "./components/Events";
import EventsDetails from "./components/EventsDetails";
import CreatorComics from "./components/CreatorsComics";
import Cart from "./components/Cart";
import SignIn from "./components/SignIn";
import SearchResults from "./components/SearchResults";
import PayOut from "./components/PayOut";

function App() {
  const [no, setNo] = useState(0);
  let [ItemCount] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  const setCartNo = n => {
    ItemCount = ItemCount + n;
    setNo(ItemCount);
  };

  return (
    <div className="App">
      <Context.Provider
        value={{
          cartNo: no,
          setCartNo: setCartNo,
          totalPrice: totalPrice,
          setTotalPrice: setTotalPrice
        }}
      >
        <Router>
          <Navbar />
          <Switch>
            <Route path="/" exact component={Comics} />
            <Route path="/page/:pageNo" component={Comics} />
            <Route path="/comics/:id" component={ComicDetails} />
            <Route path="/characters" exact component={Characters} />
            <Route
              path="/characters/comics/:id"
              exact
              component={HeroComponent}
            />
            <Route path="/creators" exact component={Creator} />
            <Route
              path="/creators/comics/:id"
              exact
              component={CreatorComics}
            />
            <Route path="/events" exact component={Events} />
            <Route path="/events/:id" component={EventsDetails} />

            <Route path="/cart" component={Cart} />
            <Route path="/searchResults/:searchVal" component={SearchResults} />
            <Route path="/payout" component={PayOut} />
            <Route path="/signin" component={SignIn} />
          </Switch>
        </Router>
      </Context.Provider>
    </div>
  );
}

export default App;
