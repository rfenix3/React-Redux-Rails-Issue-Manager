import React from 'react';
import IssueRow from './issueRow'
import { Link } from 'react-router-dom';

export default class IssueEdit extends React.Component {
  state = {
    issue: []
  }
 
  componentDidMount () {
    this.loadData();
  }

  loadData() {
    const { id } = this.props.match.params
    fetch(`/issues/${id}`, {
      accept: 'application/json',
    }).then(response => response.json()
    ).then((data) => {
        this.setState({ issue:data }, console.log(data))
    }).catch(err => {
        console.log(err);
    });
  }
  

  render() {
    return (
      <div>
        <h2>Editing this issue...</h2>
        <IssueRow key={this.state.issue.id} issue={this.state.issue} />
        <br />
        <button> Save </button> <Link to="/issues" exact> ...back to Issues List</Link>
      </div>
    );
  } 
}



