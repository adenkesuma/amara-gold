'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const getPath = (label: string) => {
    switch (label) {
      case 'Origin':
        return '/origin';
      case 'Process':
        return '/process';
      case 'Shop':
        return '/shop';
      default:
        return '#';
    }
  };

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        padding: '0 40px',
        height: '64px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        transition: 'background 0.4s ease, backdrop-filter 0.4s ease',
        background: scrolled ? 'rgba(10,5,0,0.88)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(20px)' : 'none',
      }}
    >
      <Link
        href="/"
        style={{
          fontFamily: 'var(--font-inter), sans-serif',
          fontSize: '13px',
          fontWeight: 500,
          letterSpacing: '4px',
          color: 'var(--cream)',
          textDecoration: 'none',
          textTransform: 'uppercase',
        }}
      >
        omanga Gold
      </Link>

      <ul
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '32px',
          listStyle: 'none',
        }}
        className="nav-links-desktop"
      >
        {['Origin', 'Process', 'Shop'].map((item) => (
          <li key={item}>
            <Link
              href={getPath(item)}
              style={{
                fontFamily: 'var(--font-inter), sans-serif',
                fontSize: '12px',
                letterSpacing: '2px',
                color: 'var(--cream-muted)',
                textDecoration: 'none',
                textTransform: 'uppercase',
                transition: 'color 0.3s ease',
              }}
              onMouseEnter={(e) => ((e.target as HTMLElement).style.color = 'var(--amber)')}
              onMouseLeave={(e) => ((e.target as HTMLElement).style.color = 'var(--cream-muted)')}
            >
              {item}
            </Link>
          </li>
        ))}
      </ul>

      <Link
        href="#cta-section"
        style={{
          fontFamily: 'var(--font-inter), sans-serif',
          fontSize: '11px',
          fontWeight: 500,
          letterSpacing: '2px',
          color: 'var(--amber)',
          textDecoration: 'none',
          textTransform: 'uppercase',
          border: '1px solid var(--amber)',
          padding: '8px 20px',
          borderRadius: '2px',
          transition: 'background 0.3s ease, color 0.3s ease',
        }}
        onMouseEnter={(e) => {
          (e.target as HTMLElement).style.background = 'var(--amber)';
          (e.target as HTMLElement).style.color = 'var(--bg-deep)';
        }}
        onMouseLeave={(e) => {
          (e.target as HTMLElement).style.background = 'transparent';
          (e.target as HTMLElement).style.color = 'var(--amber)';
        }}
      >
        Order Now
      </Link>
    </nav>
  );
}