import React, { PureComponent } from "react";
import "@fortawesome/fontawesome-free/js/all.js";

class Navbar extends PureComponent {
  render() {
    const { totalCount } = this.props;
    console.log(`navbar`);
    return (
      <>
        <div className="navbar">
          <i className="fas fa-heart navbar-logo"></i>
          <span className="navbar-name">Habit Manager</span>
          <span className="navbar-count">{totalCount}</span>
        </div>
      </>
    );
  }
}

export default Navbar;
