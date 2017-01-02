import React from 'react';
import style from './portfolio.css'
import Project from '../project/project';
import portfolio from './portfolio.json';

export default React.createClass({

  getInitialState(){
    return {
      portfolio : portfolio
    }
  },

  render() {
    let portfolio = this.state.portfolio;

    return(
    <div>
      <h1>Recent Projects</h1>
      {portfolio.projects.map((project, index)=>{
        return (<Project key={index} project={project}/>)
      })}
    </div>)
  }
});
