import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import NumInput from './NumInput';
import DateInput from './DateInput.js';

import { connect } from 'react-redux'
import { updateIssue } from '../actions';


class IssueEdit extends React.Component {
  constructor() {
    super()
    this.state = {
      issue: {
        id: '',
        title: '', 
        status: '', 
        owner: '', 
        effort: null,
        completionDate: null,
        created: '',
      },
      invalidFields: {},
    };
    this.onChange = this.onChange.bind( this); 
    this.onValidityChange = this.onValidityChange.bind(this); 
    this.handleEditSubmit = this.handleEditSubmit.bind(this);  
  }

  componentDidMount () {
    this.loadData();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.id !== this.props.id) {
      this.loadData();
    }
  }

  // convertedValue parameter is a callback value returned after changes are made on the input field
  onChange(event, convertedValue) {
    const issue = Object.assign({}, this.state.issue);
    const value = (convertedValue !== undefined) ? convertedValue : event.target.value;
    issue[event.target.name] = value;
    this.setState({ issue: issue });
  }

  onValidityChange(event, valid) {
    const invalidFields = Object.assign({}, this.state.invalidFields);
    if (!valid) {
      invalidFields[event.target.name] = true;
    } else {
      delete invalidFields[event.target.name];
    }
    this.setState({ invalidFields });
  }

  // format date into string when you load data to state
  loadData() {
    const { id } = this.props.match.params
    fetch(`/api/issues/${id}`, {
      accept: 'application/json',
    }).then(response => response.json()
    ).then((issue) => {
        issue.created = new Date(issue.created);
        issue.completionDate = issue.completionDate != null ?
        new Date(issue.completionDate) : null;
        this.setState({ issue }) //console.log(issue))
    }).catch(err => {
        console.log(err);
    });
  }
  
  handleEditSubmit(e) {
    e.preventDefault();
    // console.log('handleEditSubmit ', this.state.issue)
    this.props.updateIssue(this.state.issue);
  }

  render() {
    const issue = this.state.issue;
    const validationMessage = Object.keys(this.state.invalidFields).length === 0 ? null
    : (<div className="error">Please correct invalid fields before submitting.</div>);
    return (
      <div>
        <form className="form-style" name="issueEdit" onSubmit={this.handleEditSubmit}>
          ID: {issue.id}
          < br />
          Created: {issue.created ? issue.created.toISOString().substr(0,10) : ''}
          < br />
          Status: 
            < select name ="status" value ={issue.status} onChange ={ this.onChange} > 
              < option value ="New" > New </option >
              < option value ="Open" > Open </option >
              < option value ="Assigned" > Assigned </option >
              < option value ="Fixed" > Fixed </ option >
              < option value ="Verified" > Verified </option >
              < option value ="Closed" > Closed </option >
            </select >
            < br />
            Owner: < input name ="owner" value ={issue.owner} onChange ={ this.onChange} />
            < br />
            Effort (Hrs): < NumInput size ={5} name ="effort" value ={issue.effort} onChange ={this.onChange} />
            < br />
            Completion Date: <DateInput
              name="completionDate" value={issue.completionDate} onChange={this.onChange}
              onValidityChange={this.onValidityChange}
            />
            < br />
            Title: < input name ="title" size ={50} value ={issue.title} onChange ={this.onChange} />
            < br />
            {validationMessage}
            < button type ="submit" > Submit </ button >                     
            < Link to ="/issues" > Back to issue list </ Link >
        </ form >
      </div>
    );
  } 
}

IssueEdit.propTypes = {
  params: PropTypes.object,
};

export default connect(null,{updateIssue})(IssueEdit);

