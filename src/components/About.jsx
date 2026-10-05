import React from 'react';
import { portfolioData } from '../data';
import { motion } from 'framer-motion';
import './About.css';

const About = () => {
  const { personal } = portfolioData;

  return (
    <section id="about" className="about-section">
      <div className="container">
        <h2 className="section-title">ABOUT ME</h2>
        
        <div className="about-grid">
          <motion.div 
            className="about-content glass-panel"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <p className="about-text main-text">
              {personal.description.split('.')[0]}.
            </p>
            <p className="about-text">
              {personal.description.split('.').slice(1).join('.')}
            </p>
            
            <div className="about-highlights">
              {['Java', 'C++', 'Data Structures', 'Problem Solving', 'Full Stack Development', 'Cyber Security', 'Artificial Intelligence', 'Team Leadership', 'Communication'].map((item, idx) => (
                <span key={idx} className="highlight-tag">{item}</span>
              ))}
            </div>
          </motion.div>

          <div className="about-stats">
            {personal.stats.map((stat, idx) => (
              <motion.div 
                key={idx} 
                className="stat-card glass-panel"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                data-cursor="VIEW"
              >
                <div className="stat-value text-gradient">{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
