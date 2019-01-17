import React, { Component } from 'react';
import './App.css';
import Home from './components/home'
import About from './components/about'
import IssueFilter from './components/issueFilter'
import IssueTable from './components/issueTable'
import IssueAdd from './components/issueAdd'
import IssueEdit from './components/issueEdit'
import NavBar from './components/NavBar'
import { Redirect, Route, withRouter } from 'react-router';
import { BrowserRouter as Router } from 'react-router-dom';

import { connect } from 'react-redux'


class App extends Component {
  constructor() {
    super();
    this.createIssue = this.createIssue.bind(this);
  }

  componentDidMount() {
    this.loadData();
  }

  loadData() {
    fetch('/api/issues', {
      accept: 'application/json',
    }).then(response => response.json())
//      .then(data => {console.log(data)  })
      .then(data => {
        this.props.dispatch({type: 'LOAD_ISSUES', issues: data})
        
//        this.setState({ issues: data})  
      }).catch(err => {
        console.log(err);
      });
  }
  
  createIssue(newIssue, dispatch) {
    //id's are automatically created;
    newIssue.status = 'New';
    newIssue.created = Date();
    //console.log(newIssue);
    //console.log(dispatch);
    console.log('C')

    fetch('/api/issues/', {
      method: 'POST',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify({issue: newIssue}),
      })
      .then(res => res.json())
      //.then(response => console.log('Success:', JSON.stringify(response)))
      .then(res => {
        dispatch({type: 'ADD_ISSUE', issue: res})
      })
      .catch(error => console.error('Error:', error));
      // debugger;
  }


  render() {
    return (
      <Router>
        <div>
          <NavBar />
          <h1>React-Redux-Rails Issue Manager</h1>
          < IssueFilter />
          <hr />
          <IssueAdd createIssue={this.createIssue}/>
          <hr />
          <Route exact path="/" component={Home} />
          <Route exact path="/issues" component={IssueTable} />
          <Route path="/issues/:id" component={IssueEdit} />
          <Route path='/about' component={About} />
        </div>
      </Router>
    );
  }
}

export default connect()(App);