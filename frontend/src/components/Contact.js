import React, { useState } from 'react';

const Contact = () => {
    // State to track if the form has been submitted successfully
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        const myForm = e.target;
        const formData = new FormData(myForm);

        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: new URLSearchParams(formData).toString(),
        })
        .then(() => setSubmitted(true))
        .catch((error) => alert(error));
    };

    // If the form has been submitted, show the success message
    if (submitted) {
        return (
            <section id="contact" className="section">
                <h2>Thank You!</h2>
                <p>Your message has been sent. I will get back to you shortly.</p>
            </section>
        );
    }

    // Otherwise, show the form
    return (
        <section id="contact" className="section">
            <h2>Contact Me</h2>
            {/* - We add the onSubmit handler.
              - We remove the 'action' attribute.
              - The form name and data-netlify attribute are still required.
            */}
            <form name="contact" method="POST" data-netlify="true" onSubmit={handleSubmit}>
                <input type="hidden" name="form-name" value="contact" />
                
                <input type="text" name="name" placeholder="Your Name" required />
                <input type="email" name="email" placeholder="Your Email" required />
                <textarea name="message" placeholder="Your Message" rows="6" required></textarea>
                
                <button type="submit">Send Message</button>
            </form>
        </section>
    );
};

export default Contact;