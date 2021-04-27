import React, { Component } from "react";
import Habits from "./habits";
import TextInput from "./textInput";

class Body extends Component {
  render() {
    const { habits, onIncrement, onDecrement, onDelete, onSubmit } = this.props;
    return (
      <>
        <TextInput habits={habits} onSubmit={onSubmit} />
        <Habits
          habits={habits}
          onIncrement={onIncrement}
          onDecrement={onDecrement}
          onDelete={onDelete}
        />
      </>
    );
  }
}

export default Body;
