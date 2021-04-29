import React, { PureComponent } from "react";

class ResetBtn extends PureComponent {
  onReset = () => {
    this.props.onReset();
  };
  render() {
    console.log(`resetBtn`);
    return (
      <button className="reset-button" onClick={this.onReset}>
        Reset All
      </button>
    );
  }
}

export default ResetBtn;
