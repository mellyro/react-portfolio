import React from 'react';
import coverImage from '../../assets/profile-picture/profilepic.png';
import Jumbotron from '../Jumbotron';
import '../../index.css';


const About = () => (
    <section>
        <Jumbotron phrase="From PM to Web Dev" subtitle="The story of my transition from Property Manager to Web Developer" />
        
        <div className="about">
        <br />
        <br />
        <br />
            <div className="row">
                <div className="col-md-5 aboutSections">
                    <img src={coverImage} style={{ width: "40%" }} alt="cover"/>
                </div>
                <div className="col-md-7 aboutSections">
                    <div>
                    <h2>About Me:</h2>
                    <h4 className="bio bio1">
                    My name is Melissa Daskalantonakis. I reside in Austin, TX with my husband and two loving dogs. I graduated from The University of Texas at Austin in 2014 and I have been an Assistant Property Manager for office buildings for about 6 years now. I have decided to explore the world of web development. I find React very intriguing!
                    </h4>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default About;
