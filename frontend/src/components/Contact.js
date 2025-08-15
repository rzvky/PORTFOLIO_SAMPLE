import React from 'react';

const Contact = () => {
    return (
        <section id="contact" className="section">
            <h2>Contact Me</h2>
            {/* - Add the data-netlify="true" attribute to the form.
              - Add a hidden input to let Netlify identify the form.
              - The "action" attribute redirects the user after submission.
            */}
            <form name="contact" method="POST" data-netlify="true" action="/#">
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