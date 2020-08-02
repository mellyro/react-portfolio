import React from 'react';

function Portfolio() {  
    return(
        <div>
        <section className="colorlib-work" data-section="projects">
            <div className="colorlib-narrow-content">
                <div className="row">
                    <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                        <h2 className="colorlib-heading animate-box">Projects</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4 animate-box" data-animate-effect="fadeInLeft">
                        <img src={require("../../assets/projects/hearth.png")} style={{ width: "40%" }} alt="screenshot"></img>
                        <h3><a href="https://infinite-ocean-27765.herokuapp.com/">Visit Hearth</a></h3>
                        <h3><a href="https://github.com/melissadaska/hearth">Hearth GitHub Repo</a></h3>
                    </div>
                    <div className="col-md-4 animate-box" data-animate-effect="fadeInRight">
                        <img src={require("../../assets/projects/paperlocator.png")} style={{ width: "40%" }} alt="screenshot"></img>
                        <h3><a href="https://melissadaska.github.io/dm-emergency-paper-locator/">Visit Paper Locator</a></h3>
                        <h3><a href="https://github.com/melissadaska/dm-emergency-paper-locator">Paper Locator GitHub Repo</a></h3>
                    </div>
                    <div className="col-md-4 animate-box" data-animate-effect="fadeInBottom">
                        <img src={require("../../assets/projects/photoport.png")} style={{ width: "40%" }} alt="screenshot"></img>
                        <h3><a href="https://melissadaska.github.io/photo-port/">Visit Photo Port</a></h3>
                        <h3><a href="https://github.com/melissadaska/photo-port">Photo Port Repo</a></h3>
                    </div>
                    <div className="col-md-4 animate-box" data-animate-effect="fadeInBottom">
                        <img src={require("../../assets/projects/foodfestival.png")} style={{ width: "40%" }} alt="screenshot"></img>
                        <h3><a href="https://melissadaska.github.io/food-festival/">Visit Food Festival</a></h3>
                        <h3><a href="https://github.com/melissadaska/food-festival">Food Festival GitHub Repo</a></h3>
                    </div>
                    <div className="col-md-4 animate-box" data-animate-effect="fadeInTop">
                        <img src={require("../../assets/projects/runbuddy.png")} style={{ width: "40%" }} alt="screenshot"></img>
                        <h3><a href="https://melissadaska.github.io/run-buddy/">Visit Run Buddy</a></h3>
                        <h3><a href="https://github.com/melissadaska/run-buddy">Run Buddy GitHub Repo</a></h3>
                    </div>
                    <div className="col-md-4 animate-box" data-animate-effect="fadeInBottom">
                        <img src={require("../../assets/projects/horiseon.png")} style={{ width: "40%" }} alt="screenshot"></img>
                        <h3><a href="https://melissadaska.github.io/horiseon-accessibility/">Visit Horiseon</a></h3>
                        <h3><a href="https://github.com/melissadaska/horiseon-accessibility">Horiseon GitHub Repo</a></h3>
                    </div>
                </div>    
            </div>
        </section>
        </div>
    );
}

export default Portfolio;
