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
                        My name is Melissa Daskalantonakis. I reside in Austin, TX with my husband and two loving dogs. I graduated from The University of Texas at Austin in 2014 and I have been an Assistant Property Manager for office buildings for about 6 years now. I have decided to explore the world of web development. I find React very intriguing!
                        </p>
                    </div>  
            </div>
        </section> 
    )}
}
export default About;

