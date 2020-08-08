import React from 'react';
import PropTypes from 'prop-types';
import '../../index.css';

const Jumbotron = ({ phrase, subtitle }) => (
    <div>
        <br />
        <h1 className="jumbotronMain text-center">{phrase}
        <p className="lead text-center">{subtitle}</p>
        </h1>
        <br />
        <br />
        <br />
    </div>
);

Jumbotron.propTypes = {
    phrase: PropTypes.string,
    subtitle: PropTypes.string,
};

Jumbotron.defaultProps = {
    phrase: '',
    subtitle: '',
};


export default Jumbotron;
