import React, { Component } from 'react';

class Project extends Component {

  handleClickDelete(e) {
    /* Note: This is callback to the parent's (App.js) addNewProject method: */
    this.props.deleteProject(this.props.project);
  }

  render() {
    return (
      <div>
          <span className='Project'>{this.props.project.id} - {this.props.project.title} - {this.props.project.category}</span>
          <button onClick={e => this.handleClickDelete(e)}>Delete Project</button>
      </div>
    );
  }
}

export default Project;
