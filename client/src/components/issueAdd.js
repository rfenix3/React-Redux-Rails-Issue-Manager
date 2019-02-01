import React from 'react';
import { connect } from 'react-redux'
import { createIssue } from '../actions';

class IssueAdd extends React.Component {
  constructor() {
    super();
    this.state = {
      owner: '',
      title: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleSubmit(e) {
    e.preventDefault();
    this.props.createIssue(this.state)
  }

  handleInputChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  render() {
    return (
      <div>
        <form name="issueAdd" onSubmit={this.handleSubmit}>
          <input type="text" name="owner" 
            onChange={this.handleInputChange} placeholder="Owner" />
          <input type="text" name="title" 
            onChange={this.handleInputChange} placeholder="Title" />
          <button>Add</button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    issues: state.issues
  }
 }

export default connect(mapStateToProps,{createIssue})(IssueAdd);
