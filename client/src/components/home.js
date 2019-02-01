import React from 'react';
import { Link } from 'react-router-dom';
export default function Home() {
  return(
    <div class="App">

      <div class="right-info header">
        <h1>Welcome</h1>
      </div>
      <div class="center">
        <Link to="/issues" exact>Sign In</Link>

      </div>
    </div>

  )
}

