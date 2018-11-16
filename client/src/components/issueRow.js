import React from 'react';
import { Link } from 'react-router-dom';

export default function IssueRow(props) {
  return(
  <tr>
    <td><Link to={`/issues/${props.issue.id}`}>{props.issue.id}</Link></td>
    <td>{props.issue.status}</td>
    <td>{props.issue.owner}</td>
    <td>{props.issue.created}</td>
    <td>{props.issue.effort}</td>
    <td>{props.issue.completionDate}</td>
    <td>{props.issue.title}</td>
  </tr>
  )}

