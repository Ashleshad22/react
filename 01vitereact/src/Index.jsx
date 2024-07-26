import "./App.css";
import React, { useRef } from "react";
import { CommonContext } from "./CommonContext";

class Main extends React.Component {
  render() {
    return (
      <CommonContext.Consumer>
        {({ color }) => {
          <h1>Hello this is index</h1>;
        }}
      </CommonContext.Consumer>
    );
  }
}
export default Main;
