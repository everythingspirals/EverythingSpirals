import React from 'react';

export default React.createClass({

getInitialState(){
  return {
    project : null
  }
},

getSource(project){
  switch(project.sample.type){
    case 'img' :
      return (
        <a href={project.sample.link}>
          <img src={project.sample.source} className="screenshot" />
        </a>
      )
    case 'video' :
      return (
        <video className="screenshot" controls>
          Your browser does not support the video tag.
          <source src={project.sample.source} type="video/mp4" />
        </video>
      )
  }
},

componentWillMount(){
  this.setState({
    project : this.props.project
  })
},

render() {
  let project = this.state.project;

  return(
    <div className="project">
      <h3 className="page-header">{project.name}</h3>

      <div className="row">
        <div className="col-lg-6">
          {this.getSource(project)}
        </div>
      </div>

      <div className="row">
        <div className="col-lg-6">
          <section>
            <label>Description</label>
            <div>{project.description}</div>
          </section>

          <section>
            <label>Languages/Frameworks</label>
            <div>{project.stack}</div>
          </section>

          <section>
            <label>Responsibilites</label>
            <div>
              <ul>
                {project.responsibilities.map(responsibility=>{
                  return (<li>{responsibility}</li>);
                })}
              </ul>
            </div>
          </section>
        </div>
      </div>
    </div>)
  }
});
