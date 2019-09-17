import React, { Component } from "react";
import s from "./app.component.css";
import List from "Components/List";
import Count from "Components/Count";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todoList: [
        { value: "сделать домашку по js" },
        { value: "Разобраться с реактом" },
        { value: "не сойти с ума от всего этого" }
      ]
    };
  }

  addTodo = () => {
    const newItem = { value: "Новое дело" };

    const { todoList } = this.state;
    this.setState({
      todoList: todoList.concat(newItem)
    });
  };



  render() {
    // const todoList = this.state.todoList;
    const { todoList } = this.state;

    return (
      <div>
        <button onClick={this.addTodo}>Добавить</button>
        <List data={todoList} title="Сделать за сегодняшний вечер" />
        <Count />
      </div>
    );
  }
}

export default App;
