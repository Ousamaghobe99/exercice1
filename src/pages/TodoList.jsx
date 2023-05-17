import React, { Component } from "react";
import "./TodoList.css";
export default class TodoList extends Component {
  state = {
    newList: "",
    list: ""
  };
  handleAddTask = () => {
    this.setState({ list: this.state.newList });
    document.querySelector("li").style.display = "Block";
  };
  handleChangeTask = (e) => {
    this.setState({ newList: e.target.value });
  };
  handleCompleteTask = () => {
    document.querySelector("span").innerHTML = "(Terminé)";
  };
  handleDeleteTask = () => {
    document.querySelector("li").style.display = "none";
    this.setState({ list:"" });
  };

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
         
          <li>
            {this.state.list}
            <span></span>
            <button onClick={this.handleCompleteTask}>Terminer</button>
            <button onClick={this.handleDeleteTask}>Supprimer</button>
          </li>
          
        </ul>
      </div>
    );
  }
}
