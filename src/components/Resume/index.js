import React from 'react';
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

function Resume() {
    return(
        <section>
            <div>
            <h3 className="col-sm text-center">Resume</h3>
                <div className="col-sm text-center">
                    <p>View my LinkedIn to see resume <a href="https://www.linkedin.com/in/melissa-daskalantonakis/">Melissa's LinkedIn</a>.</p>
                </div>
            </div>

            <br />
            <br />

            <h3 className="col-sm text-center">Technical Skills</h3>
            <br />
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
        </section>
    );
}

export default Resume;
