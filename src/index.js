import React from "react";
import ReactDOM from "react-dom";

let styles = {
  fontFamily: "sans-serif",
  textAlign: "center",
  position: "absolute",
  top: "0px",
  left: "0px",
  background: "red",
  width: "100%",
  height: "100%",
  color: "white"
};
class App2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <h1>{this.props.counter}</h1>
      </div>
    );
  }
}
class App extends React.Component {
  render() {
    return (
      <div className="app">
        <h1>Hello World</h1>
        <App2 counter="1" />
      </div>
    );
  }
}
let rootElement = document.querySelector("#root");
ReactDOM.render(<App />, rootElement);
