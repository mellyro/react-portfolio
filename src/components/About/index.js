import React, { Component } from 'react';
import coverImage from '../../assets/profile-picture/profilepic.png';

class About extends Component {
    render() {
        return (
            <section className="section-title container">
                <h1>Melissa Daskalantonakis</h1>
                <hr></hr>
                <div className="row justify-content-center">
                    <div className="col-10 section-content">
                        <img className="mt-3 mb-5 me" src={coverImage} alt="Melissa D"/>
                        <p>
                        My name is Melissa Daskalantonakis and I currently reside in Austin, Texas. I graduated from The University of Texas at Austin in 2014 with a Bachelor of Arts degree in Economics and am currently an Assistant Property Manager for commercial office buildings. I recently decided to pursue web development and have earned a certificate in full stack web development from The University of Texas at Austin with newly developed skills in JavaScript, MongoDB, Express.js, Node.js, React, MySQL, CSS, and HTML. I worked on a team of three to develop a single-page MERN application that allows users to sign-up and request for help within their community or volunteer to help someone. I am very excited to leverage my skills as part of a fast-paced, quality-driven team to build better experiences on the web. I am very interested in a position where I can continue to grow my knowledge and skills working with React.
                        </p>
                    </div>  
            </div>
        </section> 
    )}
}
export default About;

