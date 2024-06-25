import React from "react";

class App extends React.Component {
  constructor() {
    super();
    console.warn("constructor");
  }

  render() {
    return (
      <>
        <h1>Contructor life cycle method</h1>
      </>
    );
  }
}

export default App;
