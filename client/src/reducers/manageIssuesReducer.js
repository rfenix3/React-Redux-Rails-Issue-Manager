export default function manageIssuesReducer(
    state = { issues: []}, 
    action) 
{
  switch (action.type) {
    case 'LOAD_ISSUES':
      console.log('loading issues...', action.issues )
      return { issues: action.issues
        }
    case 'ADD_ISSUE':
      console.log('adding ', action.issue )
      return {
          issues: [...state.issues, action.issue]
      }

    case 'INCREASE_VOTE':
      console.log('adding 1 to vote... persisting. Updated thru action creator.', action.issue)
      const updatedIssuesVote = state.issues.map((issue) => {
        if (issue.id === action.issue.id) {
          return action.issue
        } else {
          return issue
        }
      });
      return {...state, issues: updatedIssuesVote, };      

    // case 'UPDATE_ISSUE':
    //   console.log('updating ', action.issue )
    //   //debugger;
    //   state.issues.map((issue) => {
    //     if (issue.id === action.issue.id) {
    //       issue.status = action.issue.status
    //       issue.owner = action.issue.owner
    //       issue.effort = action.issue.effort
    //       issue.completionDate = action.issue.completionDate
    //       issue.title = action.issue.title
    //       issue.votes = action.issue.votes
    //     }
    //   });
    //   return {...state, issue: action.issue}        
    default:
        return state;
  }
}