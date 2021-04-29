import React, { PureComponent } from "react";

class HabitAddForm extends PureComponent {
  inputRef = React.createRef();
  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onAdd(this.inputRef.current.value);
    this.inputRef.current.value = "";
  };
  render() {
    console.log(`habitAddForm`);
    return (
      <form className="add-form" onSubmit={this.handleSubmit}>
        <input
          ref={this.inputRef}
          className="add-input"
          type="text"
          name="habitText"
          placeholder="habit"
        />
        <button className="add-button">Add</button>
      </form>
    );
  }
}

export default HabitAddForm;
