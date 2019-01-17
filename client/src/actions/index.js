export const voteButton = (issue) => {
  debugger
  return dispatch => {
    return fetch(`/api/issues/${issue.id}`, {
      method: "PUT",
      headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({issue: Object.assign(...issue, { votes: issue.votes + 1 })})
      })
      .then(res => res.json())
      .then(issue => {
        dispatch({type: 'ADD_VOTE', issue})
      })
    .catch(error => console.log('Error:', error));
    // debugger;
  }
}


