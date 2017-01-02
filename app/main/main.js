import React from 'react';
import Nav from '../nav/nav';
import style from './main.css';
import Portfolio from '../portfolio/portfolio';

export default React.createClass({
  render(){
    return (<div className="main">
      <nav id="navbar" className="visible-sm visible-md">
        <Nav/>
      </nav>
      <nav id="sidebar" className="hidden-sm hidden-md">
        <Nav/>
      </nav>
      <div id="content">
        <Portfolio/>
      </div>
    </div>)
  }
})
