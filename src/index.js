import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";

class ToDo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <li>
          <input type="checkbox" />
          <button onClick={this.props.ondelete}>delete</button>
          <span>
            {this.props.todo.text}
            {this.props.todo.id}
          </span>
        </li>
      </div>
    );
  }
}
let id = 0;
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: []
    };
  }
  addtodo() {
    let text = prompt("add todo text");
    this.setState({ todos: [...this.state.todos, { text: text, id: id++ }] });
  }
  deletetodo(id) {
    this.setState({ todos: this.state.todos.filter(todo => todo.id != id) });
  }
  render() {
    return (
      <div className="app">
        <button className="add" onClick={() => this.addtodo()}>
          Add
        </button>
        <ul>
          {this.state.todos.map(todo => (
            <ToDo todo={todo} ondelete={() => this.deletetodo(todo.id)} />
          ))}
        </ul>
      </div>
    );
  }
}
let rootElement = document.querySelector("#root");
ReactDOM.render(<App />, rootElement);
