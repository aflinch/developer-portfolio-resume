import React, { useRef } from 'react';
import emails from '@emailjs/browser';

export const ContactForm = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        // Replace these IDs with your actual EmailJS dashboard credentials
        emails
            .sendForm('service_fewjax6', 'template_ner36l9', form.current, {
                publicKey: 'CLWXTKKTqzTuI53jc',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };

    return (
        <form ref={form} onSubmit={sendEmail}>
            <label>Name</label>
            <input type="text" name="from_first_name" />
            <input type="text" name="from_last_name" />
            <label>Email</label>
            <input type="email" name="from_email" />
            <label>Message</label>
            <textarea name="message" />
            <input type="submit" value="Send" />
        </form>
    );
};