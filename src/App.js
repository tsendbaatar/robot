import React, { Component } from "react";
import "./App.css";
import { CardList } from "./components/card-list";
export default class App extends Component {
  constructor() {
    super();

    this.state = {
      robots: []
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => this.setState({ robots: data }));
  }

  render() {
    console.log(this.state.robots);
    return (
      <div className="App">
        <h1>Robot хайлт</h1>
        <CardList robots={this.state.robots} />
      </div>
    );
  }
}
