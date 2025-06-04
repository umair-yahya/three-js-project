// components/PortfolioSection.jsx
import React from 'react';

const PortfolioSection = ({ sectionRef }) => (
  <section id="portfolio" ref={sectionRef} className="section portfolio" aria-label="Portfolio Section">
    <h2 tabIndex={0}>Portfolio</h2>
    <div className="portfolio-tiles">
      <div className="tile" tabIndex={0} aria-label="Project 1 Preview">
        <video
          src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.webm"
          autoPlay loop muted playsInline
          className="tile-video"
          aria-hidden="true"
        />
        <p>Project 1: Nature Render</p>
      </div>
      <div className="tile" tabIndex={0} aria-label="Project 2 Preview">
        <video
          src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.webm"
          autoPlay loop muted playsInline
          className="tile-video"
          aria-hidden="true"
        />
        <p>Project 2: Insect VFX</p>
      </div>
    </div>
  </section>
);

export default PortfolioSection;