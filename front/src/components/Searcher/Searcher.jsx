import React, { useState } from "react";
import styles from "./Searcher.module.css";

export default function Searcher() {
  const [input, setInput] = useState("");
  const [products, setProducts] = useState([]);

  const onChangeHandler = (userInput) => {
    setInput(userInput);
  };

  const searchClicked = async () => {
    if (input.trim()) {
      const res = await fetch("http://localhost:3001/products");
      const searchedProducts = await res.json();
      console.log(searchedProducts);
      setProducts(searchedProducts);
    }
  };

  return (
    <>
      <div className={`d-flex justify-content-center ${styles.searcherIndent}`}>
        <div className={`${styles.searcher} input-group mb-3`}>
          <input
            className="form-control"
            placeholder="Поиск..."
            value={input}
            onChange={(e) => onChangeHandler(e.target.value)}
          />
          <button className="btn btn-primary" onClick={() => searchClicked()}>
            Найти
          </button>
        </div>

        {/* View searched products*/}
      </div>

      {products && (
        <div className="d-flex ">
          {products.map((product) => (
            <div key={product._id} style={{width: '205px', height: '215px'}}>
              <img src={product.photoUrl} style={{width: '205px', height: '215px'}} alt={product.name}></img>

              {/*
          Photo
          Title
        */}
            </div>
          ))}
        </div>
      )}
    </>
  );
}
