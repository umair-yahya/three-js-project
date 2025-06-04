// components/CustomCursor.jsx
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const trailRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const trail = document.createElement('div');
    trail.className = 'cursor-trail';
    document.body.appendChild(trail);
    trailRef.current = trail;

    const moveCursor = (e) => {
      gsap.to(cursor, { x: e.clientX, y: e.clientY, duration: 0.1 });
      gsap.to(trail, { x: e.clientX, y: e.clientY, duration: 0.4, ease: 'power2.out' });
    };

    const interactiveEls = document.querySelectorAll('a, button, .card, .tile, input, textarea');
    interactiveEls.forEach(el => {
      el.addEventListener('mouseenter', () => {
        gsap.to(cursor, { scale: 2, backgroundColor: '#5B1E61', duration: 0.3 });
        gsap.to(trail, { scale: 1.3, backgroundColor: '#944D8A', duration: 0.3 });
      });
      el.addEventListener('mouseleave', () => {
        gsap.to(cursor, { scale: 1, backgroundColor: '#A95C9C', duration: 0.3 });
        gsap.to(trail, { scale: 1, backgroundColor: '#581D5D', duration: 0.3 });
      });
    });

    window.addEventListener('mousemove', moveCursor);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      document.body.removeChild(trail);
    };
  }, []);

  return <div className="cursor" ref={cursorRef}></div>;
};

export default CustomCursor;