import React, { Component } from 'react';
import Todo from  './Todo';

class Todos extends Component {

  render() {
    return (
      <div className='Todos'>
          <hr/>
          <h4>My Todos List:</h4>
          {this.props.todos.map(t => <Todo todo={t}/>)}
      </div>
    );
  }
}

export default Todos;
