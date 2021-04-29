import React, { Component } from "react";
import Habit from "./habit";
import HabitAddForm from "./habitAddForm";
import ResetBtn from "./resetBtn";

class Habits extends Component {
  handleIncrement = (habit) => {
    this.props.onIncrement(habit);
  };
  handleDecrement = (habit) => {
    this.props.onDecrement(habit);
  };
  handleDelete = (habit) => {
    this.props.onDelete(habit);
  };
  handleAdd = (name) => {
    this.props.onAdd(name);
  };
  handleReset = () => {
    this.props.onReset();
  };
  render() {
    const { habits } = this.props;
    console.log(`habits`);
    return (
      <>
        <HabitAddForm onAdd={this.handleAdd} />
        {habits.map((habit) => (
          <Habit
            key={habit.id}
            habit={habit}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
            onDelete={this.handleDelete}
          />
        ))}
        <ResetBtn onReset={this.handleReset} />
      </>
    );
  }
}

export default Habits;
