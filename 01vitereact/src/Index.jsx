import "./App.css";
import React, { useRef } from "react";
import { CommonContext } from "./CommonContext";

class Main extends React.Component {
  render() {
    return (
      <CommonContext.Consumer>
        <h1>Context API tut</h1>
      </CommonContext.Consumer>
    );
  }
}
export default Main;
