//import React, { Component } from 'react';
import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
      <div>
        <NavLink to="/" exact>Home</NavLink>
        <span>    </span>
        <NavLink to="/issues" exact>Issues</NavLink>
        <span>    </span>
        <NavLink to="/about" exact>About</NavLink>

      </div>
  );
};

export default NavBar;

