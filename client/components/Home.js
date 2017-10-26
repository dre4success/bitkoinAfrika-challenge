import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
class Home extends Component {
  head() {
    return (
      <Helmet>
        <title>Home</title>
        <meta property="og:title" content="Contact App" />
      </Helmet>
    );
  }
  render() {
    return (
      <div>
        {this.head()}
        I Am Home Component
      </div>
    );
  }
}

export default Home;
