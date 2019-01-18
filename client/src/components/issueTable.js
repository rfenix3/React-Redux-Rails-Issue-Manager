import React, { Component } from 'react';
import IssueRow from './issueRow';
import { connect } from 'react-redux'

class IssueTable extends Component {
  constructor() {
    super();
    this.sortByVotes = this.sortByVotes.bind(this);
  }

  sortByVotes = (e) => {
      e.preventDefault();
      const issues = this.props.issues
      const sorted = issues.sort((b,a)=> (a.votes-b.votes))
      console.log('sorted reached', sorted)
      this.setState((state) => {
        return {issues: sorted};
      })
  }


  render() {
    const issueRows = this.props.issues.map(issue => <IssueRow key={issue.id} issue={issue}/>)

    return (
      <table className="bordered-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Status</th>
            <th>Owner</th>
            <th>Created</th>
            <th>Effort</th>
            <th>Completion Date</th>
            <th>Title</th>
            <th><a href="x" onClick={this.sortByVotes} issues={issueRows}>Votes</a></th>
          </tr>
        </thead>
        <tbody>{issueRows}</tbody>
      </table>
    );
  }
}

const mapStateToProps = (state) => {
  // console.log(state.issues)
  return { issues: state.issues };
};

export default connect(mapStateToProps)(IssueTable);
