import React from "react";
import './App.css';
import NavMenu from './components/NavMenu/NavMenu'
import Login from './components/Login/Login'
//Роутеры
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <NavMenu/>
      <Switch>
          {/* Добавлять в копонент через кавычки {} */}

          <Route exact path="/login" component=''/>
          <Route exact path="/registration" component=''/>
          <Route exact path="/createAd" component=''/>
          {/* Мои обьявления */}
          <Route exact path="/myAds" component=''/>
          <Route exact path="/offers" component=''/>
          <Route exact path="/message" component=''/>
          <Route exact path="/reviews" component=''/>
          {/* Мои отзывы */}
          <Route exact path="/myReviews" component=''/>
          <Route exact path="/setting" component=''/>
          <Route exact path="/exit" component=''/>

        </Switch>
    </Router>
  );
}

export default App;
