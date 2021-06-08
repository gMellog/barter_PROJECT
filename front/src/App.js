import Searcher from "./components/Searcher/Searcher";

import React, { useEffect, useState } from "react";

import "./App.css";
import NavMenu from "./components/NavMenu/NavMenu";
import ShowProducts from "./components/ShowProducts/ShowProducts";
import ProductCard from "./components/ProductCard/ProductCard";
import AddProduct from "./components/AddProduct/AddProduct";
import WatchProduct from "./components/WatchProduct/WatchProduct"
import OfferProduct from "./components/OfferProduct/OfferProduct";
import ProductCarousel from "./components/ProductCarousel/ProductCarousel";
import CategoriesFilter from "./components/CategoriesFilter/CategoriesFilter";

import Message from "./components/Message/Message";
import Like from "./components/Like/Like";
import Notify from "./components/Notify/Notify";
import Ad from "./components/Ad/Ad";
import MyAd from "./components/MyAd/MyAd";
import Offers from "./components/Offers/Offers";
import styles from "./App.module.css"

import Chat from "./components/Chat/Chat";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import ProfilePanel from "./components/ProfilePanel/ProfilePanel";
import SearchResult from "./components/SearchResult/SearchResult";



function App() {
  return (
    <div className="App">
         <Router>
      {/* <Chat/> */}
        {/* <ProductCarousel/> */}
      {/* <CategoriesFilter/> */}
        <NavMenu />
        <div className="wrapperApp">
          <ProfilePanel />
          <Switch>
            <Route exact path="/product/:name" component={ProductCard} />
            <Route exact path="/message/:id" component={Message} />
            <Route exact path="/notify/:id" component={Notify} />
            <Route exact path="/offers/:id" component={Offers} />
            <Route exact path="/like/:id" component={Like} />
            <Route exact path="/profile" component="" />
            <Route exact path="/" component={ShowProducts} />
            <Route exact path="/watch/:id" component={WatchProduct} />
            <Route exact path="/offer" component={OfferProduct} />
            <Route exact path="/ad/:id" component={MyAd} />
            <Route exact path="/ad" component={Ad} />
          </Switch>
            <OfferProduct/>
        </div>

        {/* <Searcher/> */}
      </Router>
    </div>
  );
}

export default App;
