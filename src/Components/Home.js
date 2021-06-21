import React from "react";

import About from "./About";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import NavBar from "./NavBar";
import Contact from "./Contact";
import Service from "./Service";
import One from "./One";

const Home = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path="/" component={One} />
        <Route exact path="/about" component={About} />
        <Route exact path="/service" component={Service} />
        <Route exact path="/contact" component={Contact} />
        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
  );
};

export default Home;
