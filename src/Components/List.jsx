import React, { Component } from "react";

class TodoList extends Component {
  render() {
    // const data = this.props.data;
    // const title = this.props.title;

    const { data, title } = this.props;

    return (
      <div>
        <h3>{title}</h3>
        <ul>
          {data.map((item, index) => (
            <li key={index}>{item.value}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default TodoList;
