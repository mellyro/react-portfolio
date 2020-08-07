import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';
import '../../index.css';

function ContactForm() {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const { name, email, message } = formState;
    const [errorMessage, setErrorMessage] = useState('');

    function handleChange(e) {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            console.log(isValid);
            // isValid conditional statement
            if (!isValid) {
                setErrorMessage('Your email is invalid.');
            } else {
                setErrorMessage('');
            }
        } else {
            if (!e.target.value.length) {
              setErrorMessage(`${e.target.name} is required.`);
            } else {
              setErrorMessage('');
            }
          }
          console.log('errorMessage', errorMessage);

        if (!errorMessage) {
        setFormState({ ...formState, [e.target.name]: e.target.value });
        }
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);
    }

    return (
        <div id="my-contact" className="container text-center my-5">
            <h1>Contact Me</h1>

            <form id="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <div className="row">
                        <div className="col-12 col-sm-12 col-md-6 mx-auto">
                        <label htmlFor="name"></label>
                        <input type="text" defaultValue={name} onBlur={handleChange} name="name" placeholder="Name"
                        className="form-control form-control-lg"
                        />
                        </div>
                    </div>
                </div>
                <div className="form-group hidden">
                    <div className="row">
                        <div className="col-12 col-sm-12 col-md-6 mx-auto">
                            <div>
                            <label htmlFor="email"></label>
                            <input type="email" defaultValue={email} onBlur={handleChange} name="email" placeholder="Email Address" 
                            className="form-control form-control-lg"
                            />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="form-group hiddenRight">
                    <div className="row">
                        <div className="col-12 col-sm-12 col-md-6 mx-auto">
                            <div>
                            <label htmlFor="message"></label>
                            <textarea name="message" rows="5" defaultValue={message} onBlur={handleChange} placeholder="Message"
                            className="form-control form-control-lg"
                            />
                            </div>
                        </div>
                    </div>
                </div>
                

                {errorMessage && (
                    <div>
                        <p className="error-text">{errorMessage}</p>
                    </div>
                )}
                <div className="row text-md-left text-sm-center">
                    <div className="col-md-6 mx-auto">
                        <button type="submit" className="btn btn-primary mb-2 hidden">Send Message</button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default ContactForm;
