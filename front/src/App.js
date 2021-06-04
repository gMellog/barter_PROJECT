
import ProfilePanel from "./components/ProfilePanel/ProfilePanel";
import SearchResult from "./components/SearchResult/SearchResult";
import Searcher from "./components/Searcher/Searcher"
import ShowProducts from "./components/ShowProducts/ShowProducts";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProductCard from "./components/ProductCard/ProductCard";
import NavMenu from './components/NavMenu/NavMenu'
>>>>>>> test

function App() {
  return (
    <div className="App">
      <ProfilePanel />
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
