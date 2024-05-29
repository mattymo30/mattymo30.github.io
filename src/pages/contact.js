import React, {useEffect} from 'react';
import ContactForm from '../component/contact-form';
import './contact.css';

const Contact = () => {
    useEffect(() => {
        document.title = "Contact Me - Matthew Morrison";

    }, []);
    return (
        <div>
            <h1 className="title">
                Contact Me
            </h1>
            <div className='contact-div'>
                <div className='contact-form'>
                    <ContactForm/>
                </div>
            </div>
        </div>

    )
}

export default Contact;