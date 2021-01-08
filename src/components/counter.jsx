import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    tags: [],
  };
  checkForEmptyTags() {
    if (this.state.tags.length === 0) return <p>please enter some tags!</p>;
    return (
      <ul>
        {this.state.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }
  render() {
    return <React.Fragment>{this.checkForEmptyTags}</React.Fragment>;
  }

  formatZero() {
    return this.state.count === 0 ? "Zero" : this.state.count;
  }

  changeBadgeClasses() {
    let colors = "badge m2 badge-";
    colors += this.state.count === 0 ? "warning" : "primary";
    return colors;
  }
}

export default Counter;
