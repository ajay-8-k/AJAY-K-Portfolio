import React from 'react';
import { portfolioData } from '../data';
import { motion } from 'framer-motion';
import './Education.css';

const Education = () => {
  const { education } = portfolioData;

  return (
    <section id="education" className="education-section">
      <div className="container">
        <h2 className="section-title">EDUCATION</h2>
        
        <div className="timeline-container">
          {education.map((edu, index) => (
            <motion.div 
              key={index}
              className="timeline-item"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
            >
              <div className="timeline-dot"></div>
              <div className="timeline-content glass-panel" data-cursor="VIEW">
                <div className="edu-header">
                  <h3 className="institution">{edu.institution}</h3>
                  <span className="edu-status text-gradient">{edu.status}</span>
                </div>
                
                <h4 className="degree">{edu.degree}</h4>
                
                <div className="edu-stats">
                  <div className="edu-stat">
                    <span className="label">CGPA</span>
                    <span className="value">{edu.cgpa}</span>
                  </div>
                  <div className="edu-stat">
                    <span className="label">Class XII</span>
                    <span className="value">{edu.classXII}</span>
                  </div>
                  <div className="edu-stat">
                    <span className="label">Class X</span>
                    <span className="value">{edu.classX}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
