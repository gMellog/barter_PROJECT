import Searcher from "./components/Searcher/Searcher";

import ProfilePanel from "./components/ProfilePanel/ProfilePanel";
import SearchResult from "./components/SearchResult/SearchResult";
import React from "react";
import './App.css';
import NavMenu from './components/NavMenu/NavMenu'
import ShowProducts from "./components/ShowProducts/ShowProducts";
import ProductCard from "./components/ProductCard/ProductCard";
import ProductCarousel from "./components/ProductCarousel/ProductCarousel"
// import ProfilePanel from "./components/ProfilePanel/ProfilePanel";
// import SearchResult from "./components/SearchResult/SearchResult";
import WatchProduct from "./components/WatchProduct/WatchProduct"
import OfferProduct from "./components/OfferProduct/OfferProduct"
import CategoriesFilter from "./components/CategoriesFilter/CategoriesFilter"
// import Message from "./components/Message/Message";
// import Like from "./components/Like/Like";
// import Notify from "./components/Notify/Notify";
// import Ad from "./components/Ad/Ad";
// import MyAd from "./components/MyAd/MyAd";
// import Offers from "./components/Offers/Offers";



// import Chat from './components/Chat/Chat';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (

        
    <div className='wrapperApp' >

      <Router>
      {/* <Chat/> */}
        <ProductCarousel/>
      <CategoriesFilter/>
        <NavMenu />
          {/* <ProfilePanel /> */}
              <ShowProducts />
          <Switch>
            <Route exact path="/product/:name" component={ProductCard} />
            <Route exact path="/" >
            </Route>
            {/* <Route exact path="/message/:id" component={Message} /> */}
            {/* <Route exact path="/notify/:id" component={Notify} /> */}
            {/* <Route exact path="/offers/:id" component={Offers} /> */}
            {/* <Route exact path="/like/:id" component={Like} /> */}
            <Route exact path="/profile" component='' />
          <Route exact path="/" component={ShowProducts} />
          <Route exact path="/ad/:id" component={WatchProduct} />
          <Route exact path="/offer" component={OfferProduct} />
          </Switch>
            {/* <Route exact path="/ad/:id" component={MyAd} /> */}
            {/* <Route exact path="/ad" component={Ad} /> */}


        <Searcher/>
      </Router>
    </div>
  );
}

export default App;
