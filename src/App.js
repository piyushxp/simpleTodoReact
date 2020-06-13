import React, { Component } from 'react';
import './App.css';
import TodoList from './TodoList/todoList';
import AddTodo from './AddTodo/addTodo.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      todos: [],
    };
  }
  render() {
    return (
      <div>
        <AddTodo addTodoFn={this.addTodo} />
        <TodoList updateTodoFn={this.updateTodo} todos={this.state.todos} />
      </div>
    );
  }

  componentDidMount = () => {
    const todos = localStorage.getItem('todos');
    if (todos) {
      const savedTodos = JSON.parse(todos);
      this.setState({ todos: savedTodos });
    } else {
      console.log(' no  Tofdos');
    }
  };

  addTodo = async (todo) => {
    await this.setState({
      todos: [
        ...this.state.todos,
        {
          text: todo,
          completed: false,
        },
      ],
    });
    localStorage.setItem('todos', JSON.stringify(this.state.todos));
    console.log(localStorage.getItem('todos'));
  };

  updateTodo = async (todo) => {
    const newTodos = this.state.todos.map((_todo) => {
      if (todo === _todo)
        return {
          text: todo.text,
          completed: !todo.completed,
        };
      else return _todo;
    });
    await this.setState({ todos: newTodos });
    localStorage.setItem('todos', JSON.stringify(this.state.todos));
    console.log(newTodos);
  };
}

export default App;
