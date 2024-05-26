import React, {useState} from 'react';
import './contact-form.css';

const ContactForm = () => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log('Form submitted:', formData);
    };

    return (
        <div className="cf-section">
            <form id="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor='name'>Name:*</label>
                    <input type="text" id='name' name='name'
                    value={formData.name} onchange={handleChange}/>
                </div>
                <div className="form-group">
                    <label htmlFor='email'>Email Address:*</label>
                    <input type="text" id='email' name='email'
                    value={formData.email} onchange={handleChange}/>
                </div>
                <div className="form-group">
                    <label htmlFor='subject'>Subject:*</label>
                    <input type="text" id='subject' name='subject'
                    value={formData.subject} onchange={handleChange}/>
                </div>
                <div className="form-group">
                    <label htmlFor='message'>Message:*</label>
                    <textarea  id='message' name='message' rows="6" columns="50"
                    maxLength="1000" placeholder=" Max Allowed Characters: 1000" value={formData.message} onchange={handleChange}/>
                </div>

                <button type="submit" className="btn-submit">Submit Message</button>
            
            </form>
        </div>
    )
}


export default ContactForm;