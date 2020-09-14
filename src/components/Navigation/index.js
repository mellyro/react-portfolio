import React from 'react';
import Nav from 'react-bootstrap/Nav';

function Navigation() {

    return (
        <Nav variant="pills" defaultActiveKey="/melissa-daska/#/about" className="row navigation" id="navigation">
            
            <Nav.Item>
                <Nav.Link eventKey="/home" href="/react-portfolio/#/home" id="hometab">
                    <h1 className="logo">M<span>D</span></h1>
                </Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/react-portfolio/#/about" className="" >About</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="/portfolio" href="/react-portfolio/#/portfolio">Portfolio</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="/contact" href="/react-portfolio/#/contact">Contact</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="/resume" href="/react-portfolio/#/resume">Resume</Nav.Link>
            </Nav.Item>
        </Nav>     

    );
};

export default Navigation;
