import React from 'react';

export const Careers: React.FC = () => {
  return (
    <section className="slide-section" aria-labelledby="careers-heading">
      <div className="section-header">
        <h2 id="careers-heading" className="section-title">Cybersecurity Career Connections</h2>
        <p className="text-secondary">The CIA Triad applies across many specialized cybersecurity roles.</p>
      </div>

      <div className="columns-3">
        <div className="card">
          <h3 className="card-title text-c">Penetration Testers</h3>
          <p className="text-secondary mt-2">
            Identify weaknesses that could expose, alter, or disrupt systems before malicious hackers can exploit them.
          </p>
        </div>

        <div className="card">
          <h3 className="card-title text-i">Auditors</h3>
          <p className="text-secondary mt-2">
            Verify that security controls and compliance requirements are followed strictly across the organization.
          </p>
        </div>

        <div className="card">
          <h3 className="card-title text-a">Program Managers</h3>
          <p className="text-secondary mt-2">
            Coordinate security initiatives and overarching risk-reduction efforts to keep projects secure and on track.
          </p>
        </div>
      </div>
      <div className="card mt-4 max-w-2xl mx-auto text-center">
          <h3 className="card-title text-success">Security Engineers</h3>
          <p className="text-secondary mt-2">
            Design, build, and maintain the technical defenses required to enforce Confidentiality, Integrity, and Availability.
          </p>
      </div>
    </section>
  );
};
