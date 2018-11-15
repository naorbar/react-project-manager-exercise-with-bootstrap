import React, { Component } from 'react';
import Project from './Project';

class Projects extends Component {

  deleteProject(project) {
    console.log('INSIDE Projects.JS - DELETING PROJECT: ' + project.id + '-'+ project.title + '-' + project.category);
    this.props.deleteProject(project);
  }

  render() {
    return (
      <div className='Projects'>
          <h4>My Projects:</h4>
          {this.props.projects.map(p => <Project key={p.id} project={p} deleteProject={this.deleteProject.bind(this)}/>)}
      </div>
    );
  }
}

export default Projects;
