import React from 'react';
import { Code2, Mail, Download } from 'lucide-react';
import { FaLinkedin as Linkedin, FaGithub as Github } from 'react-icons/fa';
import { portfolioData } from '../data';
import { motion } from 'framer-motion';
import './Hero.css';

const Hero = () => {
  const { personal, social } = portfolioData;

  const socialLinks = [
    { icon: <Linkedin size={20} />, url: social.linkedin, cursor: "VISIT" },
    { icon: <Github size={20} />, url: social.github, cursor: "CODE" },
    { icon: <Code2 size={20} />, url: social.leetcode, cursor: "VISIT" },
    { icon: <Mail size={20} />, url: social.email, cursor: "CONTACT" }
  ];

  return (
    <section id="home" className="hero-section">
      <div className="container hero-container">
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="eyebrow fade-in-up" style={{ animationDelay: '0.3s' }}>
            {personal.status.toUpperCase()}
          </div>
          
          <h1 className="hero-title fade-in-up" style={{ animationDelay: '0.4s' }}>
            {personal.name}
          </h1>
          
          <h2 className="hero-subtitle fade-in-up text-gradient" style={{ animationDelay: '0.5s' }}>
            {personal.title.toUpperCase()}
          </h2>
          
          <p className="hero-desc fade-in-up" style={{ animationDelay: '0.6s' }}>
            "Building practical solutions through Java, Artificial Intelligence, full-stack development, cybersecurity and problem solving."
          </p>
          
          <div className="status-badge fade-in-up" style={{ animationDelay: '0.7s' }}>
            <span className="pulse-dot"></span>
            OPEN TO LEARNING • BUILDING • COLLABORATING
          </div>
          
          <div className="hero-actions fade-in-up" style={{ animationDelay: '0.8s' }}>
            <a href="#projects" className="btn btn-primary" data-cursor="VIEW">
              VIEW MY WORK
            </a>
            <a href={social.resume} target="_blank" rel="noopener noreferrer" className="btn btn-secondary" data-cursor="OPEN">
              VIEW RESUME
            </a>
            <a href={social.resume} download="AJAY_K_Resume.pdf" className="btn btn-secondary" data-cursor="OPEN">
              <Download size={18} /> DOWNLOAD RESUME
            </a>
          </div>
          
          <div className="hero-socials fade-in-up" style={{ animationDelay: '0.9s' }}>
            {socialLinks.map((link, i) => (
              <a 
                key={i} 
                href={link.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-icon"
                data-cursor={link.cursor}
              >
                {link.icon}
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
