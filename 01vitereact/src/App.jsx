import "./App.css";
import React, { useRef } from "react";
import { CommonContext } from "./CommonContext";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      color: null,
      updateColor: this.updateColor,
    };
    this.updateColor = () => {
      this.setState({ color: "red" });
    };
  }
  render() {
    return (
      <CommonContext.Provider value={this.state}>
        <h1>Context API tut</h1>
      </CommonContext.Provider>
    );
  }
}
export default App;
