import React from 'react';

export const Hero: React.FC = () => {
  return (
    <header className="hero slide-section text-center">
      <img 
        src="/cia_triad_infographic.png" 
        alt="CIA Triad Infographic representing Confidentiality, Integrity, and Availability" 
        className="hero-image"
      />
      <h1 className="hero-title mt-4">CIA Triad Cybersecurity Refresher</h1>
      <p className="hero-subtitle">
        A beginner-friendly cybersecurity awareness project that explains the <strong>CIA Triad</strong> using simple banking examples.
      </p>
      <p className="hero-text text-secondary max-w-2xl mx-auto mt-2">
        This project turns a core security concept into an easy-to-understand training resource for students, new cybersecurity professionals, and nontechnical audiences.
      </p>
    </header>
  );
};
