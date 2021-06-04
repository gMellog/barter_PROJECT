
import ProfilePanel from "./components/ProfilePanel/ProfilePanel";
import SearchResult from "./components/SearchResult/SearchResult";
import React from "react";
import './App.css';
import NavMenu from './components/NavMenu/NavMenu'

import Searcher from "./components/Searcher/Searcher"
import ShowProducts from "./components/ShowProducts/ShowProducts";
import ProductCard from "./components/ProductCard/ProductCard";

//Роутеры
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      {/* <ProfilePanel /> */}
      <Router>
      <NavMenu/>
      <Searcher/>
      <Switch>
        <Route exact path="/product/:name" component={ProductCard} />
        <Route exact path="/" component={ShowProducts} />
      </Switch>
    </Router>
    </div>
  );
}

export default App;
