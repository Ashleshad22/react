import Chai from "./Chai";
import User from "./User";
import Student from "./Student";
import React, { useState } from "react";
import Test from "./Test";

function App() {
  const [name, setName] = useState("abc");
  const [data, setData] = useState(null);
  const [print, setPrint] = useState(false);

  function getData(val) {
    console.warn(val.target.value);
    setData(val.target.value); //value dikhane ke liye
    
  }

  return (
    <>
      <Chai />
      <User />
      <Student name={name} email={"abc@gmail.com"} />
      <button
        onClick={() => {
          setName("XYZ");
        }}
      >
        Update name
      </button>
      <Test />
      {print ? <h1>{data}</h1> : null}
      <input type="text" onChange={getData} />
      <button onClick={() => setPrint(true)}>Print</button>
    </>
  );
}

export default App;
