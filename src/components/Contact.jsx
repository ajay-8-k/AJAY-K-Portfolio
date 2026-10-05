import React from 'react';
import { portfolioData } from '../data';
import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';
import { FaLinkedin as Linkedin, FaGithub as Github } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  const { personal, social } = portfolioData;

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <motion.div 
          className="contact-container glass-panel"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="contact-heading">LET'S BUILD SOMETHING MEANINGFUL</h2>
          
          <div className="contact-details">
            <p className="contact-email">{personal.email}</p>
            <p className="contact-location">{personal.location}</p>
          </div>
          
          <div className="contact-actions">
            <a href={social.email} className="btn btn-primary" data-cursor="CONTACT">
              <Mail size={18} /> EMAIL ME
            </a>
            <a href={social.linkedin} target="_blank" rel="noopener noreferrer" className="btn btn-secondary" data-cursor="VISIT">
              <Linkedin size={18} /> LINKEDIN
            </a>
            <a href={social.github} target="_blank" rel="noopener noreferrer" className="btn btn-secondary" data-cursor="CODE">
              <Github size={18} /> GITHUB
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
