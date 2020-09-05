import React from 'react';
import Jumbotron from '../Jumbotron';
import Picture from '../Picture';
import '../../index.css';

function Portfolio() {  
    return(
      <section>
        <Jumbotron phrase="Front to Back." subtitle="A list of full stack, and front end projects I worked on" />
        <div className="portfolio text-center">
          <br />
          <br />
          
          <h2>Full Stack Applications</h2>
          <br />
          <div className="row">
            <div className="col-md-5">
             <h3 className="text-center">Help Exchange</h3>
              <Picture source={require("../../assets/projects/helpexchange.png")} alt="hearth" github="https://github.com/melissadaska/Help-Exchange" deployed="https://rocky-retreat-38962.herokuapp.com/about" />
            </div>
            <div className="col-md-5">
             <h3 className="text-center">Hearth</h3>
              <Picture source={require("../../assets/projects/hearth.png")} alt="hearth" github="https://github.com/melissadaska/hearth" deployed="https://infinite-ocean-27765.herokuapp.com/" />
            </div>
            <div className="col-md-5">
              <h3 className="text-center">Photo Port</h3>
              <Picture source={require("../../assets/projects/photoport.png")}alt="photo-port" github="https://github.com/melissadaska/photo-port" deployed="https://melissadaska.github.io/photo-port/" />
            </div>
            <div className="col-md-5">
              <h3 className="text-center">Food Festival</h3>
              <Picture source={require("../../assets/projects/foodfestival.png")} alt="food-festival" github="https://github.com/melissadaska/food-festival" deployed="https://melissadaska.github.io/food-festival/" />
            </div>
          </div>
          
          <br />
          
          <h2>Front End Websites</h2>
          <br />
          <div className="row">
            <div className="col-md-5">
              <h3 className="text-center">Paper Locator</h3>
              <Picture source={require("../../assets/projects/paperlocator.png")} alt="paper-locator" github="https://github.com/melissadaska/dm-emergency-paper-locator" deployed="https://melissadaska.github.io/dm-emergency-paper-locator/" />
            </div>
            <div className="col-md-5">
              <h3 className="text-center">Run Buddy</h3>
              <Picture source={require("../../assets/projects/runbuddy.png")} alt="run-buddy" github="https://github.com/melissadaska/run-buddy" deployed="https://melissadaska.github.io/run-buddy/" />
            </div>
            <div className="col-md-5">
              <h3 className="text-center">Horiseon</h3>
              <Picture source={require("../../assets/projects/horiseon.png")} alt="horiseon" github="https://github.com/melissadaska/horiseon-accessibility" deployed="https://melissadaska.github.io/horiseon-accessibility/" />
              <br />
              <br />
            </div>
          </div>
        </div>
      </section>        
    );
}

export default Portfolio;
