import React from 'react';
import '../../index.css';

function Resume() {
    return(
        <section className="my-5">
            <h1 id="about">Resume</h1>
            <p>View my LinkedIn to see resume <a href="https://www.linkedin.com/in/melissa-daskalantonakis/">Melissa's LinkedIn</a>.</p>

            <h3>Technical Skills</h3>
                <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>React</li>
                    <li>Node</li>
                    <li>Express</li>
                    <li>MySQL, Sequelize</li>
                    <li>MongoDB, Mongoose</li>
                </ul>
        </section>
    )
}

export default Resume;
