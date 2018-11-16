import React from 'react';
import { connect } from 'react-redux'

class IssueAdd extends React.Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  state = {
    owner: '',
    title: ''
  }


  handleSubmit(e) {
    e.preventDefault();
    this.props.dispatch({type: 'ADD_ISSUE', issue: this.state})


    // var form = document.forms.issueAdd;
    // this.props.createIssue({
    //   owner: form.owner.value,
    //   title: form.title.value,
    //   status: 'New',
    //   //created: new Date(),
    //   created: Date(),
    // });
    // // clear the form for the next input
    // form.owner.value = ""; form.title.value = "";
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

export default connect()(IssueAdd);
