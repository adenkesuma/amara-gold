'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import CTASection from '@/components/CTASection';

export default function Process() {
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
            The Art of Cold Pressing
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
            Our process honors the fruit by never applying heat, preserving every delicate nuance of flavor, aroma, and nutrition. Each step is meticulously controlled to ensure the purest expression of mango.
          </p>
        </section>

        {/* Process Steps */}
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
              From Harvest to Bottle
            </h2>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '32px',
              }}
            >
              {/* Step 1 */}
              <div
                style={{
                  position: 'relative',
                  padding: '40px 30px',
                  background: 'rgba(201,123,26,0.05)',
                  borderRadius: '4px',
                  border: '1px solid rgba(201,123,26,0.1)',
                }}
              >
                <div
                  style={{
                    width: '50px',
                    height: '50px',
                    background: 'radial-gradient(circle, var(--amber), transparent)',
                    borderRadius: '50%',
                    margin: '0 auto 24px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-inter), sans-serif',
                      fontSize: '20px',
                      fontWeight: 600,
                      color: 'var(--bg-deep)',
                    }}
                  >
                    01
                  </span>
                </div>
                <h3
                  style={{
                    fontFamily: 'var(--font-inter), sans-serif',
                    fontSize: '18px',
                    fontWeight: 500,
                    color: 'var(--cream)',
                    textAlign: 'center',
                    marginBottom: '16px',
                  }}
                >
                  Harvest & Selection
                </h3>
                <p
                  style={{
                    fontFamily: 'var(--font-inter), sans-serif',
                    fontSize: '15px',
                    color: 'var(--cream-muted)',
                    textAlign: 'center',
                    lineHeight: 1.6,
                  }}
                >
                  Mangoes are harvested at peak ripeness and transported within hours to maintain freshness. Only the finest fruit passes our rigorous selection.
                </p>
              </div>

              {/* Step 2 */}
              <div
                style={{
                  position: 'relative',
                  padding: '40px 30px',
                  background: 'rgba(201,123,26,0.05)',
                  borderRadius: '4px',
                  border: '1px solid rgba(201,123,26,0.1)',
                }}
              >
                <div
                  style={{
                    width: '50px',
                    height: '50px',
                    background: 'radial-gradient(circle, var(--amber), transparent)',
                    borderRadius: '50%',
                    margin: '0 auto 24px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-inter), sans-serif',
                      fontSize: '20px',
                      fontWeight: 600,
                      color: 'var(--bg-deep)',
                    }}
                  >
                    02
                  </span>
                </div>
                <h3
                  style={{
                    fontFamily: 'var(--font-inter), sans-serif',
                    fontSize: '18px',
                    fontWeight: 500,
                    color: 'var(--cream)',
                    textAlign: 'center',
                    marginBottom: '16px',
                  }}
                >
                  Gentle Washing
                </h3>
                <p
                  style={{
                    fontFamily: 'var(--font-inter), sans-serif',
                    fontSize: '15px',
                    color: 'var(--cream-muted)',
                    textAlign: 'center',
                    lineHeight: 1.6,
                  }}
                >
                  Fruit is cleaned with purified water, removing impurities while preserving the natural waxy coating that protects flavor and nutrients.
                </p>
              </div>

              {/* Step 3 */}
              <div
                style={{
                  position: 'relative',
                  padding: '40px 30px',
                  background: 'rgba(201,123,26,0.05)',
                  borderRadius: '4px',
                  border: '1px solid rgba(201,123,26,0.1)',
                }}
              >
                <div
                  style={{
                    width: '50px',
                    height: '50px',
                    background: 'radial-gradient(circle, var(--amber), transparent)',
                    borderRadius: '50%',
                    margin: '0 auto 24px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-inter), sans-serif',
                      fontSize: '20px',
                      fontWeight: 600,
                      color: 'var(--bg-deep)',
                    }}
                  >
                    03
                  </span>
                </div>
                <h3
                  style={{
                    fontFamily: 'var(--font-inter), sans-serif',
                    fontSize: '18px',
                    fontWeight: 500,
                    color: 'var(--cream)',
                    textAlign: 'center',
                    marginBottom: '16px',
                  }}
                >
                  Precision Cutting
                </h3>
                <p
                  style={{
                    fontFamily: 'var(--font-inter), sans-serif',
                    fontSize: '15px',
                    color: 'var(--cream-muted)',
                    textAlign: 'center',
                    lineHeight: 1.6,
                  }}
                >
                  Each mango is carefully de-stoned and sliced by hand, ensuring maximum yield while preserving the integrity of the fruit.
                </p>
              </div>

              {/* Step 4 */}
              <div
                style={{
                  position: 'relative',
                  padding: '40px 30px',
                  background: 'rgba(201,123,26,0.05)',
                  borderRadius: '4px',
                  border: '1px solid rgba(201,123,26,0.1)',
                }}
              >
                <div
                  style={{
                    width: '50px',
                    height: '50px',
                    background: 'radial-gradient(circle, var(--amber), transparent)',
                    borderRadius: '50%',
                    margin: '0 auto 24px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-inter), sans-serif',
                      fontSize: '20px',
                      fontWeight: 600,
                      color: 'var(--bg-deep)',
                    }}
                  >
                    04
                  </span>
                </div>
                <h3
                  style={{
                    fontFamily: 'var(--font-inter), sans-serif',
                    fontSize: '18px',
                    fontWeight: 500,
                    color: 'var(--cream)',
                    textAlign: 'center',
                    marginBottom: '16px',
                  }}
                >
                  Cold Press Extraction
                </h3>
                <p
                  style={{
                    fontFamily: 'var(--font-inter), sans-serif',
                    fontSize: '15px',
                    color: 'var(--cream-muted)',
                    textAlign: 'center',
                    lineHeight: 1.6,
                  }}
                >
                  Using hydraulic pressure alone—never heat—we extract the vibrant liquid, preserving enzymes, vitamins, and the authentic mango essence.
                </p>
              </div>

              {/* Step 5 */}
              <div
                style={{
                  position: 'relative',
                  padding: '40px 30px',
                  background: 'rgba(201,123,26,0.05)',
                  borderRadius: '4px',
                  border: '1px solid rgba(201,123,26,0.1)',
                }}
              >
                <div
                  style={{
                    width: '50px',
                    height: '50px',
                    background: 'radial-gradient(circle, var(--amber), transparent)',
                    borderRadius: '50%',
                    margin: '0 auto 24px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-inter), sans-serif',
                      fontSize: '20px',
                      fontWeight: 600,
                      color: 'var(--bg-deep)',
                    }}
                  >
                    05
                  </span>
                </div>
                <h3
                  style={{
                    fontFamily: 'var(--font-inter), sans-serif',
                    fontSize: '18px',
                    fontWeight: 500,
                    color: 'var(--cream)',
                    textAlign: 'center',
                    marginBottom: '16px',
                  }}
                >
                  Light Filtration
                </h3>
                <p
                  style={{
                    fontFamily: 'var(--font-inter), sans-serif',
                    fontSize: '15px',
                    color: 'var(--cream-muted)',
                    textAlign: 'center',
                    lineHeight: 1.6,
                  }}
                >
                  The juice undergoes gentle filtration to remove any remaining fiber, resulting in a smooth, velvety texture while maintaining all nutritional benefits.
                </p>
              </div>

              {/* Step 6 */}
              <div
                style={{
                  position: 'relative',
                  padding: '40px 30px',
                  background: 'rgba(201,123,26,0.05)',
                  borderRadius: '4px',
                  border: '1px solid rgba(201,123,26,0.1)',
                }}
              >
                <div
                  style={{
                    width: '50px',
                    height: '50px',
                    background: 'radial-gradient(circle, var(--amber), transparent)',
                    borderRadius: '50%',
                    margin: '0 auto 24px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-inter), sans-serif',
                      fontSize: '20px',
                      fontWeight: 600,
                      color: 'var(--bg-deep)',
                    }}
                  >
                    06
                  </span>
                </div>
                <h3
                  style={{
                    fontFamily: 'var(--font-inter), sans-serif',
                    fontSize: '18px',
                    fontWeight: 500,
                    color: 'var(--cream)',
                    textAlign: 'center',
                    marginBottom: '16px',
                  }}
                >
                  Bottling & Sealing
                </h3>
                <p
                  style={{
                    fontFamily: 'var(--font-inter), sans-serif',
                    fontSize: '15px',
                    color: 'var(--cream-muted)',
                    textAlign: 'center',
                    lineHeight: 1.6,
                  }}
                >
                  The final juice is poured into amber glass bottles, sealed to protect from light and oxygen, ensuring freshness from our facility to your doorstep.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Quality Badges */}
        <section
          style={{
            background: 'var(--bg-section)',
            padding: '80px',
            borderTop: '1px solid rgba(201,123,26,0.15)',
            borderBottom: '1px solid rgba(201,123,26,0.15)',
          }}
        >
          <div style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
            <h2
              style={{
                fontFamily: 'var(--font-cormorant), serif',
                fontSize: 'clamp(30px, 4vw, 40px)',
                fontWeight: 300,
                fontStyle: 'italic',
                color: 'var(--amber)',
                marginBottom: '32px',
              }}
            >
              Uncompromising Quality
            </h2>
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
                gap: '24px',
              }}
            >
              <div
                style={{
                  padding: '16px 24px',
                  background: 'rgba(201,123,26,0.08)',
                  borderRadius: '4px',
                  border: '1px solid rgba(201,123,26,0.1)',
                  minWidth: '180px',
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-inter), sans-serif',
                    fontSize: '14px',
                    textTransform: 'uppercase',
                    letterSpacing: '2px',
                    color: 'var(--amber)',
                    display: 'block',
                    marginBottom: '8px',
                  }}
                >
                  100% PURE
                </span>
                <span
                  style={{
                    fontFamily: 'var(--font-inter), sans-serif',
                    fontSize: '16px',
                    color: 'var(--cream)',
                  }}
                >
                  No added sugars, water, or preservatives
                </span>
              </div>
              <div
                style={{
                  padding: '16px 24px',
                  background: 'rgba(201,123,26,0.08)',
                  borderRadius: '4px',
                  border: '1px solid rgba(201,123,26,0.1)',
                  minWidth: '180px',
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-inter), sans-serif',
                    fontSize: '14px',
                    textTransform: 'uppercase',
                    letterSpacing: '2px',
                    color: 'var(--amber)',
                    display: 'block',
                    marginBottom: '8px',
                  }}
                >
                  COLD PRESSED
                </span>
                <span
                  style={{
                    fontFamily: 'var(--font-inter), sans-serif',
                    fontSize: '16px',
                    color: 'var(--cream)',
                  }}
                >
                  Never heated, never compromised
                </span>
              </div>
              <div
                style={{
                  padding: '16px 24px',
                  background: 'rgba(201,123,26,0.08)',
                  borderRadius: '4px',
                  border: '1px solid rgba(201,123,26,0.1)',
                  minWidth: '180px',
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-inter), sans-serif',
                    fontSize: '14px',
                    textTransform: 'uppercase',
                    letterSpacing: '2px',
                    color: 'var(--amber)',
                    display: 'block',
                    marginBottom: '8px',
                  }}
                >
                  SINGLE BATCH
                </span>
                <span
                  style={{
                    fontFamily: 'var(--font-inter), sans-serif',
                    fontSize: '16px',
                    color: 'var(--cream)',
                  }}
                >
                  Limited quantities, exceptional quality
                </span>
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
          © 2025 All rights reserved.
        </span>
      </footer>
    </>
  );
}