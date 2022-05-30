import "../styles.css";
import Navigacija from "./navbar";
import { Route, Routes, BrowserRouter as Router, Link } from "react-router-dom";
import React, { Component } from "react";
import Roditelj from "./RoditeljHotela";

export default class Narucite extends Component {
  state = {
    ime: "",
    prez: "",
    lozinka: ""
  };
  onSubmit = (e) => {
    e.preventDefault();
    console.log("Dobro došli ", this.state.ime, " ", this.state.prez);
    document.getElementById("ispis").innerHTML =
      "Dobrodošli " + this.state.ime + " " + this.state.prez;
  };
  render() {
    return (
      <div>
        <form>
          <input
            placeholder="Ime"
            value={this.state.ime}
            onChange={(e) => this.setState({ ime: e.target.value })}
          />
          <input
            placeholder="Prezime"
            value={this.state.prez}
            onChange={(e) => this.setState({ prez: e.target.value })}
          />
          <input
            placeholder="Lozinka"
            value={this.state.lozinka}
            onChange={(e) => this.setState({ lozinka: e.target.value })}
          />
          <button onClick={(e) => this.onSubmit(e)}>Potvrdi</button>
        </form>
        <div id="ispis"></div>
        <br />
        <Roditelj />
      </div>
    );
  }
}
