import React from "react";
import "./App.css";

import NavMenu from "./components/NavMenu/NavMenu";
import Searcher from "./components/Searcher/Searcher";
import ShowProducts from "./components/ShowProducts/ShowProducts";
import ProductCard from "./components/ProductCard/ProductCard";
import Loader from "./components/Loader/Loader";

//Роутерыn
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import ProfilePanel from "./components/ProfilePanel/ProfilePanel";
import SearchResult from "./components/SearchResult/SearchResult";

import "./App.css";
import Main from "./components/Main/Main";

function App() {
  return (
    <div className="App">
      <Router>
        <NavMenu />
        {/* <ProfilePanel />
        {/* <Searcher/> */}
        {/* <Switch>
          <Route exact path="/product/:name" component={ProductCard} />
          <Route exact path="/" component={ShowProducts} />
          <Route exact path="/profile" component="" />
        </Switch> */}
      </Router>
    </div>
  );
}

export default App;
