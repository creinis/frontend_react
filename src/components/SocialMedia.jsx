import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faFacebookF, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const SocialMedia = () => (
  <div className="app__social">
    <div className="social-icon linkedin">
      <a href="https://www.linkedin.com/in/carlosreinis/" target="_blank" rel="noopener noreferrer" alt="LinkedIn">
        <FontAwesomeIcon icon={faLinkedin} />
      </a>
    </div>
    <div className="social-icon github">
      <a href="https://github.com/Sinier-Dev-Tech/" target="_blank" rel="noopener noreferrer" alt="GitHub">
        <FontAwesomeIcon icon={faGithub} />
      </a>
    </div>
    <div className="social-icon facebook">
      <a href="https://www.facebook.com/CarlosReinis/" target="_blank" rel="noopener noreferrer" alt="Facebook">
        <FontAwesomeIcon icon={faFacebookF} />
      </a>
    </div>
    <div className="social-icon instagram">
      <a href="https://www.instagram.com/carlosreinis/" target="_blank" rel="noopener noreferrer" alt="Instagram">
        <FontAwesomeIcon icon={faInstagram} />
      </a>
    </div>
    <div className="social-icon whatsapp">
      <a href="https://whatsapp.com" target="_blank" rel="noopener noreferrer" alt="WhatsApp">
        <FontAwesomeIcon icon={faWhatsapp} />
      </a>
    </div>
  </div>
);

export default SocialMedia;
