import React, { Component } from "react";
import Habit from "./habit";

class Habits extends Component {
  render() {
    const { habits, onIncrement, onDecrement, onDelete } = this.props;
    return habits.map((habit) => (
      <Habit
        key={habit.id}
        habit={habit}
        onIncrement={onIncrement}
        onDecrement={onDecrement}
        onDelete={onDelete}
      />
    ));
  }
}

export default Habits;
