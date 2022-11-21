import React from "react";
import { increment ,incrementByAmount} from "../Actions/userSlice";
import {  useDispatch } from 'react-redux'
function Adding() {
  
  const dispatch = useDispatch()
  return (
    <div>
      <button onClick={() => dispatch(increment())} style={{ fontSize: "50px",width:"50px" }}>+</button>
    </div>
  );
}

export default Adding;
