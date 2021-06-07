import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllStuffThunk } from "../../redux/actions/stuffAC";
import style from './style.module.css'
export default function ShowProducts() {
  const stuffArray = useSelector((state) => state.stuffArray);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllStuffThunk());
  }, []);

  return (
    <div className={style.wrapper}>
      <div className={style.products}>
        {stuffArray.map((stuff) => (
          <div key={stuff._id}>
            <h3>{stuff.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
