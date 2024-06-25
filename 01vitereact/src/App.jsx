import React from "react";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "abc",
    };
    console.warn("constructor");
  }
  componentDidMount() {
    console.warn("componentDidMount");
  }

  render() {
    return (
      <>
        <h1>Component Did Mount {this.state.name}</h1>
        <button
          onClick={() => {
            this.setState({ name: "xyz" });
          }}
        >Update</button>
      </>
    );
  }
}

export default App;
