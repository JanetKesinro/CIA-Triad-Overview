import React, { useEffect } from 'react';
import { Check, X } from 'lucide-react';
import './index.css';

const Badge = ({ letter, type, small }) => (
  <div className={`badge badge-${type} ${small ? 'badge-small' : ''}`}>
    {letter}
  </div>
);

function App() {
  useEffect(() => {
    document.title = "The CIA Triad | Cybersecurity Principles";
  }, []);

  return (
    <div className="container">
      
      {/* Strategies for Defense Section */}
      <section className="slide-section">
        <div className="section-header">
          <h1>Safeguarding the Triad</h1>
          <p>All security mechanisms are fundamentally designed to uphold one or more of these core pillars.</p>
        </div>

        <div className="columns-3">
          {/* Confidentiality Card */}
          <div className="card">
            <div className="card-header">
              <Badge letter="C" type="c" />
              <h3>Confidentiality</h3>
            </div>
            <div className="sub-header">Key Defenses:</div>
            <ul className="feature-list">
              <li>Strong Authentication</li>
              <li>Data Obfuscation</li>
              <li>Physical Security Measures</li>
            </ul>
          </div>

          {/* Integrity Card */}
          <div className="card">
            <div className="card-header">
              <Badge letter="I" type="i" />
              <h3>Integrity</h3>
            </div>
            <div className="sub-header">Key Defenses:</div>
            <ul className="feature-list">
              <li>File Hashing</li>
              <li>Cryptographic Signatures</li>
              <li>Activity Monitoring</li>
            </ul>
          </div>

          {/* Availability Card */}
          <div className="card">
            <div className="card-header">
              <Badge letter="A" type="a" />
              <h3>Availability</h3>
            </div>
            <div className="sub-header">Key Defenses:</div>
            <ul className="feature-list">
              <li>Data Restoration Plans</li>
              <li>Redundant Infrastructure</li>
              <li>Traffic Filtering</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Real-World Application Section */}
      <section className="slide-section">
        <div className="section-header">
          <h2>
            <Badge letter="A" type="a" small /> 
            Real-World Application: Financial Sector
          </h2>
        </div>

        <div className="comparison-grid">
          {/* Optimal Examples */}
          <div>
            <ul className="list-good feature-list">
              <li>
                <Check className="icon-success" size={24} />
                <span>Mobile banking platforms remain highly responsive.</span>
              </li>
              <li>
                <Check className="icon-success" size={24} />
                <span>Cash dispensing networks operate 24/7 without interruption.</span>
              </li>
              <li>
                <Check className="icon-success" size={24} />
                <span>Physical branches maintain consistent operational hours.</span>
              </li>
              <li>
                <Check className="icon-success" size={24} />
                <span>Automated failover systems instantly recover lost states.</span>
              </li>
            </ul>
          </div>

          {/* Critical Failures */}
          <div>
            <ul className="list-broken feature-list">
              <li>
                <X className="icon-error" size={24} />
                <span>Authentication portals experience frequent timeouts.</span>
              </li>
              <li>
                <X className="icon-error" size={24} />
                <span>Terminal networks suffer prolonged service outages.</span>
              </li>
              <li>
                <X className="icon-error" size={24} />
                <span>Core infrastructure succumbs to targeted overloads.</span>
              </li>
              <li>
                <X className="icon-error" size={24} />
                <span>Critical transaction records vanish permanently.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

    </div>
  );
}

export default App;
