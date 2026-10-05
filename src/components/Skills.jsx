import React from 'react';
import { portfolioData } from '../data';
import { motion } from 'framer-motion';
import { Terminal, Lightbulb, Globe, Users } from 'lucide-react';
import './Skills.css';

const Skills = () => {
  const { skills } = portfolioData;

  const skillCategories = [
    { title: "PROGRAMMING", icon: <Terminal size={24} />, items: skills.programming },
    { title: "CORE CONCEPTS", icon: <Lightbulb size={24} />, items: skills.core },
    { title: "DOMAINS", icon: <Globe size={24} />, items: skills.domains },
    { title: "PROFESSIONAL", icon: <Users size={24} />, items: skills.professional }
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <h2 className="section-title">TECHNICAL SKILLS</h2>
        
        <div className="skills-grid">
          {skillCategories.map((category, idx) => (
            <motion.div 
              key={idx}
              className="skill-category glass-panel"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <div className="skill-header">
                <div className="skill-icon">{category.icon}</div>
                <h3 className="skill-title">{category.title}</h3>
              </div>
              
              <div className="skill-items">
                {category.items.map((item, i) => (
                  <div key={i} className="skill-item" data-cursor="VIEW">
                    <span className="skill-name">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
