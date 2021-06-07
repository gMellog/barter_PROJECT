import React, {useEffect} from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {getAllSearchThunk} from "../../redux/actions/stuffAC"

export default function ProductCard() {
  const { name } = useParams();
  const stuffArray = useSelector((state) => state.stuffArray);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllSearchThunk(name));
  }, [name]);

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
