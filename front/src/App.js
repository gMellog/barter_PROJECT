import Searcher from "./components/Searcher/Searcher";
import ShowProducts from "./components/ShowProducts/ShowProducts";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProductCard from "./components/ProductCard/ProductCard";
import AddProduct from "./components/AddProduct/AddProduct"
// import NavMenu from './components/NavMenu/NavMenu'
// import ProductCarousel from "./components/ProductCarousel/ProductCarousel"
// import CategoriesFilter from "./components/CategoriesFilter/CategoriesFilter"

function App() {
  return (
    <div className="App">
      <Router>
        {/* <NavMenu/> */}
        {/* <ProductCarousel/>
      <CategoriesFilter/>
      <Searcher/> */}
        <Switch>
          <Route exact path="/add" component={AddProduct} />

          <Route exact path="/product/:name" component={ProductCard} />
          <Route exact path="/" component={ShowProducts} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
