import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faStackOverflow } from '@fortawesome/free-brands-svg-icons';
import '../../index.css';

function Footer() {
    return(
        <footer className="footer">
           <a href="https://www.linkedin.com/in/melissa-daskalantonakis/">
           <FontAwesomeIcon icon={faLinkedin} color="black" size="4x"/></a> 
           <a href="https://github.com/melissadaska">
           <FontAwesomeIcon icon={faGithub} color="black" size="4x"/></a> 
           <a href="https://stackoverflow.com/users/13025338/melissa-daskalantonakis">
           <FontAwesomeIcon icon={faStackOverflow} color="black" size="4x"/></a> 
        </footer>
    )
}

export default Footer;
