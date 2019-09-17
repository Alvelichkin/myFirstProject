import React, { Component } from "react";

class Count extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };

    this.countMinus = this.countMinus.bind(this);
  }

  countPlus = () => {
    const { count } = this.state;
    this.setState({
      count: count + 1
    });
  };

  countMinus() {
    const { count } = this.state;
    this.setState({
      count: count - 1
    });
  }

  startCount = () => {
    const startCount = {
      count: 0
    };
    const { count } = this.state;
    this.setState({
      count: startCount.count
    });
  };

  render() {
    const { count } = this.state;
    return (
      <div>
        <button onClick={this.countPlus}>+</button>
        <button onClick={this.countMinus}>-</button>
        <button onClick={this.startCount}>Сбросить</button>
        <div>{count}</div>
      </div>
    );
  }
}

export default Count;
