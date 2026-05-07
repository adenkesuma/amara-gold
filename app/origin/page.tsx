'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import CTASection from '@/components/CTASection';

export default function Origin() {
  useEffect(() => {
    // Scroll to top when route changes
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />
      <main style={{ minHeight: '100vh', background: 'var(--bg-section)' }}>
        {/* Hero Section */}
        <section
          style={{
            position: 'relative',
            background: 'linear-gradient(180deg, transparent, rgba(10,5,0,0.3))',
            padding: '200px 80px 100px',
            textAlign: 'center',
          }}
        >
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'radial-gradient(circle at center, rgba(201,123,26,0.1) 0%, transparent 70%)',
              pointerEvents: 'none',
            }}
          />
          <h1
            style={{
              fontFamily: 'var(--font-cormorant), serif',
              fontSize: 'clamp(48px, 8vw, 80px)',
              fontWeight: 400,
              fontStyle: 'italic',
              color: 'var(--cream)',
              lineHeight: 1.2,
              marginBottom: '24px',
              position: 'relative',
            }}
          >
            The Origin of Excellence
          </h1>
          <p
            style={{
              fontFamily: 'var(--font-inter), sans-serif',
              fontSize: '18px',
              fontWeight: 300,
              color: 'var(--cream-muted)',
              maxWidth: '800px',
              margin: '0 auto 40px',
              lineHeight: 1.8,
            }}
          >
            Our journey begins in the sun-drenched orchards of Southeast Asia, where only the finest, ripest mangoes are hand-selected at peak maturity. Each fruit carries the legacy of generations of farmers who cultivate with passion and respect for the land.
          </p>
        </section>

        {/* Content Section */}
        <section
          style={{
            background: 'var(--bg-deep)',
            padding: '120px 80px',
          }}
        >
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <h2
              style={{
                fontFamily: 'var(--font-cormorant), serif',
                fontSize: 'clamp(36px, 5vw, 48px)',
                fontWeight: 300,
                fontStyle: 'italic',
                color: 'var(--amber)',
                marginBottom: '40px',
                textAlign: 'center',
              }}
            >
              From Tree to Table
            </h2>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '40px',
                alignItems: 'start',
              }}
            >
              <div>
                <h3
                  style={{
                    fontFamily: 'var(--font-inter), sans-serif',
                    fontSize: '20px',
                    fontWeight: 500,
                    color: 'var(--cream)',
                    marginBottom: '16px',
                  }}
                >
                  Sustainable Farming
                </h3>
                <p
                  style={{
                    fontFamily: 'var(--font-inter), sans-serif',
                    fontSize: '16px',
                    color: 'var(--cream-muted)',
                    lineHeight: 1.7,
                  }}
                >
                  We partner with farms that practice regenerative agriculture, ensuring biodiversity and soil health for future generations. No pesticides, no shortcuts—just pure, natural goodness.
                </p>
              </div>
              <div>
                <h3
                  style={{
                    fontFamily: 'var(--font-inter), sans-serif',
                    fontSize: '20px',
                    fontWeight: 500,
                    color: 'var(--cream)',
                    marginBottom: '16px',
                  }}
                >
                  Hand-Picked Perfection
                </h3>
                <p
                  style={{
                    fontFamily: 'var(--font-inter), sans-serif',
                    fontSize: '16px',
                    color: 'var(--cream-muted)',
                    lineHeight: 1.7,
                  }}
                >
                  Every mango is carefully selected by experienced hands, ensuring only fruit at its peak of flavor and ripeness makes it to our bottles. This meticulous selection guarantees consistent excellence in every sip.
                </p>
              </div>
              <div>
                <h3
                  style={{
                    fontFamily: 'var(--font-inter), sans-serif',
                    fontSize: '20px',
                    fontWeight: 500,
                    color: 'var(--cream)',
                    marginBottom: '16px',
                  }}
                >
                  Community & Heritage
                </h3>
                <p
                  style={{
                    fontFamily: 'var(--font-inter), sans-serif',
                    fontSize: '16px',
                    color: 'var(--cream-muted)',
                    lineHeight: 1.7,
                  }}
                >
                  We honor the traditions and knowledge of local farming communities, providing fair wages and supporting education initiatives. Each bottle represents a commitment to ethical stewardship.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <CTASection />
      </main>
      <footer
        style={{
          padding: '40px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          borderTop: '1px solid rgba(201,123,26,0.1)',
          background: 'var(--bg-deep)',
        }}
      >
        <span
          style={{
            fontFamily: 'var(--font-inter), sans-serif',
            fontSize: '12px',
            letterSpacing: '4px',
            color: 'var(--amber)',
            textTransform: 'uppercase',
          }}
        >
          omanga Gold
        </span>
        <span
          style={{
            fontFamily: 'var(--font-inter), sans-serif',
            fontSize: '11px',
            color: 'var(--cream-muted)',
            opacity: 0.5,
          }}
        >
          © 2025 omanga Gold. All rights reserved.
        </span>
      </footer>
    </>
  );
}