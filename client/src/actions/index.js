import manageIssuesReducer from "../reducers/manageIssuesReducer";

export const addVote = (issue) => {
  console.log('running addVote action creator...')
  console.log('issue parameter', issue)
  const updatedVotes = issue
  updatedVotes.votes = updatedVotes.votes + 1
  console.log('updatedVote' , updatedVotes)
  return dispatch => {
    return fetch(`/api/issues/${issue.id}`, {
      method: "PUT",
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(updatedVotes)
      })
      .then(res => res.json())
      // .then(response => console.log("Success", JSON.stringify(response)))
      .then(issue => {
        dispatch({type: 'ADD_VOTE', issue:issue})
      })
    .catch(error => console.log('Error:', error));
  }
}


