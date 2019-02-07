import React, { Component } from 'react';
import './App.css';
import Home from './components/home'
import About from './components/about'
//import IssueFilter from './components/issueFilter'
import IssueTable from './components/issueTable'
import IssueEdit from './components/issueEdit'
import NavBar from './components/NavBar'
import { Redirect, Route, withRouter } from 'react-router';
import { BrowserRouter as Router } from 'react-router-dom';
import { connect } from 'react-redux'
import logo from  './images/rf_company.png'

class App extends Component {

  componentDidMount() {
    this.loadData();
  }

  loadData() {
    fetch('/api/issues', {
      accept: 'application/json',
    }).then(response => response.json())
      .then(data => {
        this.props.dispatch({type: 'LOAD_ISSUES', issues: data})
      }).catch(err => {
        console.log(err);
      });
  }
  
  render() {
    return (
      <Router>
        <div>
          <h1 className="header">
            <span>
              <img src={logo} alt="logo" width="200" height="160"/>
            </span>
            React-Redux-Rails Issue Manager
          </h1>
          <NavBar />
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