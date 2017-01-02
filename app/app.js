import React from 'react';
import ReactDom from 'react-dom';
import {Router, Route, hashHistory, IndexRedirect, IndexRoute} from 'react-router';
import Main from './main/main';
import Portfolio from './portfolio/portfolio';
import "babel-polyfill";

ReactDom.render(
  (<Router history={hashHistory}>
    <Route path="/" component={Main}>
    </Route>
  </Router>),
  document.querySelector('#root')
);
