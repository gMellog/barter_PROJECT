import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllStuffThunk } from "../../redux/actions/stuffAC";
import style from './style.module.css'

import {
  Link
} from "react-router-dom";

export default function ShowProducts() {
  const stuffArray = useSelector((state) => state.stuffArray);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log('PRODUCTS');
    dispatch(getAllStuffThunk());
  }, []);

  console.log(stuffArray);

  return (
    <div className={style.wrapper}>
      <div className={style.products}>
        {stuffArray.map((stuff) => (
          <>
            <div className={style.product} >
              <Link to={`/watch/${stuff.id}`}>
                
                <img src={stuff.photoUrl[0]} alt="" />
                <div key={stuff.id}>
                  <h3>{stuff.name}</h3>
                </div>
              </Link>
            </div>
          </>
        ))}
      </div>
    </div>
  );
}
