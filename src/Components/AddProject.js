import React, { Component } from 'react';
import { Button, Alert, Badge, Dropdown, DropdownButton, Container, Row, Col } from 'react-bootstrap';

import * as bs from '../../node_modules/bootstrap/dist/css/bootstrap.css';

var availableProjectsCategories = ['IT', 'FINANCE', 'HR', 'MOBILE'];

class AddProject extends Component {

  constructor() {
    super();
    this.state = {
        title: '',
        category: availableProjectsCategories[0]
    };
  }

  handleTitleChanged(e) {
    console.log(e.target.value);
    this.setState({title: e.target.value});
  }

  handleCategoryChanged(e) {
    console.log(e.target.value);
    this.setState({category: e.target.value});
  }

  handleCategorySelected(evtKey, evt) {
    console.log(evtKey + '-' + evt.target.text);
    this.setState({category: evt.target.text});
  }

  handleClickAdd(e) {
    /* Note: This is callback to the parent's (App.js) addNewProject method: */
    this.props.addNewProject(this.state);
  }

  render() {
    return (
      <div className='AddProject'>
        <h4>Add Project:</h4>
      
        <Container fluid='true'>
          <Row>
            <Badge variant="secondary">Title:</Badge><input type='text' onChange={e => this.handleTitleChanged(e)}/>
            <Badge variant="secondary">Category:</Badge>
            <DropdownButton variant="secondary" id="dropdown-basic-button" title={this.state.category} onSelect={(evtKey, evt) => this.handleCategorySelected(evtKey, evt)}>
                { availableProjectsCategories.map(p => <Dropdown.Item key={p} value={p}>{p}</Dropdown.Item>) }
            </DropdownButton>;
            <Button onClick={e => this.handleClickAdd(e)}>Add Project</Button>
          </Row>
        </Container>

      </div>
    );
  }
}

export default AddProject;
