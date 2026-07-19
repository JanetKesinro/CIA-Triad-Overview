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
      
      {/* Slide 9 Content: How do we protect each one? */}
      <section className="slide-section">
        <div className="section-header">
          <h1>How do we protect each one?</h1>
          <p>Every tool in cybersecurity protects at least one of these three.</p>
        </div>

        <div className="columns-3">
          {/* Confidentiality Card */}
          <div className="card">
            <div className="card-header">
              <Badge letter="C" type="c" />
              <h3>Confidentiality</h3>
            </div>
            <div className="sub-header">We protect it with:</div>
            <ul className="feature-list">
              <li>Passwords</li>
              <li>Encryption</li>
              <li>Locked doors</li>
            </ul>
          </div>

          {/* Integrity Card */}
          <div className="card">
            <div className="card-header">
              <Badge letter="I" type="i" />
              <h3>Integrity</h3>
            </div>
            <div className="sub-header">We protect it with:</div>
            <ul className="feature-list">
              <li>Checksums</li>
              <li>Digital signatures</li>
              <li>Audit logs</li>
            </ul>
          </div>

          {/* Availability Card */}
          <div className="card">
            <div className="card-header">
              <Badge letter="A" type="a" />
              <h3>Availability</h3>
            </div>
            <div className="sub-header">We protect it with:</div>
            <ul className="feature-list">
              <li>Backups</li>
              <li>Extra servers</li>
              <li>DDoS protection</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Slide 8 Content: Availability Example */}
      <section className="slide-section">
        <div className="section-header">
          <h2>
            <Badge letter="A" type="a" small /> 
            At the bank, this means…
          </h2>
        </div>

        <div className="comparison-grid">
          {/* Good Examples */}
          <div>
            <ul className="list-good feature-list">
              <li>
                <Check className="icon-success" size={24} />
                <span>The app loads when you open it.</span>
              </li>
              <li>
                <Check className="icon-success" size={24} />
                <span>ATMs work day and night.</span>
              </li>
              <li>
                <Check className="icon-success" size={24} />
                <span>The branch is open as scheduled.</span>
              </li>
              <li>
                <Check className="icon-success" size={24} />
                <span>Backups run if something fails.</span>
              </li>
            </ul>
          </div>

          {/* Broken Examples */}
          <div>
            <ul className="list-broken feature-list">
              <li>
                <X className="icon-error" size={24} />
                <span>App crashes when you log in.</span>
              </li>
              <li>
                <X className="icon-error" size={24} />
                <span>ATM is offline all weekend.</span>
              </li>
              <li>
                <X className="icon-error" size={24} />
                <span>Servers crash from an attack.</span>
              </li>
              <li>
                <X className="icon-error" size={24} />
                <span>No backup, so data is lost.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

    </div>
  );
}

export default App;
