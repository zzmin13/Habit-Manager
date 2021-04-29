import React, { Component } from "react";
import "./app.css";
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
    const habits = this.state.habits.map((element) => {
      if (habit.id === element.id) {
        return {
          ...element,
          count: element.count + 1,
        };
      }
      return element;
    });
    this.setState({ habits });
  };
  handleDecrement = (habit) => {
    const habits = this.state.habits.map((element) => {
      if (habit.id === element.id) {
        return {
          ...element,
          count: element.count - 1 < 0 ? 0 : element.count - 1,
        };
      }
      return element;
    });
    this.setState({ habits });
  };
  handleDelete = (habit) => {
    const habits = this.state.habits.filter(
      (element) => element.id !== habit.id
    );
    this.setState({ habits });
  };
  handleAdd = (text) => {
    const habits = [
      ...this.state.habits,
      { id: Date.now(), name: text, count: 0 },
    ];
    this.setState({ habits });
  };
  handleReset = () => {
    const habits = [...this.state.habits].map((habit) => {
      if (habit.count !== 1) {
        return {
          ...habit,
          count: 0,
        };
      }
      return habit;
    });
    this.setState({ habits });
  };
  render() {
    console.log(`app`);
    return (
      <div>
        <Navbar
          totalCount={
            this.state.habits.filter((item) => item.count !== 0).length
          }
        />
        <Habits
          habits={this.state.habits}
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
          onDelete={this.handleDelete}
          onAdd={this.handleAdd}
          onReset={this.handleReset}
        />
      </div>
    );
  }
}

export default App;
