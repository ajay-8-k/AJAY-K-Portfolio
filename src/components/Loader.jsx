import React, { useState, useEffect } from 'react';
import './Loader.css';

const Loader = ({ onLoaded }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onLoaded();
    }, 2000); // Short premium load (2s)
    
    return () => clearTimeout(timer);
  }, [onLoaded]);

  return (
    <div className="loader-container">
      <div className="loader-content">
        <h1 className="loader-text" data-text="AJAY K">AJAY K</h1>
        <div className="loader-bar-container">
          <div className="loader-bar"></div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
