import React, { useState } from 'react';
import { portfolioData } from '../data';
import { motion, AnimatePresence } from 'framer-motion';
import './Certificates.css';

const Categories = [
  'ALL',
  'CERTIFICATIONS',
  'INTERNSHIPS',
  'HACKATHONS',
  'RESEARCH',
  'COMPETITIONS',
  'ACADEMIC'
];

const Certificates = () => {
  const { certificates } = portfolioData;
  const [activeCategory, setActiveCategory] = useState('ALL');
  const filteredCerts = activeCategory === 'ALL' 
    ? certificates 
    : certificates.filter(cert => cert.category === activeCategory);

  return (
    <section id="certificates" className="certificates-section">
      <div className="container">
        <h2 className="section-title">CERTIFICATE GALLERY</h2>
        
        <div className="category-filters">
          {Categories.map(cat => (
            <button
              key={cat}
              className={`filter-btn ${activeCategory === cat ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat)}
              data-cursor="VIEW"
            >
              {cat}
            </button>
          ))}
        </div>

        <motion.div layout className="certificates-bento">
          <AnimatePresence>
            {filteredCerts.map((cert, index) => (
              <motion.div
                key={cert.title + index}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="cert-card glass-panel"
                data-cursor="OPEN"
                onClick={() => window.open(encodeURI(cert.file), '_blank', 'noopener,noreferrer')}
              >
                <div className="cert-thumb-container">
                  <div className="cert-overlay">
                    <span className="view-text">VIEW CERTIFICATE</span>
                  </div>
                  {cert.thumbnail?.endsWith('.pdf') ? (
                    <div className="cert-thumb pdf-thumb-wrapper" style={{ overflow: 'hidden', position: 'relative' }}>
                      <iframe
                        src={`${encodeURI(cert.thumbnail)}#toolbar=0&navpanes=0&scrollbar=0&view=Fit`}
                        title={cert.title}
                        className="cert-thumb"
                        style={{ width: '100%', height: '100%', border: 'none', pointerEvents: 'none' }}
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.nextSibling.style.display = 'flex';
                        }}
                      />
                      <div className="cert-fallback" style={{ display: 'none' }}>
                        <span>Certificate preview unavailable</span>
                      </div>
                    </div>
                  ) : (
                    <>
                      <img 
                        src={cert.thumbnail} 
                        alt={cert.title} 
                        className="cert-thumb"
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.nextSibling.style.display = 'flex';
                        }}
                        loading="lazy"
                      />
                      <div className="cert-fallback" style={{ display: 'none' }}>
                        <span>Certificate preview unavailable</span>
                      </div>
                    </>
                  )}
                </div>
                
                <div className="cert-info">
                  <div className="cert-cat">{cert.category}</div>
                  <h3 className="cert-title">{cert.title}</h3>
                  <div className="cert-org">{cert.organization}</div>
                  <div className="cert-date">{cert.date}</div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Certificates;
