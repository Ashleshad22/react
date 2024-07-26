import "./App.css";
import React, { useRef } from "react";
import { CommonContext } from "./CommonContext";
import Index from "./Index";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      color: "green",
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
        <Index />
      </CommonContext.Provider>
    );
  }
}
export default App;
