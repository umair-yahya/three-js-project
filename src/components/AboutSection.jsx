// components/AboutSection.jsx
import React from 'react';

const AboutSection = ({ sectionRef }) => (
  <section id="about" ref={sectionRef} className="section about" aria-label="About Us Section">
    <h2 tabIndex={0}>About Us</h2>
    <div className="parallax-timeline" aria-live="polite">
      <div className="timeline-item" tabIndex={0}>
        <h3>Founded in 2015</h3>
        <p>Started with a passion for 3D innovation and VFX.</p>
      </div>
      <div className="timeline-item" tabIndex={0}>
        <h3>2018 Milestone</h3>
        <p>Expanded services to include real-time 3D rendering.</p>
      </div>
      <div className="timeline-item" tabIndex={0}>
        <h3>Today</h3>
        <p>Leading creative studio in immersive visual effects.</p>
      </div>
    </div>
  </section>
);

export default AboutSection;