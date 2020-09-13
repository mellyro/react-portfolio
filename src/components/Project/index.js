import React from 'react';
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faExternalLinkSquareAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Projects(props) {
    return (
      <div className="cards"> 
        
        <div className="content">
        <h5 className="project-title font-weight-bold" id="card-title">{props.name}</h5>
        <div className="img-container">
          <img alt={props.name} src={props.image}/>

          </div>

              <a className="mr-3" href={props.github}><FontAwesomeIcon icon={faGithub} size="2x" alt="GitHub"/></a>
              <a href={props.deployed}><FontAwesomeIcon icon={faExternalLinkSquareAlt} size="2x" alt="Deployed link"/></a>

              <p id="tools">
                    {props.tools}
                </p>

              
              </div>

        </div>
    );
}
  
  export default Projects;
