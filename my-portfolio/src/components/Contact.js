import React from 'react';
import './Contact.css';
import { FaEnvelope } from 'react-icons/fa';

function Contact() {
  return (
    <section className="contact-section fade-in">
      <div className="contact-container">
        <h2 className="contact-title">Get in Touch</h2>
        <p className="contact-subtitle">Have a question or want to work together? Let's connect.</p>

        <a
          href="mailto:vikhyathvicky928@gmail.com"
          className="contact-button"
        >
          <FaEnvelope className="icon" /> vikhyathvicky928@gmail.com
        </a>
      </div>
    </section>
  );
}

export default Contact;
