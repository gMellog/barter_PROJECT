import React from "react";
import Input from "../Input/Input";
import ShowProducts from "../ShowProducts/ShowProducts";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProductCard from "../ProductCard/ProductCard";

export default function Searcher() {
  // const [input, setInput] = useState("");
  // const [products, setProducts] = useState([]);

  // const onChangeHandler = (userInput) => {
  //   setInput(userInput);
  // };

  // const searchClicked = async () => {
  //   if (input.trim()) {
  //     const res = await fetch("http://localhost:3001/products");
  //     const searchedProducts = await res.json();
  //     console.log(searchedProducts);
  //     setProducts(searchedProducts);
  //   }
  // };

  return (
    <Router>
      <Input />
      <Switch>
        <Route exact path="/product/:name" component={ProductCard} />
        <Route exact path="/" component={ShowProducts} />
      </Switch>
    </Router>
  );
}
