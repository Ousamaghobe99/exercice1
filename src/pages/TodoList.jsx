import React, { Component } from "react";
export default class TodoList extends Component {
  state = {
    todoList: [
      { todo: "étudier", done: true },
      { todo: "préparer son diner", done: true },
      { todo: "faire ses prosits", done: false },
      { todo: "faire ses cources", done: false },
    ],
    newList: "",
  };

  handleChangeTask = (e) => {
    this.setState({ newList: e.target.value });
  };
  handleAddTask = () => {
      var newTodo = { todo: this.state.newList, done: false };
      var todoListCopy = this.state.todoList;
      todoListCopy.push(newTodo);
      this.setState({ todoList: todoListCopy });
      this.setState({ newList: "" });
  };
  handleCompleteTask(index) {
    var todoListCopy = this.state.todoList;
    todoListCopy[index].done = true;
    this.setState({ todoList: todoListCopy });
  }

  handleDeleteTask(index) {
    var todoListCopy = this.state.todoList;
    todoListCopy.splice(index, 1);
    this.setState({ todoList: todoListCopy });
  }

  render() {
    return (
      <div>
        <h1>Ma liste des tàches</h1>
        <div>
          <input
            type="text"
            value={this.state.newList}
            onChange={this.handleChangeTask}
          />
          <button onClick={this.handleAddTask}>Ajouter une tàche</button>
        </div>
        <ul>
          {this.state.todoList.map((e, i) => {
            return (
              <li>
                {e.todo} {e.done === true ? <span>(terminée)</span> : null}{" "}
                <button
                  onClick={() => {
                    this.handleCompleteTask(i);
                  }}
                >
                  Terminer
                </button>
                <button
                  onClick={() => {
                    this.handleDeleteTask(i);
                  }}
                >
                  Supprimer
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
