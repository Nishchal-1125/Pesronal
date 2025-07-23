import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <div className='contact-form' id="contact">
            <div className='contact-header'>
                <span className='contact-title'>Get in Touch</span>
                <span className='contact-subtitle'>Contact Me</span>
            </div>
            
            <div className='contact-content'>
                <div className='contact-info'>
                    <div className='info-item'>
                        <h3>Let's Work Together</h3>
                        <p>I'm always interested in new opportunities and exciting projects. Feel free to reach out!</p>
                    </div>
                    <div className='info-item'>
                        <h4>Email</h4>
                        <p>nishubaluni@gmail.com</p>
                    </div>
                    <div className='info-item'>
                        <h4>Phone</h4>
                        <p>+91 9354983769</p>
                    </div>
                </div>
                
                <div className='contact-form-container'>
                    <form className='contact-form-inner'>
                        <input type="text" name="user_name" className="form-input" placeholder="Your Name" required/>
                        <input type="email" name="user_email" className="form-input" placeholder="Your Email" required/>
                        <textarea name="message" className="form-textarea" placeholder="Your Message" rows="5" required></textarea>
                        <button type="submit" className="button">Send Message</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Contact;