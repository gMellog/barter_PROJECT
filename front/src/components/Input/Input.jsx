import React, { useState } from "react";
import styles from "./Input.module.css";
import { useHistory } from "react-router-dom";
import { ReactSVG } from 'react-svg'
import iconSearch from './Vector.svg'

export default function Input() {
  const [input, setInput] = useState("");
  const history = useHistory();

  const onSearchHandler = (e) => {
    e.preventDefault();
    history.push(`/product/${input}`);
  };

  const onChangeHandler = (e) => {
    setInput(e.target.value);
  };

  return (
    <div className={`d-flex justify-content-center ${styles.searcherIndent}`}>
      <div className={`${styles.searcher} input-group mb-3`}>
        <form action="post" onChange={(e) => onSearchHandler(e)}>
          <input
            value={input}
            onChange={(e) => onChangeHandler(e)}
            className="form-control"
            placeholder=""
            
          />
          <ReactSVG className={styles.iconSharch} src={iconSearch}/>
        </form>
      </div>
    </div>
  );
}
