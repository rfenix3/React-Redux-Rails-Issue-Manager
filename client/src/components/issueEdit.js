import React from 'react';
import IssueRow from './issueRow'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'

class IssueEdit extends React.Component {
  // state = {
  //   issue: []
  // }
  constructor() {
    super()
    this.state = {
      issue: {
        id: '',
        title: '', 
        status: '', 
        owner: '', 
        effort: '',
        completionDate: '',
        created: '',
      },
    };
    this.onChange = this.onChange.bind( this);    
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
  
  onChange( event) {
    const issue = Object.assign({}, this.state.issue)
    issue[ event.target.name] = event.target.value
    this.setState({ issue })
  }

  render() {
    const issue = this.state.issue
    return (
      <div>
        <h2>Editing this issue...</h2>
        <IssueRow key={this.state.issue.id} issue={this.state.issue} />
        <br />
        <div>
          <form>
            ID: {issue.id}
            < br />
            Created: {issue.created}
            < br />
            Status: 
              < select name =" status" value ={ issue.status} onChange ={ this.onChange} > 
                < option value =" New" > New </ option >
                < option value =" Open" > Open </ option >
                < option value =" Assigned" > Assigned </ option >
                < option value =" Fixed" > Fixed </ option >
                < option value =" Verified" > Verified </ option >
                < option value =" Closed" > Closed </ option >
              </ select >
              < br />
              Owner: < input name =" owner" value ={ issue.owner} onChange ={ this.onChange} />
              < br />
              Effort: < input size ={ 5} name =" effort" value ={ issue.effort} onChange ={ this.onChange} />
              < br />
              Completion Date: < input name =" completionDate" value ={ issue.completionDate} onChange ={ this.onChange} / >
              < br />
              Title: < input name =" title" size ={ 50} value ={ issue.title} onChange ={ this.onChange} />
              < br />
              < button type =" submit" > Submit </ button >                     
              < Link to ="/ issues" > Back to issue list </ Link >
          </ form >
        </ div >
      </div>
    );
  } 
}

const mapStateToProps = (state) => {
  return {
    issues: state.issues
  }
 }

export default connect(mapStateToProps)(IssueEdit);


