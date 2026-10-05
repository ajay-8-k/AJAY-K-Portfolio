import React from 'react';
import { portfolioData } from '../data';
import './Footer.css';

const Footer = () => {
  const { personal, social } = portfolioData;

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <h3>{personal.name}</h3>
            <p className="text-gradient">{personal.title}</p>
          </div>
          
          <div className="footer-links">
            <a href={social.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href={social.github} target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href={social.leetcode} target="_blank" rel="noopener noreferrer">LeetCode</a>
            <a href={social.email}>Email</a>
            <a href={social.resume} target="_blank" rel="noopener noreferrer">View Resume</a>
            <a href={social.resume} download="AJAY_K_Resume.pdf">Download Resume</a>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>"Designed & built with curiosity, code and continuous learning."</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
