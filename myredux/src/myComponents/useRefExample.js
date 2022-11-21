import React from "react";
function useRefExample(props) {
  console.log("prooos", props);
  const [name, setName] = React.useState("...");
  const inputRef = React.useRef(null);
  const prevNameRef = React.useRef("");

  React.useEffect(() => {
    prevNameRef.current = name;
  }, [name]);

  const handleChange = (e) => {
    setName(e.target.value);
  };

  return (
    <>
      <h1>
        My name is {name} and was {prevNameRef.current}
      </h1>
      <input ref={inputRef} value={name} onChange={handleChange} />
      <button onClick={props.handleCount()}>Focus</button>
      <h1>{props.counter}</h1>
    </>
  );
}

export default useRefExample;
