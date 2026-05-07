'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import Navbar from '@/components/Navbar';
import CTASection from '@/components/CTASection';

export default function OrderConfirmation() {
  useEffect(() => {
    // Scroll to top when route changes
    window.scrollTo(0, 0);
  }, []);

  const { id } = useParams<{ id: string }>();

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
            Order Confirmed!
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
            Thank you for your purchase! Your order has been successfully processed.
          </p>
        </section>

        {/* Order Details */}
        <section
          style={{
            background: 'var(--bg-deep)',
            padding: '120px 80px',
          }}
        >
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <div
              style={{
                textAlign: 'center',
                marginBottom: '48px',
              }}
            >
              <div
                style={{
                  width: '80px',
                  height: '80px',
                  background: 'rgba(201,123,26,0.1)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 24px',
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-inter), sans-serif',
                    fontSize: '32px',
                    fontWeight: 600,
                    color: 'var(--amber)',
                  }}
                >
                  ✓
                </span>
              </div>
              <h2
                style={{
                  fontFamily: 'var(--font-cormorant), serif',
                  fontSize: 'clamp(30px, 5vw, 40px)',
                  fontWeight: 300,
                  fontStyle: 'italic',
                  color: 'var(--amber)',
                  marginBottom: '16px',
                }}
              >
                Order #{id}
              </h2>
              <p
                style={{
                  fontFamily: 'var(--font-inter), sans-serif',
                  fontSize: '16px',
                  color: 'var(--cream-muted)',
                  maxWidth: '500px',
                  margin: '0 auto',
                  lineHeight: 1.6,
                }}
              >
                Your order has been confirmed and is being processed. You will receive a confirmation email shortly.
              </p>
            </div>

            <div
              style={{
                background: 'rgba(201,123,26,0.05)',
                borderRadius: '4px',
                padding: '32px',
              }}
            >
              <h3
                style={{
                  fontFamily: 'var(--font-cormorant), serif',
                  fontSize: '22px',
                  fontWeight: 300,
                  fontStyle: 'italic',
                  color: 'var(--cream)',
                  marginBottom: '24px',
                }}
              >
                Order Summary
              </h3>
              <p
                style={{
                  fontFamily: 'var(--font-inter), sans-serif',
                  fontSize: '14px',
                  color: 'var(--cream-muted)',
                  marginBottom: '16px',
                }}
              >
                Thank you for choosing Amara Gold. Your pure, cold-pressed mango products are carefully packaged and will be shipped shortly.
              </p>
              <div
                style={{
                  marginTop: '24px',
                  paddingTop: '24px',
                  borderTop: '1px solid rgba(201,123,26,0.1)',
                }}
              >
                <p
                  style={{
                    fontFamily: 'var(--font-inter), sans-serif',
                    fontSize: '14px',
                    color: 'var(--cream-muted)',
                    marginBottom: '8px',
                  }}
                >
                  Estimated delivery: 3-5 business days
                </p>
                <p
                  style={{
                    fontFamily: 'var(--font-inter), sans-serif',
                    fontSize: '14px',
                    color: 'var(--cream-muted)',
                    marginBottom: '8px',
                  }}
                >
                  Tracking information will be emailed to you once your order ships.
                </p>
                <p
                  style={{
                    fontFamily: 'var(--font-inter), sans-serif',
                    fontSize: '14px',
                    color: 'var(--cream-muted)',
                  }}
                >
                  Questions? Contact us at support@amaragold.com
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section
          style={{
            background: 'linear-gradient(180deg, var(--bg-deep) 0%, var(--bg-section) 50%, var(--bg-deep) 100%)',
            padding: '120px 80px',
            textAlign: 'center',
          }}
        >
          <div style={{ maxWidth: '500px', margin: '0 auto' }}>
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
              Stay Connected
            </h2>
            <p
              style={{
                fontFamily: 'var(--font-inter), sans-serif',
                fontSize: '16px',
                color: 'var(--cream-muted)',
                maxWidth: '500px',
                margin: '0 auto 32px',
                lineHeight: 1.6,
              }}
            >
              Follow us for updates on new batches, recipes, and the story behind our mangoes.
            </p>
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                gap: '16px',
                flexWrap: 'wrap',
              }}
            >
              <Link
                href="/"
                style={{
                  fontFamily: 'var(--font-inter), sans-serif',
                  fontSize: '13px',
                  fontWeight: 500,
                  letterSpacing: '2px',
                  color: 'var(--bg-deep)',
                  textDecoration: 'none',
                  textTransform: 'uppercase',
                  background: 'linear-gradient(135deg, var(--amber), var(--amber-light))',
                  padding: '12px 32px',
                  borderRadius: '2px',
                  display: 'inline-block',
                  transition: 'transform 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  (e.target as HTMLElement).style.transform = 'scale(1.05)';
                }}
                onMouseLeave={(e) => {
                  (e.target as HTMLElement).style.transform = 'scale(1)';
                }}
              >
                Continue Shopping
              </Link>
              <Link
                href="/origin"
                style={{
                  fontFamily: 'var(--font-inter), sans-serif',
                  fontSize: '13px',
                  fontWeight: 500,
                  letterSpacing: '2px',
                  color: 'var(--bg-deep)',
                  textDecoration: 'none',
                  textTransform: 'uppercase',
                  background: 'linear-gradient(135deg, var(--amber), var(--amber-light))',
                  padding: '12px 32px',
                  borderRadius: '2px',
                  display: 'inline-block',
                  transition: 'transform 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  (e.target as HTMLElement).style.transform = 'scale(1.05)';
                }}
                onMouseLeave={(e) => {
                  (e.target as HTMLElement).style.transform = 'scale(1)';
                }}
              >
                Learn Our Story
              </Link>
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