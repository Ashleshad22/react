import React, { useState } from "react";
import User from "./User";

function App() {
  function getData() {
    alert("function as prop");
  }

  return (
    <>
      <div style={{float:'right'}}>
        <User data={getData} />
      </div>
    </>
  );
}

export default App;
