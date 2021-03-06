import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Header extends Component {
  render() { 
    return (
      <header>
        <h2><Link to="/">Contact Service</Link></h2>
        <nav>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </nav>
      </header>
    );
  }
}
 
export default Header;