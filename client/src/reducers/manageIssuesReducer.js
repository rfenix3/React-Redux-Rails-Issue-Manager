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
      const newIssue = action.issue;
      newIssue.id = state.issues.length + 1;
      //debugger;
      return {
        ...state, 
        issues: [...state.issues, newIssue]
        }
    default:
        return state;
  }
}