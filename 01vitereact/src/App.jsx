import React, {useState} from "react";
import "./App.css";
import {Button} from 'react-bootstrap'

function App() {
  return (
    <div className="App">
      <h1>Bootstrap</h1>
      <Button onClick={()=>alert("bootstrap is working fine")}>click me</Button>
    </div>
  );
}
export default App;
