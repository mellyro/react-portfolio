import React from 'react';
import coverImage from '../../assets/profile-picture/profilepic.png';
import Jumbotron from '../Jumbotron';
import html from '../../assets/skills/html.png';
import bootstrap from '../../assets/skills/bootstrap.png';
import css from '../../assets/skills/css.png';
import github from '../../assets/skills/github.png';
import handlebars from '../../assets/skills/handlebars.png';
import javascript from '../../assets/skills/javascript.png';
import mern from '../../assets/skills/mern.png';
import mongodb from '../../assets/skills/mongodb.png';
import mysql from '../../assets/skills/mysql.png';
import node from '../../assets/skills/nodejs.png';
import react from '../../assets/skills/react.png';
import '../../index.css';


const About = () => (
    <div>
        <Jumbotron phrase="From PM to Web Dev" subtitle="The story of my transition from Property Manager to Web Developer" />
        <h3>About Me</h3>
        <hr />
        <div className="row">
            <div className="col-md-6 aboutSections">
                <img src={coverImage} style={{ width: "40%" }} alt="cover"/>
            </div>
            <div className="col-md-6 aboutSections">
                <h4 className="bio bio1">
                My name is Melissa Daskalantonakis. I reside in Austin, TX with my husband and two loving dogs. I graduated from The University of Texas at Austin in 2014 and I have been an Assistant Property Manager for office buildings for about 6 years now. I have decided to explore the world of web development. I find React very intriguing!
                </h4>
            </div>
        </div>
        <h3 className="skills">My Skills</h3>
        <hr />
        <div className="row">
            <div className="col">
                <div className="row">
                    <div className="col-sm text-center">
                        <img src={html} style={{ width: "10%" }} alt="html" />
                        <img src={bootstrap} style={{ width: "10%" }} alt="bootstrap" />
                        <img src={css} style={{ width: "10%" }} alt="css" />
                        <img src={github} style={{ width: "10%" }} alt="github" />
                        <img src={handlebars} style={{ width: "10%" }} alt="handlebars" />
                        <img src={javascript} style={{ width: "10%" }} alt="javascript" />
                    </div>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col">
                <div className="row">
                    <div className="col-sm text-center">
                        <img src={mern} style={{ width: "10%" }} alt="mern" />
                        <img src={mongodb} style={{ width: "10%" }} alt="mongodb" />
                        <img src={mysql} style={{ width: "10%" }} alt="mysql" />
                        <img src={node} style={{ width: "10%" }} alt="node" />
                        <img src={react} style={{ width: "10%" }} alt="react" />
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default About;
