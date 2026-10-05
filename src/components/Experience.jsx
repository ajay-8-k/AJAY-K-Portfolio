import React from 'react';
import { portfolioData } from '../data';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import './Experience.css';

const Experience = () => {
  const { internships, certificates } = portfolioData;

  const openCertificate = (certId) => {
    if (!certId) return;
    const cert = certificates.find(c => c.id === certId);
    if (cert && cert.file) {
      window.open(encodeURI(cert.file), '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <section id="experience" className="experience-section">
      <div className="container">
        <h2 className="section-title">EXPERIENCE</h2>
        
        <div className="timeline-container">
          {internships.map((internship, index) => (
            <motion.div 
              key={index}
              className="timeline-item"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="timeline-dot"></div>
              <div className="timeline-content glass-panel">
                <div className="exp-header">
                  <div>
                    <h3 className="exp-title">{internship.title}</h3>
                    <h4 className="exp-company text-gradient">{internship.company}</h4>
                  </div>
                  <span className="exp-date">{internship.date}</span>
                </div>
                
                <p className="exp-desc">{internship.description}</p>
                
                {internship.certificateId && (
                  <div className="exp-cert-id">
                    CERTIFICATE ID: <span>{internship.certificateId}</span>
                  </div>
                )}
                
                <button 
                  className="btn btn-secondary mt-20"
                  onClick={() => openCertificate(internship.certId)}
                  data-cursor="OPEN"
                >
                  <ExternalLink size={16} /> VIEW CERTIFICATE
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

    </section>
  );
};

export default Experience;
