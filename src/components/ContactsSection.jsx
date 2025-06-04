// components/ContactSection.jsx
import React from 'react';

const ContactsSection = ({ sectionRef }) => (
  <section id="contact" ref={sectionRef} className="section contact" aria-label="Contact Section">
    <h2 tabIndex={0}>Contact Us</h2>
    <form className="contact-form" aria-label="Contact Form" onSubmit={e => e.preventDefault()}>
      <input type="text" placeholder="Name" aria-label="Name" required />
      <input type="email" placeholder="Email" aria-label="Email" required />
      <textarea placeholder="Message" aria-label="Message" required></textarea>
      <button type="submit" aria-label="Send Message">Send</button>
    </form>
  </section>
);

export default ContactsSection;