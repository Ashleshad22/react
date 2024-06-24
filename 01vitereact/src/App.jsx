import Chai from "./Chai";
import User from "./User";
import Student from "./Student"
import React,{useCallback, useState} from "react";

function App() {

  const [name, setName] = useState("abc")

  
  return (
    <>
      <Chai />
      <User />
      <Student name={name} email={"abc@gmail.com"} />
      <button onClick={()=>{setName("XYZ")}}>Update name</button>
    </>
  );
}

export default App;
