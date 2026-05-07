'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { useCart } from '@/hooks/useCart';
import Navbar from '@/components/Navbar';
import CTASection from '@/components/CTASection';

export default function Cart() {
  useEffect(() => {
    // Scroll to top when route changes
    window.scrollTo(0, 0);
  }, []);

  const { cart, removeFromCart, updateQuantity, clearCart, getCartTotal } = useCart();

  console.log('Cart render:', cart);

  const handleCheckout = () => {
    // In a real app, you'd validate cart and redirect to checkout
    // For now, we'll just go to checkout page
    if (cart.length === 0) {
      alert('Your cart is empty');
      return;
    }
    // Navigate to checkout
    window.location.href = '/checkout';
  };

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
            Your Shopping Cart
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
            Review your selected items before proceeding to checkout.
          </p>
        </section>

        {/* Cart Items */}
        {cart.length === 0 ? (
          <section
            style={{
              background: 'var(--bg-deep)',
              padding: '120px 80px',
              textAlign: 'center',
            }}
          >
            <div style={{ maxWidth: '600px', margin: '0 auto' }}>
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
                Your Cart is Empty
              </h2>
              <p
                style={{
                  fontFamily: 'var(--font-inter), sans-serif',
                  fontSize: '18px',
                  color: 'var(--cream-muted)',
                  maxWidth: '500px',
                  margin: '0 auto 32px',
                  lineHeight: 1.6,
                }}
              >
                Add some delicious mango products to your cart to get started.
              </p>
              <Link
                href="/shop"
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
            </div>
          </section>
        ) : (
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
                Cart Items
              </h2>
              <div style={{ marginBottom: '40px' }}>
                {cart.map((item) => (
                  <div
                    key={item.id}
                    style={{
                      border: '1px solid rgba(201,123,26,0.1)',
                      borderRadius: '4px',
                      overflow: 'hidden',
                      marginBottom: '24px',
                      display: 'flex',
                    }}
                  >
                    <div
                      style={{
                        position: 'relative',
                        width: '180px',
                        height: '180px',
                        background: 'url(' + item.image + ') center/cover',
                        overflow: 'hidden',
                      }}
                    >
                      <div
                        style={{
                          position: 'absolute',
                          bottom: '0',
                          left: '0',
                          right: '0',
                          height: '30px',
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
                          {item.id === 'classic-mango-nectar' && 'CLASSIC'}
                          {item.id === 'ginger-infused-mango' && 'SPICED'}
                          {item.id === 'reserve-barrel-aged' && 'LIMITED EDITION'}
                          {item.id === 'family-collection' && 'GIFT SET'}
                        </span>
                      </div>
                    </div>
                    <div style={{ padding: '24px', flex: 1 }}>
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
                        {item.name}
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
                        {item.id === 'classic-mango-nectar' &&
                          'Our signature cold-pressed mango juice, bottled in its purest form. 100% mango, nothing added, nothing removed.'}
                        {item.id === 'ginger-infused-mango' &&
                          'Our classic nectar with a hint of freshly pressed ginger, adding warmth and complexity to the sweet mango profile.'}
                        {item.id === 'reserve-barrel-aged' &&
                          'Aged in oak barrels for 60 days, developing subtle notes of vanilla and spice while maintaining the bright mango character.'}
                        {item.id === 'family-collection' &&
                          'Six bottles of our classic mango nectar, presented in a recyclable wooden crate—perfect for gifting or stocking your pantry.'}
                      </p>
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '16px',
                          marginBottom: '16px',
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
                          ${item.price.toFixed(2)}
                        </span>
                        <div
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            border: '1px solid rgba(201,123,26,0.2)',
                            borderRadius: '2px',
                            overflow: 'hidden',
                          }}
                        >
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            style={{
                              width: '36px',
                              height: '36px',
                              background: 'transparent',
                              border: 'none',
                              color: 'var(--cream)',
                              fontSize: '18px',
                              cursor: 'pointer',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                            }}
                          >
                            −
                          </button>
                          <span
                            style={{
                              fontFamily: 'var(--font-inter), sans-serif',
                              fontSize: '16px',
                              fontWeight: 400,
                              color: 'var(--cream)',
                              width: '24px',
                              textAlign: 'center',
                            }}
                          >
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            style={{
                              width: '36px',
                              height: '36px',
                              background: 'transparent',
                              border: 'none',
                              color: 'var(--cream)',
                              fontSize: '18px',
                              cursor: 'pointer',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                            }}
                          >
                            +
                          </button>
                        </div>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          style={{
                            fontFamily: 'var(--font-inter), sans-serif',
                            fontSize: '12px',
                            fontWeight: 500,
                            letterSpacing: '2px',
                            color: 'var(--amber)',
                            textDecoration: 'none',
                            textTransform: 'uppercase',
                            border: '1px solid var(--amber)',
                            padding: '4px 12px',
                            borderRadius: '2px',
                            transition: 'background 0.3s ease, color 0.3s ease',
                            cursor: 'pointer',
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
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Cart Summary */}
        {cart.length > 0 && (
          <section
            style={{
              background: 'var(--bg-section)',
              padding: '80px',
              borderTop: '1px solid rgba(201,123,26,0.15)',
              borderBottom: '1px solid rgba(201,123,26,0.15)',
            }}
          >
            <div style={{ maxWidth: '800px', margin: '0 auto' }}>
              <h2
                style={{
                  fontFamily: 'var(--font-cormorant), serif',
                  fontSize: 'clamp(30px, 5vw, 40px)',
                  fontWeight: 300,
                  fontStyle: 'italic',
                  color: 'var(--amber)',
                  marginBottom: '24px',
                  textAlign: 'center',
                }}
              >
                Order Summary
              </h2>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  marginBottom: '16px',
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-inter), sans-serif',
                    fontSize: '16px',
                    color: 'var(--cream-muted)',
                  }}
                >
                  Subtotal ({cart.reduce((sum, item) => sum + item.quantity, 0)} items):
                </span>
                <span
                  style={{
                    fontFamily: 'var(--font-inter), sans-serif',
                    fontSize: '18px',
                    fontWeight: 500,
                    color: 'var(--cream)',
                  }}
                >
                  ${getCartTotal().toFixed(2)}
                </span>
              </div>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  marginBottom: '16px',
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-inter), sans-serif',
                    fontSize: '16px',
                    color: 'var(--cream-muted)',
                  }}
                >
                  Shipping & Handling:
                </span>
                <span
                  style={{
                    fontFamily: 'var(--font-inter), sans-serif',
                    fontSize: '18px',
                    fontWeight: 500,
                    color: 'var(--cream)',
                  }}
                >
                  Free Shipping
                </span>
              </div>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  borderTop: '1px solid rgba(201,123,26,0.1)',
                  paddingTop: '16px',
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-inter), sans-serif',
                    fontSize: '20px',
                    fontWeight: 500,
                    color: 'var(--cream)',
                  }}
                >
                  Total:
                </span>
                <span
                  style={{
                    fontFamily: 'var(--font-inter), sans-serif',
                    fontSize: '22px',
                    fontWeight: 600,
                    color: 'var(--amber)',
                  }}
                >
                  ${getCartTotal().toFixed(2)}
                </span>
              </div>
            </div>
          </section>
        )}

        {/* Call to Action */}
        {cart.length > 0 && (
          <section
            style={{
              background: 'linear-gradient(180deg, var(--bg-deep) 0%, var(--bg-section) 50%, var(--bg-deep) 100%)',
              padding: '120px 80px',
              textAlign: 'center',
            }}
          >
            <div style={{ maxWidth: '500px', margin: '0 auto' }}>
              <button
                onClick={handleCheckout}
                disabled={cart.length === 0}
                style={{
                  fontFamily: 'var(--font-inter), sans-serif',
                  fontSize: '16px',
                  fontWeight: 500,
                  letterSpacing: '2px',
                  textTransform: 'uppercase',
                  color: 'var(--bg-deep)',
                  background: 'linear-gradient(135deg, var(--amber), var(--amber-light))',
                  padding: '18px 40px',
                  borderRadius: '2px',
                  display: 'inline-block',
                  boxShadow: '0 0 50px rgba(201,123,26,0.45)',
                  transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                  cursor: cart.length === 0 ? 'not-allowed' : 'pointer',
                }}
                onMouseEnter={(e) => {
                  if (cart.length > 0) {
                    (e.target as HTMLElement).style.transform = 'scale(1.03)';
                    (e.target as HTMLElement).style.boxShadow = '0 0 60px rgba(201,123,26,0.55)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (cart.length > 0) {
                    (e.target as HTMLElement).style.transform = 'scale(1)';
                    (e.target as HTMLElement).style.boxShadow = '0 0 50px rgba(201,123,26,0.45)';
                  }
                }}
              >
                Proceed to Checkout
              </button>
              <button
                onClick={() => clearCart()}
                style={{
                  marginTop: '16px',
                  fontFamily: 'var(--font-inter), sans-serif',
                  fontSize: '13px',
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
                Clear Cart
              </button>
            </div>
          </section>
        )}

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