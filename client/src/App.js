import React, { Component } from 'react';
import './App.css';
import IssueFilter from './components/issueFilter'
import IssueTable from './components/issueTable'
import IssueAdd from './components/issueAdd'


// const issues = [
//   {
//     id: 1, status: 'Open', owner: 'Ravan',
//     created: new Date('2016-08-15'), effort: 5, completionDate: undefined,
//     title: 'Error in console when clicking Add',
//   },
//   {
//     id: 2, status: 'Assigned', owner: 'Eddie',
//     created: new Date('2016-08-16'), effort: 14, completionDate: new Date('2016-08-30'),
//     title: 'Missing bottom border on panel',
//   },
// ];


class App extends Component {
  constructor() {
    super();
    this.state = { issues: [] };

    this.createIssue = this.createIssue.bind(this);
  }

  componentDidMount() {
    this.loadData();
  }

  loadData() {
    // setTimeout(() => {
    //   this.setState({ issues: issues });
    // }, 500);
    fetch('/api/issues', {
      accept: 'application/json',
    }).then(response => response.json())
//      .then(data => {console.log(data)  })
      .then(data => {
        this.setState({ issues: data})  
      }).catch(err => {
        console.log(err);
      });
  }
  
  createIssue(newIssue) {
    const newIssues = this.state.issues.slice();
    newIssue.id = this.state.issues.length + 1;
    newIssues.push(newIssue);
    this.setState({ issues: newIssues });
  }

  render() {
    return (
      <div>
        <h1>Issue Tracker</h1>
        < IssueFilter />
        <hr />
        <IssueTable issues={this.state.issues} />
        <hr />
        <IssueAdd createIssue={this.createIssue}/>
      </div>
    );
  }
}

export default App;