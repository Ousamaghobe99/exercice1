import React, { Component } from "react";
import "./TodoList.css";
export default class TodoList extends Component {
  render() {
    return (
      <div>
        <h1>Ma liste des tàches</h1>
        <div>
          <input />
          <button onClick={handleAddTask}>Ajouter une tàche</button>
        </div>
        <ul>
          <li>
            <button onClick={handleCompleteTask}>Terminer</button>
            <button onClick={handleDeleteTask}>Supprimer</button>
          </li>
        </ul>
      </div>
    );
  }
}
function handleAddTask() {}
function handleCompleteTask() {}
function handleDeleteTask() {}
