'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import CTASection from '@/components/CTASection';

export default function Shop() {
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
          >
          </div>
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
            Our Collection
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
            Discover our range of pure, cold-pressed mango products, each crafted with the same dedication to quality and purity.
          </p>
        </section>

        {/* Product Grid */}
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
              Pure Mango Essence
            </h2>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '32px',
              }}
            >
              {/* Product 1 */}
              <div
                style={{
                  position: 'relative',
                  border: '1px solid rgba(201,123,26,0.1)',
                  borderRadius: '4px',
                  overflow: 'hidden',
                  background: 'var(--bg-section)',
                  transition: 'transform 0.3s ease, border-color 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.transform = 'translateY(-4px)';
                  (e.currentTarget as HTMLElement).style.borderColor = 'var(--amber)';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
                  (e.currentTarget as HTMLElement).style.borderColor = 'rgba(201,123,26,0.1)';
                }}
              >
                <div
                  style={{
                    position: 'relative',
                    height: '200px',
                    background: 'url("/classic-mango-nectar.png") center/cover',
                    overflow: 'hidden',
                  }}
                >
                  <div
                    style={{
                      position: 'absolute',
                      bottom: '0',
                      left: '0',
                      right: '0',
                      height: '40px',
                      background: 'rgba(10,5,0,0.6)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <span
                      style={{
                        fontFamily: 'var(--font-inter), sans-serif',
                        fontSize: '12px',
                        textTransform: 'uppercase',
                        letterSpacing: '2px',
                        color: 'var(--amber)',
                      }}
                    >
                      CLASSIC
                    </span>
                  </div>
                </div>
                <div style={{ padding: '24px' }}>
                  <h3
                    style={{
                      fontFamily: 'var(--font-cormorant), serif',
                      fontSize: '22px',
                      fontWeight: 300,
                      fontStyle: 'italic',
                      color: 'var(--cream)',
                      marginBottom: '12px',
                    }}
                  >
                    Classic Mango Nectar
                  </h3>
                  <p
                    style={{
                      fontFamily: 'var(--font-inter), sans-serif',
                      fontSize: '14px',
                      color: 'var(--cream-muted)',
                      marginBottom: '20px',
                      lineHeight: 1.6,
                    }}
                  >
                    Our signature cold-pressed mango juice, bottled in its purest form. 100% mango, nothing added, nothing removed.
                  </p>
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}
                  >
                    <span
                      style={{
                        fontFamily: 'var(--font-inter), sans-serif',
                        fontSize: '18px',
                        fontWeight: 500,
                        color: 'var(--amber)',
                      }}
                    >
                      $24.99
                    </span>
                    <Link
                      href="/"
                      style={{
                        fontFamily: 'var(--font-inter), sans-serif',
                        fontSize: '12px',
                        fontWeight: 500,
                        letterSpacing: '2px',
                        color: 'var(--amber)',
                        textDecoration: 'none',
                        textTransform: 'uppercase',
                        border: '1px solid var(--amber)',
                        padding: '6px 16px',
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
                      Buy Now
                    </Link>
                  </div>
                </div>
              </div>

              {/* Product 2 */}
              <div
                style={{
                  position: 'relative',
                  border: '1px solid rgba(201,123,26,0.1)',
                  borderRadius: '4px',
                  overflow: 'hidden',
                  background: 'var(--bg-section)',
                  transition: 'transform 0.3s ease, border-color 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.transform = 'translateY(-4px)';
                  (e.currentTarget as HTMLElement).style.borderColor = 'var(--amber)';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
                  (e.currentTarget as HTMLElement).style.borderColor = 'rgba(201,123,26,0.1)';
                }}
              >
                <div
                  style={{
                    position: 'relative',
                    height: '200px',
                    background: 'url("/ginger-infused-mango.png") center/cover',
                    overflow: 'hidden',
                  }}
                >
                  <div
                    style={{
                      position: 'absolute',
                      bottom: '0',
                      left: '0',
                      right: '0',
                      height: '40px',
                      background: 'rgba(10,5,0,0.6)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <span
                      style={{
                        fontFamily: 'var(--font-inter), sans-serif',
                        fontSize: '12px',
                        textTransform: 'uppercase',
                        letterSpacing: '2px',
                        color: 'var(--amber)',
                      }}
                    >
                      SPICED
                    </span>
                  </div>
                </div>
                <div style={{ padding: '24px' }}>
                  <h3
                    style={{
                      fontFamily: 'var(--font-cormorant), serif',
                      fontSize: '22px',
                      fontWeight: 300,
                      fontStyle: 'italic',
                      color: 'var(--cream)',
                      marginBottom: '12px',
                    }}
                  >
                    Ginger-Infused Mango
                  </h3>
                  <p
                    style={{
                      fontFamily: 'var(--font-inter), sans-serif',
                      fontSize: '14px',
                      color: 'var(--cream-muted)',
                      marginBottom: '20px',
                      lineHeight: 1.6,
                    }}
                  >
                    Our classic nectar with a hint of freshly pressed ginger, adding warmth and complexity to the sweet mango profile.
                  </p>
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}
                  >
                    <span
                      style={{
                        fontFamily: 'var(--font-inter), sans-serif',
                        fontSize: '18px',
                        fontWeight: 500,
                        color: 'var(--amber)',
                      }}
                    >
                      $27.99
                    </span>
                    <Link
                      href="/"
                      style={{
                        fontFamily: 'var(--font-inter), sans-serif',
                        fontSize: '12px',
                        fontWeight: 500,
                        letterSpacing: '2px',
                        color: 'var(--amber)',
                        textDecoration: 'none',
                        textTransform: 'uppercase',
                        border: '1px solid var(--amber)',
                        padding: '6px 16px',
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
                      Buy Now
                    </Link>
                  </div>
                </div>
              </div>

              {/* Product 3 */}
              <div
                style={{
                  position: 'relative',
                  border: '1px solid rgba(201,123,26,0.1)',
                  borderRadius: '4px',
                  overflow: 'hidden',
                  background: 'var(--bg-section)',
                  transition: 'transform 0.3s ease, border-color 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.transform = 'translateY(-4px)';
                  (e.currentTarget as HTMLElement).style.borderColor = 'var(--amber)';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
                  (e.currentTarget as HTMLElement).style.borderColor = 'rgba(201,123,26,0.1)';
                }}
              >
                <div
                  style={{
                    position: 'relative',
                    height: '200px',
                    background: 'url("/reserve-barrel-aged.png") center/cover',
                    overflow: 'hidden',
                  }}
                >
                  <div
                    style={{
                      position: 'absolute',
                      bottom: '0',
                      left: '0',
                      right: '0',
                      height: '40px',
                      background: 'rgba(10,5,0,0.6)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <span
                      style={{
                        fontFamily: 'var(--font-inter), sans-serif',
                        fontSize: '12px',
                        textTransform: 'uppercase',
                        letterSpacing: '2px',
                        color: 'var(--amber)',
                      }}
                    >
                      LIMITED EDITION
                    </span>
                  </div>
                </div>
                <div style={{ padding: '24px' }}>
                  <h3
                    style={{
                      fontFamily: 'var(--font-cormorant), serif',
                      fontSize: '22px',
                      fontWeight: 300,
                      fontStyle: 'italic',
                      color: 'var(--cream)',
                      marginBottom: '12px',
                    }}
                  >
                    Reserve Barrel Aged
                  </h3>
                  <p
                    style={{
                      fontFamily: 'var(--font-inter), sans-serif',
                      fontSize: '14px',
                      color: 'var(--cream-muted)',
                      marginBottom: '20px',
                      lineHeight: 1.6,
                    }}
                  >
                    Aged in oak barrels for 60 days, developing subtle notes of vanilla and spice while maintaining the bright mango character.
                  </p>
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}
                  >
                    <span
                      style={{
                        fontFamily: 'var(--font-inter), sans-serif',
                        fontSize: '18px',
                        fontWeight: 500,
                        color: 'var(--amber)',
                      }}
                    >
                      $32.99
                    </span>
                    <Link
                      href="/"
                      style={{
                        fontFamily: 'var(--font-inter), sans-serif',
                        fontSize: '12px',
                        fontWeight: 500,
                        letterSpacing: '2px',
                        color: 'var(--amber)',
                        textDecoration: 'none',
                        textTransform: 'uppercase',
                        border: '1px solid var(--amber)',
                        padding: '6px 16px',
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
                      Buy Now
                    </Link>
                  </div>
                </div>
              </div>

              {/* Product 4 */}
              <div
                style={{
                  position: 'relative',
                  border: '1px solid rgba(201,123,26,0.1)',
                  borderRadius: '4px',
                  overflow: 'hidden',
                  background: 'var(--bg-section)',
                  transition: 'transform 0.3s ease, border-color 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.transform = 'translateY(-4px)';
                  (e.currentTarget as HTMLElement).style.borderColor = 'var(--amber)';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
                  (e.currentTarget as HTMLElement).style.borderColor = 'rgba(201,123,26,0.1)';
                }}
              >
                <div
                  style={{
                    position: 'relative',
                    height: '200px',
                    background: 'url("/family-collection.png") center/cover',
                    overflow: 'hidden',
                  }}
                >
                  <div
                    style={{
                      position: 'absolute',
                      bottom: '0',
                      left: '0',
                      right: '0',
                      height: '40px',
                      background: 'rgba(10,5,0,0.6)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <span
                      style={{
                        fontFamily: 'var(--font-inter), sans-serif',
                        fontSize: '12px',
                        textTransform: 'uppercase',
                        letterSpacing: '2px',
                        color: 'var(--amber)',
                      }}
                    >
                      GIFT SET
                    </span>
                  </div>
                </div>
                <div style={{ padding: '24px' }}>
                  <h3
                    style={{
                      fontFamily: 'var(--font-cormorant), serif',
                      fontSize: '22px',
                      fontWeight: 300,
                      fontStyle: 'italic',
                      color: 'var(--cream)',
                      marginBottom: '12px',
                    }}
                  >
                    Family Collection
                  </h3>
                  <p
                    style={{
                      fontFamily: 'var(--font-inter), sans-serif',
                      fontSize: '14px',
                      color: 'var(--cream-muted)',
                      marginBottom: '20px',
                      lineHeight: 1.6,
                    }}
                  >
                    Six bottles of our classic mango nectar, presented in a recyclable wooden crate—perfect for gifting or stocking your pantry.
                  </p>
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}
                  >
                    <span
                      style={{
                        fontFamily: 'var(--font-inter), sans-serif',
                        fontSize: '18px',
                        fontWeight: 500,
                        color: 'var(--amber)',
                      }}
                    >
                      $129.99
                    </span>
                    <Link
                      href="/"
                      style={{
                        fontFamily: 'var(--font-inter), sans-serif',
                        fontSize: '12px',
                        fontWeight: 500,
                        letterSpacing: '2px',
                        color: 'var(--amber)',
                        textDecoration: 'none',
                        textTransform: 'uppercase',
                        border: '1px solid var(--amber)',
                        padding: '6px 16px',
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
                      Buy Now
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter / CTA */}
        <section
          style={{
            background: 'linear-gradient(180deg, var(--bg-deep) 0%, var(--bg-section) 50%, var(--bg-deep) 100%)',
            padding: '120px 80px',
            textAlign: 'center',
          }}
        >
          <h2
            style={{
              fontFamily: 'var(--font-cormorant), serif',
              fontSize: 'clamp(30px, 5vw, 40px)',
              fontWeight: 300,
              fontStyle: 'italic',
              color: 'var(--amber)',
              marginBottom: '24px',
            }}
          >
            Stay in the Know
          </h2>
          <p
            style={{
              fontFamily: 'var(--font-inter), sans-serif',
              fontSize: '16px',
              color: 'var(--cream-muted)',
              maxWidth: '600px',
              margin: '0 auto 32px',
              lineHeight: 1.6,
            }}
          >
            Join our community for early access to limited batches, recipe ideas, and the story behind each harvest.
          </p>
          <div
            style={{
              display: 'flex',
              maxWidth: '500px',
              margin: '0 auto',
              gap: '8px',
            }}
          >
            <input
              type="email"
              placeholder="Your email address"
              style={{
                flex: 1,
                padding: '16px 20px',
                border: '1px solid rgba(201,123,26,0.2)',
                borderRadius: '2px',
                background: 'rgba(255,255,255,0.05)',
                color: 'var(--cream)',
                fontFamily: 'var(--font-inter), sans-serif',
                fontSize: '14px',
                outline: 'none',
                transition: 'border-color 0.3s ease',
              }}
              onFocus={(e) => {
                (e.target as HTMLInputElement).style.borderColor = 'var(--amber)';
              }}
              onBlur={(e) => {
                (e.target as HTMLInputElement).style.borderColor = 'rgba(201,123,26,0.2)';
              }}
            />
            <button
              style={{
                padding: '0 24px',
                background: 'linear-gradient(135deg, var(--amber), var(--amber-light))',
                color: 'var(--bg-deep)',
                border: 'none',
                borderRadius: '2px',
                fontFamily: 'var(--font-inter), sans-serif',
                fontSize: '14px',
                fontWeight: 500,
                textTransform: 'uppercase',
                cursor: 'pointer',
                transition: 'transform 0.2s ease',
              }}
              onMouseEnter={(e) => {
                (e.target as HTMLElement).style.transform = 'scale(1.05)';
              }}
              onMouseLeave={(e) => {
                (e.target as HTMLElement).style.transform = 'scale(1)';
              }}
            >
              Subscribe
            </button>
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
          © 2025 All rights reserved.
        </span>
      </footer>
    </>
  );
}