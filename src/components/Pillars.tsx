import React from 'react';
import { Check, X } from 'lucide-react';

const Badge = ({ letter, type, small }: { letter: string; type: string; small?: boolean }) => (
  <div className={`badge badge-${type} ${small ? 'badge-small' : ''}`} aria-hidden="true">
    {letter}
  </div>
);

export const Pillars: React.FC = () => {
  return (
    <>
      <section className="slide-section" aria-labelledby="pillars-heading">
        <div className="section-header">
          <h2 id="pillars-heading" className="section-title">Safeguarding the Triad</h2>
          <p className="text-secondary">All security mechanisms are fundamentally designed to uphold one or more of these core pillars.</p>
        </div>

        <div className="columns-3">
          {/* Confidentiality Card */}
          <div className="card">
            <div className="card-header">
              <Badge letter="C" type="c" />
              <h3>Confidentiality</h3>
            </div>
            <p className="mb-4">Keep secrets secret.</p>
            <div className="sub-header">Security Controls:</div>
            <ul className="feature-list">
              <li>Passwords</li>
              <li>Encryption</li>
              <li>Multifactor Authentication</li>
              <li>Access Controls</li>
            </ul>
          </div>

          {/* Integrity Card */}
          <div className="card">
            <div className="card-header">
              <Badge letter="I" type="i" />
              <h3>Integrity</h3>
            </div>
            <p className="mb-4">Keep information correct.</p>
            <div className="sub-header">Security Controls:</div>
            <ul className="feature-list">
              <li>Checksums</li>
              <li>Digital Signatures</li>
              <li>Audit Logs</li>
              <li>File Integrity Monitoring</li>
            </ul>
          </div>

          {/* Availability Card */}
          <div className="card">
            <div className="card-header">
              <Badge letter="A" type="a" />
              <h3>Availability</h3>
            </div>
            <p className="mb-4">Keep systems accessible.</p>
            <div className="sub-header">Security Controls:</div>
            <ul className="feature-list">
              <li>Backups</li>
              <li>Redundancy</li>
              <li>Disaster Recovery</li>
              <li>DDoS Protection</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Real-World Application Section */}
      <section className="slide-section" aria-labelledby="scenarios-heading">
        <div className="section-header">
          <h2 id="scenarios-heading" className="section-title">
            Real-World Banking Scenarios
          </h2>
          <p className="text-secondary">What each pillar looks like in practice.</p>
        </div>

        <div className="comparison-grid">
          {/* Protected Examples */}
          <div>
            <h3 className="mb-4 text-center text-success">Protected (Success)</h3>
            <ul className="list-good feature-list">
              <li>
                <Check className="icon-success" size={24} aria-label="Success" />
                <span><strong>Confidentiality:</strong> Only the account owner can view a bank balance.</span>
              </li>
              <li>
                <Check className="icon-success" size={24} aria-label="Success" />
                <span><strong>Integrity:</strong> A transfer arrives exactly as it was sent.</span>
              </li>
              <li>
                <Check className="icon-success" size={24} aria-label="Success" />
                <span><strong>Availability:</strong> The banking app and ATMs remain operational 24/7.</span>
              </li>
            </ul>
          </div>

          {/* Compromised Examples */}
          <div>
            <h3 className="mb-4 text-center text-error">Compromised (Failure)</h3>
            <ul className="list-broken feature-list">
              <li>
                <X className="icon-error" size={24} aria-label="Failure" />
                <span><strong>Confidentiality:</strong> A stranger reads a bank statement.</span>
              </li>
              <li>
                <X className="icon-error" size={24} aria-label="Failure" />
                <span><strong>Integrity:</strong> A transaction amount is secretly changed.</span>
              </li>
              <li>
                <X className="icon-error" size={24} aria-label="Failure" />
                <span><strong>Availability:</strong> The app crashes or an ATM remains offline.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};
