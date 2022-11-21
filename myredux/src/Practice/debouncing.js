import React, { useState, useEffect } from "react";

function Debouncing() {
  const [value, setValue] = useState("");
  const [valueSet, setValueSet] = useState("");

  function debounce(func, timeout) {
    return (...args) => {
      document.getElementById("change").disabled = true;
      setTimeout(() => {
        func();
      }, timeout);
    };
  }
  function saveInput() {
    console.log("clicked");
  }

  const processChange = debounce(() => {
    document.getElementById("change").disabled = false;
    console.log("clicked");
  }, 1000);

  let counter = 0;

  function getValue() {
    console.log("we called");
  }

  function debounce2(func, timeout) {
    let timer;
    return function () {
      clearTimeout(timer);
      timer = setTimeout(() => {
        func();
      }, timeout);
    };
  }

  const processChange2 = debounce2(getValue, 1000);

  return (
    <div style={{ marginTop: "10%" }}>
      <button
        id="change"
        disabled={false}
        onClick={processChange}
        style={{
          width: "300px",
          height: "30px",

          fontSize: "20px",
          fontWeight: "bold",
        }}
      >
        click me!!
      </button>
      <input
        onChange={processChange2}
        style={{
          width: "300px",
          height: "30px",

          fontSize: "20px",
          fontWeight: "bold",
        }}
      ></input>
      <div style={{ marginTop: "5%", fontSize: "20px", fontWeight: "bold" }}>
        {valueSet}
      </div>
    </div>
  );
}

export default Debouncing;
