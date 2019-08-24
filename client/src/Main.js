import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

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

function Main() {
  return (
    <Context.Provider>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" component={Comics} />
          <Route path="/page/:pageNo" component={Comics} />
          <Route path="/comics/:id" component={ComicDetails} />
          <Route path="/characters" exact component={Characters} />
          <Route
            path="/characters/comics/:id"
            exact
            component={HeroComponent}
          />
          <Route path="/creators" exact component={Creator} />
          <Route path="/creators/comics/:id" exact component={CreatorComics} />
          <Route path="/events" exact component={Events} />
          <Route path="/events/:id" component={EventsDetails} />

          <Route path="/cart" component={Cart} />
        </Switch>
      </Router>
    </Context.Provider>
  );
}

export default Main;
