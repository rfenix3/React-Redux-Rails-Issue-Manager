import React from 'react';
import IssueRow from './issueRow'

export default class IssueEdit extends React.Component {
  state = {
    issue: []
  }
 
  componentDidMount () {
    const { id } = this.props.match.params

    fetch(`/issues/${id}`, {
      accept: 'application/json',
      }).then(response => response.json())
      .then((data) => {
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
      </div>
    );
  } 
}



