import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAllSearchThunk } from "../../redux/actions/stuffAC";
import { Link } from "react-router-dom";
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
        <Link to={`/watch/${stuff.id}`}>
          <div key={stuff.id}>
            <img src={stuff.photoUrl[0]} alt="item_icon" />
            <h3>{stuff.name}</h3>
          </div>
        </Link>
      ))}
    </div>
  );
}
