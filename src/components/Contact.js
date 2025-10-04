import React from 'react';
import './Contact.css';
import { FaEnvelope } from 'react-icons/fa';

function Contact() {
  return (
    <section className="contact-section">
      <div className="contact-card">
        <h2 className="contact-title">Get in Touch</h2>
        <p className="contact-subtitle">
          Have a question or want to work together? Let's connect.
        </p>

        <a href="mailto:namananime999@gmail.com" className="contact-email">
          <FaEnvelope className="email-icon" /> namananime999@gmail.com
        </a>
      </div>
    </section>
  );
}

export default Contact;
