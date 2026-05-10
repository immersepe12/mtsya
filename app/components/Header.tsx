'use client';

import { useEffect, useState } from 'react';

// The header is transparent over the hero and becomes solid Paper
// Cream after scroll past the fold. 200 ms ease — the only allowed
// motion in the system.
export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const threshold = window.innerHeight - 80;
      setScrolled(window.scrollY > threshold);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`site-header${scrolled ? ' is-scrolled' : ''}`}>
      <div className="wrap row">
        <a href="#" className="word" aria-label="mtsya — home">mtsya</a>
        <nav aria-label="Primary">
          <a href="#shirts">shirts</a>
          <a href="#tees">tees</a>
          <a href="#story">the story</a>
          <a href="#journal">journal</a>
          <a href="#bag">bag</a>
        </nav>
      </div>
    </header>
  );
}
