import React, { Component } from 'react';

import logo from '../../assets/logo.svg';

import './NavBar.css';

class NavBar extends Component {
  render() {
    return (
      <nav>
        <div className="nav-logo">
          <img src={logo} className="logo" alt="logo"/>
        </div>

        <ul className="navigation">
          <li>Browse</li>
          <li>Cart</li>
          <li>MyShelf</li>
        </ul>

        <div className="logout-link">
          <a href="#">Logout</a>
        </div>
      </nav>
    )
  }

}

export default NavBar;