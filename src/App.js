import React, { Component } from 'react';
import Projects from './Components/Projects';
import AddProject from './Components/AddProject';
import Todos from './Components/Todos';
import './App.css';

/* https://react-bootstrap.netlify.com/getting-started/introduction */
import Button from 'react-bootstrap/lib/Button';
import Alert from 'react-bootstrap/lib/Alert';
import ButtonToolbar from 'react-bootstrap/lib/ButtonToolbar';

import * as bs from '../node_modules/bootstrap/dist/css/bootstrap.css';

const uuidv4 = require('uuid/v4')

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      projects: [],
      todos: []
    }
  }

  componentWillMount() {
    this.getProjects();
    this.getTodosFromFakeServer();
  }

  getProjects() {
    this.setState({
      projects: [
        {
          id: uuidv4(),
          title: 'Project A',
          category: 'IT'
        },
        {
          id: uuidv4(),
          title: 'Project B',
          category: 'Finance'
        },
        {
          id: uuidv4(),
          title: 'Project C Mobile',
          category: 'IT'
        }
      ]
    })
  }

  /*
  Use a fake REST server to get a todos list from;
  I'm using:
    https://jsonplaceholder.typicode.com/
  and more specifically:
    https://jsonplaceholder.typicode.com/todos
   */
  getTodosFromFakeServer() {
    /*
    How can I make an AJAX call?
    You can use any AJAX library you like with React.
    Some popular ones are Axios, jQuery AJAX, and the browser built-in window.fetch.
    */
    /* Use fetch to create the ajax request: */
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            todos: result
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          console.log('Failed to get todos list from server: ' + error);
        }
      )
  }

  addNewProject(project) {
    console.log('INSIDE APP.JS - ADDING NEW PROJECT: ' + project.title + '-' + project.category);
    var projectsList = this.state.projects;
    project.id = uuidv4();
    projectsList.push(project);
    this.setState({ projects: projectsList });
  }

  deleteProject(project) {
    console.log('INSIDE APP.JS - DELETING PROJECT WITH ID: ' + project.id);
    var projectsList = this.state.projects.filter( function(item) {
      return item.id != project.id;
    });
    this.setState({ projects: projectsList });
  }

  render() {
    return (
      <div className="App">
          <div>My App</div>



  <Alert variant='primary'>
      Alert Here
  </Alert>

          <AddProject addNewProject={this.addNewProject.bind(this)}/>
          <Projects projects={this.state.projects} deleteProject={this.deleteProject.bind(this)}/>
          <Todos todos={this.state.todos}/>
      </div>
    );
  }
}

export default App;
