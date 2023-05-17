import React, { Component } from "react";

class Produits extends Component {
  state = {
    Produits: [
      { id: 1, nom: "PC", prix: 3000 },
      { id: 2, nom: "Imprimante", prix: 500 },
      { id: 3, nom: "Souris", prix: 50 },
    ],
    newProduct: "",
  };
  handleDelete = (id) => {
    let produits = this.state.Produits.slice();
    let index = produits.findIndex((e) => e.id === id);
    produits.splice(index, 1);
    this.setState({ Produits: produits });

    console.log(index);
  };
  handleChange = (e) => {
    this.setState({ newProduct: e.target.value });
    console.log(e.target.value);
  };
  handleClick = (e) => {
    let newId = new Date().getTime();
    let newName = this.state.newProduct;
    let newPrice = 100;
    console.log(newId);
    let produits = this.state.Produits.slice();
    let newp = { id: newId, nom: newName, prix: newPrice };
    produits.push(newp);
    this.setState({ Produits: produits, newProduct: "" });
  };
  render() {
    const produits = this.state.Produits.map((element) => (
      <li>
        {element.nom} Prix: {element.prix}{" "}
        <button onClick={() => this.handleDelete(element.id)}>X</button>
      </li>
    ));
    return (
      <div>
        <ol>{produits}</ol>
        <br />
        <br />
        <input
          type="text"
          value={this.state.newProduct}
          onChange={this.handleChange}
        />{" "}
        <button onClick={this.handleClick}>Add</button>
      </div>
    );
  }
}

export default Produits;
