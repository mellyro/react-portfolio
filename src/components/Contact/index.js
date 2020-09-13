import React, { Component } from 'react';
// import { validateEmail } from '../../utils/helpers';

class ContactForm extends Component {
    render() {
        return (
            <section className="section-title container"> 
            <h1>Contact Me</h1>
            <hr></hr>
            <br />
                <div className="row justify-content-center">
                <div className="col-10 section-content">
                        <h2 className="font-weight-bold">
                        <a href="mailto:melissa.daska@gmail.com">Email: melissa.daska@gmail.com</a></h2>
                        <br />
                        <br />
                        <div>
                        <h2 className="font-weight-bold">
                        <a href="tel:5129540040">Phone: (512) 954-0040</a></h2>
                        </div>
                        <br />
                </div>
                </div>
            </section>
        );
    }
}

export default ContactForm;
