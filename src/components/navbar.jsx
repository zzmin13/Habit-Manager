import React, { Component } from "react";
import "@fortawesome/fontawesome-free/js/all.js";

class Navbar extends Component {
  render() {
    const { habits } = this.props;
    const countSum = habits.reduce((prev, curr) => prev + curr.count, 0);
    return (
      <>
        <div className="navbar">
          <i className="fas fa-heart navbar-logo"></i>
          <span className="navbar-name">Habit Manager</span>
          <span className="navbar-count">{countSum}</span>
        </div>
      </>
    );
  }
}

export default Navbar;
