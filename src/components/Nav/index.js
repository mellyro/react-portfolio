import React from 'react';

function Nav(props) {
    const tabs = ['About', 'Portfolio', 'Contact', 'Resume']
    return(
        <header className="flex-row px-1">
            <h2>
                <a data-testid="link" href="/">
                    Melissa Daskalantonakis
                </a>
            </h2>
            <ul className="nav nav-tabs">
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
        </header>
    )
}

export default Nav;
