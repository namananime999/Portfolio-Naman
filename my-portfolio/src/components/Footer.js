import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} MyPortfolio. All rights reserved.</p>
      <p>Made with ❤️ by [Your Name]</p>
    </footer>
  );
}

export default Footer;
