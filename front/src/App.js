import Searcher from "./components/Searcher/Searcher";

import React, { useEffect, useState } from "react";

import "./App.css";
import NavMenu from "./components/NavMenu/NavMenu";
import ShowProducts from "./components/ShowProducts/ShowProducts";
import ProductCard from "./components/ProductCard/ProductCard";
import AddProduct from "./components/AddProduct/AddProduct";
import WatchProduct from "./components/WatchProduct/WatchProduct";
import OfferProduct from "./components/OfferProduct/OfferProduct";
import ProductCarousel from "./components/ProductCarousel/ProductCarousel";
import CategoriesFilter from "./components/CategoriesFilter/CategoriesFilter";

import "dotenv";
import Message from "./components/Message/Message";
import Like from "./components/Like/Like";
import Notify from "./components/Notify/Notify";
import Ad from "./components/Ad/Ad";
import MyAd from "./components/MyAd/MyAd";
import Offers from "./components/Offers/Offers";
import styles from "./App.module.css";

import Chat from "./components/Chat/Chat";
import { useSelector, useDispatch } from "react-redux";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import ProfilePanel from "./components/ProfilePanel/ProfilePanel";
import SellerProfile from "./components/SellerProfile/SellerProfile";
import SearchResult from "./components/SearchResult/SearchResult";

function App() {
  const user = useSelector((state) => state.user);

  return (
    <div className="App">
      <Router>
        {/* <Chat/> */}
        {/* <ProductCarousel/> */}
        {/* <CategoriesFilter/> */}
        <NavMenu />
        <div className="wrapperApp">
          {/* <ProfilePanel /> */}
          {/* <AddProduct />
          
           */}
          <ShowProducts />
          <Switch>
            <Route exact path="/product/:name" component={ProductCard} />
            <Route exact path="/message" component={Chat} />
            <Route exact path="/notify/:id" component={Notify} />
            <Route exact path="/offers/:id" component={Offers} />
            <Route exact path="/like/:id" component={Like} />
            <Route exact path="/profile" component={ProfilePanel} />
            <Route exact path="/" component={ShowProducts} />
            <Route exact path="/offers">
              <ProfilePanel />
              <OfferProduct />
            </Route>
            <Route exact path="/ad/add">
              {" "}
              <ProfilePanel /> <AddProduct />
            </Route>
            <Route exact path="/ad">
              {" "}
              <ProfilePanel /> <Ad />
            </Route>
            <Route exact path="/watch/:id">
              {" "}
              <SellerProfile /> <WatchProduct />{" "}
            </Route>
            <Route exact path="/chat" component={Chat} />
          </Switch>
        </div>

        {/* <Searcher/> */}
      </Router>
    </div>
  );
}

export default App;
