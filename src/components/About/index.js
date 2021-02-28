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
                        I currently reside in Austin, Texas with my husband and two loving dogs. I graduated from The University of Texas at Austin in 2014 with a Bachelor of Arts degree in Economics and I am currently an Assistant Property Manager for office buildings. I recently earned a certificate in full stack web development from The University of Texas at Austin with newly developed skills in JavaScript, React, MongoDB, Express.js, Node.js, MySQL, CSS, and HTML to name a few. For our final project, our team of three built a single-page MERN stack application that allows users to sign-up and request for help and/or volunteer to help within their community. I'm excited to leverage my skills in a fast-paced environment with a quality-driven team to help build applications with great user experience. I am very passionate about React and would love to find a position where I can continue to grow my knowledge and skills with React.
                        </p>
                    </div>  
            </div>
        </section> 
    )}
}
export default About;

