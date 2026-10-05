import React from 'react';
import { portfolioData } from '../data';
import { motion } from 'framer-motion';
import { ExternalLink, ArrowUpRight } from 'lucide-react';
import { FaGithub as Github } from 'react-icons/fa';
import './Projects.css';

const Projects = () => {
  const { projects } = portfolioData;

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <h2 className="section-title">PROJECTS</h2>
        
        <div className="projects-masonry">
          {projects.map((project, index) => {
            // Create a staggered effect by assigning different span classes
            const isLarge = index === 0 || index === 3;
            
            return (
              <motion.div 
                key={index}
                className={`project-card glass-panel ${isLarge ? 'card-large' : 'card-standard'}`}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
                data-cursor="CODE"
                onClick={() => window.open(project.github, '_blank')}
              >
                <div className="project-content">
                  <div className="project-header">
                    <h3 className="project-title">{project.name.replace(/-/g, ' ')}</h3>
                    <div className="project-arrow">
                      <ArrowUpRight size={24} />
                    </div>
                  </div>
                  
                  <p className="project-desc">{project.description}</p>
                  
                  <div className="project-tech">
                    {project.technologies.map((tech, i) => (
                      <span key={i} className="tech-badge">{tech}</span>
                    ))}
                  </div>
                  
                  <div className="project-links" onClick={(e) => e.stopPropagation()}>
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn btn-secondary btn-sm" data-cursor="CODE">
                      <Github size={16} /> CODE
                    </a>
                    {project.demo ? (
                      <a href={project.demo} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm" data-cursor="VIEW">
                        <ExternalLink size={16} /> DEMO
                      </a>
                    ) : (
                      <span className="demo-soon">LIVE DEMO COMING SOON</span>
                    )}
                  </div>
                </div>
                
                {/* Abstract visual background for the card */}
                <div className="project-visual">
                  <div className="visual-orb"></div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
