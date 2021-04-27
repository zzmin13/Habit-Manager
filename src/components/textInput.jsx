import React, { Component } from "react";

class TextInput extends Component {
  state = {
    input: "",
  };
  handleChange = (event) => {
    const {
      target: { value },
    } = event;
    this.setState((current) => ({ input: value }));
  };
  handleSubmit = (event) => {
    this.props.onSubmit(this.state.input);
    this.setState((current) => ({ input: "" }));
  };
  render() {
    return (
      <>
        <input
          type="text"
          name="habitText"
          placeholder="habit"
          value={this.state.input}
          onChange={this.handleChange}
          onSubmit={this.handleSubmit}
        />
        <button onClick={this.handleSubmit}>Add</button>
      </>
    );
  }
}

export default TextInput;
