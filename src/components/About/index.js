import React from 'react';
import coverImage from '../../assets/profile-picture/profilepic.png';

function About() {
    return (
        <section className="my-5">
            <h1 id='about'>About Me</h1>
            <img src={coverImage} style={{ width: "15%" }} alt="cover"/>
            <p>My name is Melissa Daskalantonakis. I reside in Austin, TX with my husband and two loving dogs. I graduated from The University of Texas at Austin in 2014 and I have been an Assistant Property Manager for office buildings for about 6 years now. I have decided to explore the world of web development. I find React very intriguing!</p>
        </section>
    )
}

export default About;
