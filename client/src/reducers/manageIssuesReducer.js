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
      console.log('increasing vote... ', action.issue )
      const updatedIssues = state.issues.map((issue) => {
        // debugger
        if (issue.id === action.issue.id) {
          action.issue.votes += 1;
          // console.log('new votes value...', action.issue)
          // debugger
          return action.issue
        } else {
          return issue
        }
      });
      // debugger
      return {...state, issues: updatedIssues, };
   
    case 'UPDATE_ISSUE':
      console.log('updating ', action.issue )
      //debugger;
      state.issues.map((issue) => {
        if (issue.id === action.issue.id) {
          issue.status = action.issue.status
          issue.owner = action.issue.owner
          issue.effort = action.issue.effort
          issue.completionDate = action.issue.completionDate
          issue.title = action.issue.title
          issue.votes = action.issue.votes
        }
      });
      return {...state, issue: action.issue}        
    default:
        return state;
  }
}