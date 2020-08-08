import React from 'react';
import Jumbotron from '../Jumbotron';
import Picture from '../Picture';
import '../../index.css';

function Portfolio() {  
    return(
      <section>
        <Jumbotron phrase="Front to Back." subtitle="A list of full stack, front end, and back end projects I worked on" />
        <div className="portfolio">
          <br />
          <br />
          
          <h3>Full Stack Applications</h3>
          <br />
          <div className="row">
          <div className="col-md-6">
              <Picture source={require("../../assets/projects/hearth.png")} alt="hearth" github="https://github.com/melissadaska/hearth" deployed="https://infinite-ocean-27765.herokuapp.com/" />
            </div>
            <div className="col-md-6">
              <Picture source={require("../../assets/projects/photoport.png")}alt="photo-port" github="https://github.com/melissadaska/photo-port" deployed="https://melissadaska.github.io/photo-port/" />
            </div>
            <br />
            <div className="col-md-6">
              <Picture source={require("../../assets/projects/foodfestival.png")} alt="food-festival" github="https://github.com/melissadaska/food-festival" deployed="https://melissadaska.github.io/food-festival/" />
            </div>
          </div>
          

          
            <h3 className="frontend">Front End Websites</h3>
            <div className="row">

              <div className="col-md-6">
                <Picture source={require("../../assets/projects/paperlocator.png")} alt="paper-locator" github="https://github.com/melissadaska/dm-emergency-paper-locator" deployed="https://melissadaska.github.io/dm-emergency-paper-locator/" />
              </div>
              <div className="col-md-6">
                <Picture source={require("../../assets/projects/runbuddy.png")} alt="paper-locator" github="https://github.com/melissadaska/run-buddy" deployed="https://melissadaska.github.io/run-buddy/" />
              </div>
              <div className="col-md-6">
                <Picture source={require("../../assets/projects/horiseon.png")} alt="paper-locator" github="https://github.com/melissadaska/horiseon-accessibility" deployed="https://melissadaska.github.io/horiseon-accessibility/" />
              </div>
            </div>
          </div>
      </section>        
    );
}

export default Portfolio;
