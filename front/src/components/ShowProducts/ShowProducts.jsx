import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllStuffThunk } from "../../redux/actions/stuffAC";

export default function ShowProducts() {
  const stuffArray = useSelector((state) => state.stuffArray);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllStuffThunk());
  }, []);

  return (
    <div>
      {stuffArray.map((stuff) => (
        <div key={stuff._id}>
          <h3>{stuff.name}</h3>
        </div>
      ))}
    </div>
  );
}
