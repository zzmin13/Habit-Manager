import React, { Component } from "react";
import "./app.css";
import Body from "./components/body";
import Habits from "./components/habits";
import Navbar from "./components/navbar";

class App extends Component {
  state = {
    habits: [
      {
        id: 1,
        name: "Reading",
        count: 0,
      },
      {
        id: 2,
        name: "Running",
        count: 0,
      },
      {
        id: 3,
        name: "Coding",
        count: 0,
      },
    ],
  };
  handleIncrement = (habit) => {
    const habits = [...this.state.habits];
    const index = habits.indexOf(habit);
    habits[index].count++;
    this.setState({ habits });
  };
  handleDecrement = (habit) => {
    const habits = [...this.state.habits];
    const index = habits.indexOf(habit);
    const count = habits[index].count - 1;
    habits[index].count = count < 0 ? 0 : count;
    this.setState({ habits });
  };
  handleDelete = (habit) => {
    const habits = this.state.habits.filter(
      (element) => element.id !== habit.id
    );
    this.setState({ habits });
  };
  handleSubmit = (text) => {
    const newId = this.state.habits.length + 1;
    const habits = [...this.state.habits];
    habits.push({
      id: newId,
      name: text,
      count: 0,
    });
    this.setState({ habits });
  };
  render() {
    return (
      <>
        <Navbar habits={this.state.habits} />
        <Body
          habits={this.state.habits}
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
          onDelete={this.handleDelete}
          onSubmit={this.handleSubmit}
        />
      </>
    );
  }
}

export default App;
