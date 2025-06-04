// components/ServicesSection.jsx
import React from 'react';
import Lottie from 'react-lottie';

const ServicesSection = ({ sectionRef, lottieOptions3d, lottieOptionsVFX }) => (
  <section id="services" ref={sectionRef} className="section services" aria-label="Services Section">
    <h2 tabIndex={0}>Our Services</h2>
    <div className="service-cards">
      <div className="card" tabIndex={0} aria-label="3D Animation Service">
        <Lottie options={lottieOptions3d} height={120} width={120} />
        <h3>3D Animation</h3>
        <p>Creating stunning animated visuals that captivate.</p>
      </div>
      <div className="card" tabIndex={0} aria-label="VFX Solutions Service">
        <Lottie options={lottieOptionsVFX} height={120} width={120} />
        <h3>VFX Solutions</h3>
        <p>Delivering cinematic quality visual effects for all media.</p>
      </div>
    </div>
  </section>
);

export default ServicesSection;