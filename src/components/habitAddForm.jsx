import React, { memo } from "react";

const HabitAddForm = memo((props) => {
  const inputRef = React.createRef();
  const handleSubmit = (event) => {
    event.preventDefault();
    props.onAdd(inputRef.current.value);
    inputRef.current.value = "";
  };
  console.log(`habitAddForm`);
  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <input
        ref={inputRef}
        className="add-input"
        type="text"
        name="habitText"
        placeholder="habit"
      />
      <button className="add-button">Add</button>
    </form>
  );
});

export default HabitAddForm;
