import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { X, ZoomIn, ZoomOut, Maximize, ExternalLink, Download } from 'lucide-react';
import './CertificateViewer.css';

const CertificateViewer = ({ cert, onClose }) => {
  const [scale, setScale] = useState(1);

  // Close on ESC
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  // Lock body scroll
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  const handleZoomIn = () => setScale(prev => Math.min(prev + 0.25, 3));
  const handleZoomOut = () => setScale(prev => Math.max(prev - 0.25, 0.5));
  const handleFit = () => setScale(1);

  const isImage = cert.file?.match(/\.(jpg|jpeg|png)$/i);
  const ext = cert.file?.split('.').pop() || 'pdf';
  const cleanFileName = `AJAY_K_${cert.title.replace(/[^a-zA-Z0-9]/g, '_').replace(/_+/g, '_')}.${ext}`;

  return (
    <motion.div 
      className="cert-viewer-overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <div className="cert-viewer-toolbar" onClick={e => e.stopPropagation()}>
        <div className="viewer-title">{cert.title}</div>
        <div className="viewer-controls">
          <button onClick={handleZoomOut} title="Zoom Out"><ZoomOut size={20} /></button>
          <button onClick={handleFit} title="Fit to Screen"><Maximize size={20} /></button>
          <button onClick={handleZoomIn} title="Zoom In"><ZoomIn size={20} /></button>
          <div className="divider"></div>
          <a href={cert.file} target="_blank" rel="noopener noreferrer" title="Open in New Tab">
            <ExternalLink size={20} />
          </a>
          <a href={cert.file} download={cleanFileName} title="Download">
            <Download size={20} />
          </a>
          <button className="close-btn" onClick={onClose} title="Close">
            <X size={24} />
          </button>
        </div>
      </div>
      
      <div className="cert-viewer-content" onClick={e => e.stopPropagation()}>
        <motion.div
          className="cert-document-container"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: scale, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          style={{ transformOrigin: 'center center' }}
        >
          {isImage ? (
            <img 
              src={encodeURI(cert.file)} 
              alt={cert.title} 
              className="cert-document"
              style={{ objectFit: 'contain' }}
            />
          ) : (
            <iframe 
              src={`${encodeURI(cert.file)}#toolbar=0&navpanes=0&scrollbar=0`}
              title={cert.title}
              className="cert-document"
              style={{ border: 'none', width: '100%', height: '100%' }}
            />
          )}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default CertificateViewer;
