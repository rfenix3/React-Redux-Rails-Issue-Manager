import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import { increaseVote } from '../actions';
import VoteButton from './voteButton';


class IssueRow extends React.Component {
  constructor() {
    super();

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = () => {
    this.props.increaseVote(this.props.issue)
  }

    render() {
      const {issue} = this.props
      
      return(
        <tr>
          <td><Link to={`/issues/${issue.id}`}>{issue.id}</Link></td>
          <td>{issue.status}</td>
          <td>{issue.owner}</td>
          <td>{new Date(issue.created).toDateString()}</td>
          <td>{issue.effort}</td>
          <td>{issue.completionDate != null ? new Date(issue.completionDate).toDateString() : ''}</td>
          <td>{issue.title}</td>
          <td><VoteButton handleClick={this.handleClick} votes={issue.votes}/></td>
        </tr>
      )  
    }
}


export default connect(null, {increaseVote})(IssueRow);