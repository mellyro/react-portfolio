import React from 'react';
import '../../index.css';

function Nav(props) {
    const tabs = ['About', 'Portfolio', 'Contact', 'Resume']
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="/">
                    Melissa Daskalantonakis
                </a>
            <div className="collapse navbar-collapse justify-content-end" id="navbarSupprtedContent">
                <ul className="navbar-nav">
                    {tabs.map(tab => (
                        <li className="nav-item" key={tab}>
                        <a
                            href={'#' + tab}
                            onClick={() => props.handlePageChange(tab)}
                            className={
                            props.currentPage === tab ? 'nav-link active' : 'nav-link'
                            }
                        >
                            {tab}
                        </a>
                        </li>
                    ))}
                </ul>
            </div>
            
        </nav>
    )
}

export default Nav;
