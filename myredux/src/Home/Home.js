import React, { useState } from "react";
import Show from "../Screens/Show";
import { useSelector } from "react-redux";
import Debouncing from "../Practice/debouncing";
import MyComponent from "../myComponents/useRefExample";

function Home(props) {
  console.log(props);

  const count = useSelector((state) => state.counter);
  const [counter, setCounter] = useState(0);
  let counts = 0;
  function handleCount() {
    setCounter(counts++);
  }
  return (
    <div>
      <h1>We are counting here</h1>
      <h2>Total is : {count?.value}</h2>
      {/* <Show /> */}
      {/* <Debouncing /> */}
      <MyComponent name="rachit" surname="mishra" hancleCount={handleCount()} />
    </div>
  );
}

export default Home;
