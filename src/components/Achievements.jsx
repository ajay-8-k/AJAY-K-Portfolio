import React, { useState } from 'react';
import { portfolioData } from '../data';
import { motion } from 'framer-motion';
import { Award, BookOpen, Trophy, ExternalLink } from 'lucide-react';
import './Achievements.css';

const Achievements = () => {
  const { hackathons, research, achievements, timeline, certificates } = portfolioData;

  const openCertificate = (certId) => {
    if (!certId) return;
    const cert = certificates.find(c => c.id === certId);
    if (cert && cert.file) {
      window.open(encodeURI(cert.file), '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <section id="achievements" className="achievements-section">
      <div className="container">
        <h2 className="section-title">ACHIEVEMENTS</h2>
        
        {/* Research Featured Section */}
        {research.map((res, idx) => (
          <motion.div 
            key={idx}
            className="research-card glass-panel"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <div className="res-icon">
              <BookOpen size={40} />
            </div>
            <div className="res-content">
              <h3 className="res-title text-gradient">{res.title}</h3>
              <div className="res-meta">
                <span className="res-conf">{res.conference}</span>
                <span className="res-date">{res.date}</span>
              </div>
              <p className="res-fullconf">{res.fullConference}</p>
              <div className="res-details">
                <div><strong>Role:</strong> {res.role}</div>
                <div><strong>Institution:</strong> {res.institution}</div>
                <div><strong>ISBN:</strong> {res.isbn}</div>
              </div>
              
              <button 
                className="btn btn-primary mt-20"
                onClick={() => openCertificate(res.certId)}
                data-cursor="OPEN"
              >
                <ExternalLink size={16} /> VIEW CERTIFICATE
              </button>
            </div>
          </motion.div>
        ))}

        {/* Other Featured Achievements */ }
        {achievements.map((ach, idx) => (
          <motion.div 
            key={'ach-'+idx}
            className="research-card glass-panel"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <div className="res-icon">
              <Trophy size={40} />
            </div>
            <div className="res-content">
              <h3 className="res-title text-gradient">{ach.title}</h3>
              <div className="res-meta">
                <span className="res-conf">{ach.theme}</span>
                <span className="res-date">{ach.date}</span>
              </div>
              <div className="res-details mt-10">
                <div><strong>Institution:</strong> {ach.institution}</div>
              </div>
              
              <button 
                className="btn btn-primary mt-20"
                onClick={() => openCertificate(ach.certId)}
                data-cursor="OPEN"
              >
                <ExternalLink size={16} /> VIEW CERTIFICATE
              </button>
            </div>
          </motion.div>
        ))}

        {/* Hackathons & Competitions */}
        <div className="achievements-grid mt-40">
          <div className="achievements-column">
            <h3 className="sub-title"><Trophy size={20} /> HACKATHONS</h3>
            <div className="timeline-container">
              {hackathons.map((hack, idx) => (
                <motion.div 
                  key={idx}
                  className="timeline-item"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                >
                  <div className="timeline-dot"></div>
                  <div className="timeline-content glass-panel small-padding">
                    <h4 className="ach-title">{hack.title}</h4>
                    {hack.date && <div className="ach-date">{hack.date}</div>}
                    <div className="ach-details">
                      {hack.role && <div><strong>Role:</strong> {hack.role}</div>}
                      {hack.team && <div><strong>Team:</strong> {hack.team}</div>}
                      {hack.organizer && <div><strong>Organizer:</strong> {hack.organizer}</div>}
                      {hack.achievement && <div><strong>Achievement:</strong> {hack.achievement}</div>}
                      {hack.organization && <div><strong>Organization:</strong> {hack.organization}</div>}
                    </div>
                    {hack.certId && (
                      <button 
                        className="btn btn-secondary btn-sm mt-10"
                        onClick={() => openCertificate(hack.certId)}
                        data-cursor="OPEN"
                      >
                        VIEW CERTIFICATE
                      </button>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="achievements-column">
            <h3 className="sub-title"><Award size={20} /> TIMELINE</h3>
            <div className="mini-timeline">
              {timeline.map((item, idx) => (
                <motion.div 
                  key={idx}
                  className="mini-timeline-item"
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: idx * 0.05 }}
                  data-cursor="VIEW"
                >
                  <div className="mt-date text-gradient">{item.date}</div>
                  <div className="mt-event">{item.event}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

      </div>

    </section>
  );
};

export default Achievements;
