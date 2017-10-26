import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {Helmet} from 'react-helmet';

class About extends Component {
  head() {
    return (
      <Helmet>
        <title>About</title>
        <meta property="og:title" content="Contact App" />
      </Helmet>
    )
  }
  render() { 
    return (
      <div>
        {this.head()}
        Welcome to About
      </div>

    );
  }
}
 
export default About;