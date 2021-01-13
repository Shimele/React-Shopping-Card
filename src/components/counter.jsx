import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: this.props.value,
    tags: [],
  };

  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div style={{ marginbottom: 2 }}>
        <div className={this.changeBadgeClasses()}>{this.formatZero()}</div>
        <button
          onClick={this.handleIncrement}
          className="btn btn-secondary btn-sm m-2"
        >
          Increment
        </button>
        <button
          className="btn btn-danger btn-sm m-2"
          onClick={() => this.props.onDelete(this.props.id)}
        >
          delete
        </button>
      </div>
    );
  }

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
