import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import { addVote } from '../actions';


class IssueRow extends React.Component {
  constructor() {
    super();

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = () => {
//    this.props.increaseVote(this.props.issue)
    this.props.addVote(this.props.issue)
  }

    render() {
      const {key, issue} = this.props
      return(
        <tr>
          <td><Link to={`/issues/${issue.id}`}>{issue.id}</Link></td>
          <td>{issue.status}</td>
          <td>{issue.owner}</td>
          <td>{issue.created}</td>
          <td>{issue.effort}</td>
          <td>{issue.completionDate}</td>
          <td>{issue.title}</td>
          <td><button issue={this.props.issue} onClick={this.handleClick}>{issue.votes}</button></td>
        </tr>
      )  
    }
}

const mapStateToProps = (state) => {
  return {
    issues: state.issues
  }
 }

//  const mapDispatchToProps = dispatch => {
//    return {
//      increaseVote: (issue) => dispatch({type: 'INCREASE_VOTE', issue: issue })
//    };
//  }

// export default connect(mapStateToProps, mapDispatchToProps)(IssueRow);
export default connect(mapStateToProps, {addVote})(IssueRow);