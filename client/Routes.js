import React from 'react';
import App from './App';
import Home from './components/Home';
import About from './components/About';
// import Contact from './components/Contact';
import asyncComponent from './components/lazyLoad';

const Contact = asyncComponent(() =>
  import('./components/Contact').then(module => module.default)
);

export default [
  {
    component: App,
    routes: [
      {
        component: Home,
        path: '/',
        exact: true
      },
      {
        component: About,
        path: '/about'
      },
      {
        component: Contact,
        path: '/contact'
      }
    ]
  }
];
