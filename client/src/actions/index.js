//import manageIssuesReducer from "../reducers/manageIssuesReducer";

export const createIssue = (newIssue) => {
  //id's are automatically created;
  newIssue.status = 'New';
  newIssue.created = Date();
  //console.log(newIssue);
  //console.log(dispatch);
  return dispatch => {
    return fetch('/api/issues/', {
      method: 'POST',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify({issue: newIssue}),
      })
      .then(res => res.json())
      .then(res => {
        dispatch({type: 'ADD_ISSUE', issue: res})
    })
    .catch(error => console.error('Error:', error));
  }
}

export const increaseVote = (issue) => {
  console.log('running addVote action creator...')
  const updatedVotes = {...issue}
  updatedVotes.votes = updatedVotes.votes + 1
  console.log('issue: ', issue)
  console.log('updatedVote: ', updatedVotes)
  return dispatch => {
    return fetch(`/api/issues/${issue.id}`, {
      method: "PUT",
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(updatedVotes)
      })
      .then(res => res.json())
      // .then(response => console.log("Success", JSON.stringify(response)))
      .then(issue => {
        dispatch({type: 'INCREASE_VOTE', issue:issue})
      })
    .catch(error => console.log('Error:', error));
  }
}


