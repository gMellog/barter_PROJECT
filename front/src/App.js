import React from "react";

import "./App.css";
import NavMenu from "./components/NavMenu/NavMenu";
import ShowProducts from "./components/ShowProducts/ShowProducts";
import AddProduct from "./components/AddProduct/AddProduct";
import WatchProduct from "./components/WatchProduct/WatchProduct";
import ProductCarousel from "./components/ProductCarousel/ProductCarousel";

import "dotenv";
import Ad from "./components/Ad/Ad";
import Offers from "./components/Offers/Offers";

import Chat from "./components/Chat/Chat";

import { BrowserRouter as Router, Switch, Route,  } from "react-router-dom";

import ProfilePanel from "./components/ProfilePanel/ProfilePanel";
import SellerProfile from "./components/SellerProfile/SellerProfile";
import SearchResult from "./components/SearchResult/SearchResult";

function App() {
  return (
    <div className="App">
      <Router>
        <NavMenu />

        <div className="wrapperApp">
          <Switch>
            <Route exact path="/product/:name" component={SearchResult} />
            <Route exact path="/chat" component={Chat} />
            <Route exact path="/profile">
            <ProfilePanel/>
            <ShowProducts toUser={true}/>
            </Route>
            <Route exact path="/">
              <div style={{ display: "flex", flexDirection: "column" }}>
                <ProductCarousel />
                <ShowProducts/>
              </div>
            </Route>
            <Route exact path="/offers">
              <ProfilePanel />
              <Offers />
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
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
