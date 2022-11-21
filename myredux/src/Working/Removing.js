import React from "react";
import { decrement, selectCount } from "../Actions/userSlice";
import { useSelector, useDispatch } from "react-redux";

function Removing() {
  const dispatch = useDispatch();
  return (
    <div>
      <button
        onClick={() => dispatch(decrement())}
        style={{ fontSize: "50px", width: "50px", marginLeft: "15%" }}
      >
        -
      </button>
    </div>
  );
}

export default Removing;
