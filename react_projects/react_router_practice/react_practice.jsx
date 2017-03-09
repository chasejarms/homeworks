import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';

// importing certain routes

import Home from './components/home';
import About from './components/about';

// testing double components

import LeftAbout from './components/about_components/left_about';
import RightAbout from './components/about_components/right_about';

const Root = ({children, left, right}) => {
  return (
    <div>
      {children}
      {left}
      {right}
    </div>
  );
};

document.addEventListener('DOMContentLoaded', () => {
  const main = document.getElementById('main');
  ReactDOM.render(<Router history={hashHistory}>
    <Route path="/" component={Root}>
      <Route path="home" component={Home}></Route>
      <Route path="about" components={{left: LeftAbout, right: RightAbout}}></Route>
    </Route>
  </Router>, main);
});
