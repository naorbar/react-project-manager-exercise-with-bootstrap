import React, { Component } from 'react';

class Todo extends Component {

  render() {
    return (
      <div className='Todo'>{this.props.todo.title} '-' {this.props.todo.userId}</div>
    );
  }
}

export default Todo;
