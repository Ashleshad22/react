import React, { useState } from "react";
// import Chai from "./Chai";
// import User from "./User";
// import Student from "./Student";
// import Test from "./Test";
// import Profile from "./Profile";
import Login from "./Login";

function App() {
  // const [data, setData] = useState(null);
  // const [print, setPrint] = useState(false);
  // const [status, setStatus] = useState(true);
  // const [name, setName] = useState("");
  // const [int, setInt] = useState("");

  // function getData(val) {
  //   console.warn(val.target.value);
  //   setData(val.target.value); //value dikhane ke liye
  // }

  // function getFormData(e) {
  //   console.warn(name, int);
  //   e.preventDefault();
  // }

  return (
    <>
      {/* <Chai />
      <User />
      <Student name={name} email={"abc@gmail.com"} />
      <button onClick={() => setName("XYZ")}>Update name</button>
      <Test />
      {print ? <h1>{data}</h1> : null}
      <input type="text" onChange={getData} />
      <button onClick={() => setPrint(true)}>Print</button>
      {status ? <h1>hello world</h1> : null}
      <button onClick={() => setStatus(!status)}>Toggle</button> */}

      {/* <form onSubmit={getFormData}>
        <input
          type="text"
          placeholder="enter name" value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <br />
        <select onChange={(e) => setInt(e.target.value)}>
          <option value="">Select Option</option>
          <option>abc</option>
          <option>asd</option>
          <option>xyz</option>
        </select>
        <button type="Submit">Submit</button>
      </form> */}

      {/* <Profile /> */}
      <Login />
    </>
  );
}

export default App;
