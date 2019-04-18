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
          <input
            type="checkbox"
            checked={this.props.todo.checked}
            onClick={this.props.ontoggle}
          />
          <span>{this.props.todo.text}</span> &nbsp;&nbsp;
          <button onClick={this.props.ondelete}>delete</button>
        </li>
      </div>
    );
  }
}

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      id:
        localStorage.getItem("todos") &&
        JSON.parse(localStorage.getItem("todos")).length > 0
          ? JSON.parse(localStorage.getItem("todos"))[0].id
          : 0,
      todos: localStorage.getItem("todos")
        ? JSON.parse(localStorage.getItem("todos"))
        : []
    };
  }
  addtodo() {
    let text = prompt("add todo text");
    localStorage.setItem(
      "todos",
      JSON.stringify([
        { text: text, id: this.state.id + 1, checked: false },
        ...this.state.todos
      ])
    );
    this.setState({
      todos: [
        { text: text, id: this.state.id + 1, checked: false },
        ...this.state.todos
      ]
    });
    this.setState({ id: this.state.id + 1 });
  }
  deletetodo(id) {
    localStorage.setItem(
      "todos",
      JSON.stringify(this.state.todos.filter(todo => todo.id != id))
    );
    this.setState({ todos: this.state.todos.filter(todo => todo.id != id) });
  }
  toogletodo(id) {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id != id) {
          return todo;
        } else {
          return { id: todo.id, text: todo.text, checked: !todo.checked };
        }
      })
    });
    localStorage.setItem(
      "todos",
      JSON.stringify(
        this.state.todos.map(todo => {
          if (todo.id != id) {
            return todo;
          } else {
            return { id: todo.id, text: todo.text, checked: !todo.checked };
          }
        })
      )
    );
  }
  render() {
    return (
      <div className="app">
        <div className="header">
          <span className="total">
            Total : {this.state.todos.length}, Unchecked :{" "}
            {this.state.todos.filter(todo => !todo.checked).length}
          </span>
          <button className="add" onClick={() => this.addtodo()}>
            Add
          </button>
        </div>
        <div className="content">
          <ul>
            {this.state.todos.map(todo => (
              <ToDo
                todo={todo}
                ontoggle={() => this.toogletodo(todo.id)}
                ondelete={() => this.deletetodo(todo.id)}
              />
            ))}
          </ul>
        </div>
      </div>
    );
  }
}
let rootElement = document.querySelector("#root");
ReactDOM.render(<App />, rootElement);
