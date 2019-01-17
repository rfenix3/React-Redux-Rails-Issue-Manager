import React, { Component } from 'react';
import IssueRow from './issueRow';
import { connect } from 'react-redux'

class IssueTable extends Component {

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
            <th>Votes</th>
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
