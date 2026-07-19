import React, { useEffect } from 'react';
import { Lock, ShieldCheck, Server } from 'lucide-react';
import './index.css';

const TriadCard = ({ title, description, features, imageSrc, icon: Icon, color, delay }) => {
  return (
    <div 
      className="triad-card" 
      style={{ '--card-color': color, animationDelay: `${delay}s` }}
    >
      <div className="card-image-container">
        <img src={imageSrc} alt={`${title} visualization`} className="card-image" />
        <div className="card-icon">
          <Icon size={28} />
        </div>
      </div>
      <h2>{title}</h2>
      <p>{description}</p>
      <ul className="features">
        {features.map((feature, idx) => (
          <li key={idx}>
            <ShieldCheck size={16} />
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
};

function App() {
  // Update document title for SEO
  useEffect(() => {
    document.title = "The CIA Triad | Cybersecurity Principles";
    
    // Add meta description if it doesn't exist
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.name = "description";
      document.head.appendChild(metaDescription);
    }
    metaDescription.content = "Explore the CIA Triad of Cybersecurity: Confidentiality, Integrity, and Availability. Learn the core principles of information security.";
  }, []);

  const triadData = [
    {
      title: 'Confidentiality',
      description: 'Ensuring that sensitive information is accessed only by an authorized person and kept away from those not authorized to possess them.',
      features: [
        'Data Encryption (At rest & in transit)',
        'Access Control Lists (ACLs)',
        'Multi-Factor Authentication (MFA)'
      ],
      imageSrc: '/confidentiality.png',
      icon: Lock,
      color: 'var(--accent-c)',
      delay: 0
    },
    {
      title: 'Integrity',
      description: 'Maintaining the consistency, accuracy, and trustworthiness of data over its entire life cycle. Data cannot be modified by unauthorized parties.',
      features: [
        'Cryptographic Checksums (Hashing)',
        'File Integrity Monitoring (FIM)',
        'Version Control & Backups'
      ],
      imageSrc: '/integrity.png',
      icon: ShieldCheck,
      color: 'var(--accent-i)',
      delay: 0.2
    },
    {
      title: 'Availability',
      description: 'Ensuring that information and resources are available to those who need them, when they need them, without disruption.',
      features: [
        'Redundancy & Failover Systems',
        'DDoS Mitigation Strategies',
        'Regular Hardware Maintenance'
      ],
      imageSrc: '/availability.png',
      icon: Server,
      color: 'var(--accent-a)',
      delay: 0.4
    }
  ];

  return (
    <>
      <div className="bg-gradients">
        <div className="gradient-blob blob-c"></div>
        <div className="gradient-blob blob-i"></div>
        <div className="gradient-blob blob-a"></div>
      </div>

      <div className="container">
        <header>
          <h1>The CIA Triad</h1>
          <p className="subtitle">
            The foundational model for information security development. 
            Discover the three core pillars that keep data safe in the modern digital landscape.
          </p>
        </header>

        <main className="triad-grid">
          {triadData.map((item, index) => (
            <TriadCard key={index} {...item} />
          ))}
        </main>
      </div>
    </>
  );
}

export default App;
