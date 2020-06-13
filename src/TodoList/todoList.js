import React, { Component } from 'react';
import TodoItem from '../TodoItem/todoItem';

class TodoList extends Component {
  render() {
    const { todos } = this.props;
    return (
      <div className="todoListContainer">
        {todos.map((_todo, _index) => {
          return <TodoItem updateTodoFn={this.updateTodo}key={_index}todo={_todo}/>;
        })}
      </div>
    );
  }
  updateTodo = (todo) => {
    this.props.updateTodoFn(todo)
  }
}

export default TodoList;
