'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useCart } from '@/hooks/useCart';
import Navbar from '@/components/Navbar';
import CTASection from '@/components/CTASection';

export default function Checkout() {
  useEffect(() => {
    // Scroll to top when route changes
    window.scrollTo(0, 0);
  }, []);

  const { cart, clearCart, getCartTotal } = useCart();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    apartment: '',
    city: '',
    state: '',
    zipCode: '',
    country: 'USA',
  });
  const [isLoading, setIsLoading] = useState(false);
  const [orderId, setOrderId] = useState<string | null>(null);

  // Validate form
  const validateForm = () => {
    if (!formData.firstName.trim()) {
      alert('Please enter your first name');
      return false;
    }
    if (!formData.lastName.trim()) {
      alert('Please enter your last name');
      return false;
    }
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) {
      alert('Please enter a valid email address');
      return false;
    }
    if (!formData.address.trim()) {
      alert('Please enter your address');
      return false;
    }
    if (!formData.city.trim()) {
      alert('Please enter your city');
      return false;
    }
    if (!formData.state.trim()) {
      alert('Please enter your state/province');
      return false;
    }
    if (!formData.zipCode.trim()) {
      alert('Please enter your ZIP/postal code');
      return false;
    }
    return true;
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    if (cart.length === 0) {
      alert('Your cart is empty');
      return;
    }

    setIsLoading(true);

    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1500));

    // Generate a fake order ID
    const fakeOrderId = 'AG-' + Math.random().toString(36).substr(2, 9).toUpperCase();
    setOrderId(fakeOrderId);

    // Clear cart after successful order
    clearCart();

    setIsLoading(false);
  };

  if (orderId) {
    // Show order confirmation if we have an order ID
    window.location.href = `/order-confirmation/${orderId}`;
    return null;
  }

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
            Checkout
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
            Please fill in your shipping and billing information to complete your order.
          </p>
        </section>

        {/* Checkout Form */}
        {cart.length > 0 && (
          <section
            style={{
              background: 'var(--bg-deep)',
              padding: '120px 80px',
            }}
          >
            <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
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
                Shipping Information
              </h2>
              <form onSubmit={handleSubmit}>
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                    gap: '24px',
                    marginBottom: '32px',
                  }}
                >
                  <div>
                    <label
                      htmlFor="firstName"
                      style={{
                        display: 'block',
                        fontFamily: 'var(--font-inter), sans-serif',
                        fontSize: '14px',
                        fontWeight: 500,
                        color: 'var(--cream)',
                        marginBottom: '8px',
                      }}
                    >
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      value={formData.firstName}
                      onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                      placeholder="Enter your first name"
                      style={{
                        width: '100%',
                        padding: '14px 16px',
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
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="lastName"
                      style={{
                        display: 'block',
                        fontFamily: 'var(--font-inter), sans-serif',
                        fontSize: '14px',
                        fontWeight: 500,
                        color: 'var(--cream)',
                        marginBottom: '8px',
                      }}
                    >
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      value={formData.lastName}
                      onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                      placeholder="Enter your last name"
                      style={{
                        width: '100%',
                        padding: '14px 16px',
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
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      style={{
                        display: 'block',
                        fontFamily: 'var(--font-inter), sans-serif',
                        fontSize: '14px',
                        fontWeight: 500,
                        color: 'var(--cream)',
                        marginBottom: '8px',
                      }}
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="Enter your email"
                      style={{
                        width: '100%',
                        padding: '14px 16px',
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
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      style={{
                        display: 'block',
                        fontFamily: 'var(--font-inter), sans-serif',
                        fontSize: '14px',
                        fontWeight: 500,
                        color: 'var(--cream)',
                        marginBottom: '8px',
                      }}
                    >
                      Phone Number (Optional)
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="Enter your phone number"
                      style={{
                        width: '100%',
                        padding: '14px 16px',
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
                  </div>
                </div>

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
                  Shipping Address
                </h2>
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                    gap: '24px',
                    marginBottom: '32px',
                  }}
                >
                  <div>
                    <label
                      htmlFor="address"
                      style={{
                        display: 'block',
                        fontFamily: 'var(--font-inter), sans-serif',
                        fontSize: '14px',
                        fontWeight: 500,
                        color: 'var(--cream)',
                        marginBottom: '8px',
                      }}
                    >
                      Street Address
                    </label>
                    <input
                      type="text"
                      id="address"
                      value={formData.address}
                      onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                      placeholder="Enter your street address"
                      style={{
                        width: '100%',
                        padding: '14px 16px',
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
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="apartment"
                      style={{
                        display: 'block',
                        fontFamily: 'var(--font-inter), sans-serif',
                        fontSize: '14px',
                        fontWeight: 500,
                        color: 'var(--cream)',
                        marginBottom: '8px',
                      }}
                    >
                      Apartment, Suite, etc. (Optional)
                    </label>
                    <input
                      type="text"
                      id="apartment"
                      value={formData.apartment}
                      onChange={(e) => setFormData({ ...formData, apartment: e.target.value })}
                      placeholder="Apartment, suite, unit, etc."
                      style={{
                        width: '100%',
                        padding: '14px 16px',
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
                  </div>
                  <div>
                    <label
                      htmlFor="city"
                      style={{
                        display: 'block',
                        fontFamily: 'var(--font-inter), sans-serif',
                        fontSize: '14px',
                        fontWeight: 500,
                        color: 'var(--cream)',
                        marginBottom: '8px',
                      }}
                    >
                      City
                    </label>
                    <input
                      type="text"
                      id="city"
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      placeholder="Enter your city"
                      style={{
                        width: '100%',
                        padding: '14px 16px',
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
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="state"
                      style={{
                        display: 'block',
                        fontFamily: 'var(--font-inter), sans-serif',
                        fontSize: '14px',
                        fontWeight: 500,
                        color: 'var(--cream)',
                        marginBottom: '8px',
                      }}
                    >
                      State / Province
                    </label>
                    <input
                      type="text"
                      id="state"
                      value={formData.state}
                      onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                      placeholder="Enter your state or province"
                      style={{
                        width: '100%',
                        padding: '14px 16px',
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
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="zipCode"
                      style={{
                        display: 'block',
                        fontFamily: 'var(--font-inter), sans-serif',
                        fontSize: '14px',
                        fontWeight: 500,
                        color: 'var(--cream)',
                        marginBottom: '8px',
                      }}
                    >
                      ZIP / Postal Code
                    </label>
                    <input
                      type="text"
                      id="zipCode"
                      value={formData.zipCode}
                      onChange={(e) => setFormData({ ...formData, zipCode: e.target.value })}
                      placeholder="Enter your ZIP or postal code"
                      style={{
                        width: '100%',
                        padding: '14px 16px',
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
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="country"
                      style={{
                        display: 'block',
                        fontFamily: 'var(--font-inter), sans-serif',
                        fontSize: '14px',
                        fontWeight: 500,
                        color: 'var(--cream)',
                        marginBottom: '8px',
                      }}
                    >
                      Country
                    </label>
                    <select
                      id="country"
                      value={formData.country}
                      onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '14px 16px',
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
                        (e.target as HTMLSelectElement).style.borderColor = 'var(--amber)';
                      }}
                      onBlur={(e) => {
                        (e.target as HTMLSelectElement).style.borderColor = 'rgba(201,123,26,0.2)';
                      }}
                    >
                      <option value="USA">United States</option>
                      <option value="CAN">Canada</option>
                      <option value="MEX">Mexico</option>
                      <option value="GBR">United Kingdom</option>
                      <option value="AUS">Australia</option>
                      <option value="DEU">Germany</option>
                      <option value="FRA">France</option>
                      <option value="JPN">Japan</option>
                    </select>
                  </div>
                </div>

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
                  Order Summary
                </h2>
                <div
                  style={{
                    background: 'rgba(201,123,26,0.05)',
                    borderRadius: '4px',
                    padding: '24px',
                  }}
                >
                  {cart.map((item) => (
                    <div
                      key={item.id}
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        padding: '12px 0',
                        borderBottom: item.id !== cart[cart.length - 1].id ? '1px solid rgba(201,123,26,0.1)' : 'none',
                      }}
                    >
                      <span
                        style={{
                          fontFamily: 'var(--font-inter), sans-serif',
                          fontSize: '14px',
                          color: 'var(--cream-muted)',
                        }}
                      >
                        {item.name} × {item.quantity}
                      </span>
                      <span
                        style={{
                          fontFamily: 'var(--font-inter), sans-serif',
                          fontSize: '14px',
                          fontWeight: 500,
                          color: 'var(--cream)',
                        }}
                      >
                        ${(item.price * item.quantity).toFixed(2)}
                      </span>
                    </div>
                  ))}
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      fontSize: '16px',
                      fontWeight: 500,
                      marginTop: '16px',
                      paddingTop: '16px',
                      borderTop: '1px solid rgba(201,123,26,0.1)',
                    }}
                  >
                    <span>Subtotal:</span>
                    <span>${getCartTotal().toFixed(2)}</span>
                  </div>
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      fontSize: '16px',
                      fontWeight: 500,
                      marginTop: '8px',
                    }}
                  >
                    <span>Shipping:</span>
                    <span>Free</span>
                  </div>
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      fontSize: '20px',
                      fontWeight: 600,
                      marginTop: '16px',
                      paddingTop: '16px',
                      borderTop: '1px solid rgba(201,123,26,0.15)',
                    }}
                  >
                    <span>Total:</span>
                    <span>${getCartTotal().toFixed(2)}</span>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  style={{
                    width: '100%',
                    maxWidth: '500px',
                    fontFamily: 'var(--font-inter), sans-serif',
                    fontSize: '16px',
                    fontWeight: 500,
                    letterSpacing: '2px',
                    textTransform: 'uppercase',
                    color: 'var(--bg-deep)',
                    background: 'linear-gradient(135deg, var(--amber), var(--amber-light))',
                    padding: '18px 24px',
                    borderRadius: '2px',
                    display: 'block',
                    margin: '32px auto 0',
                    boxShadow: isLoading ? 'none' : '0 0 50px rgba(201,123,26,0.45)',
                    transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                    cursor: isLoading ? 'not-allowed' : 'pointer',
                  }}
                  onMouseEnter={(e) => {
                    if (!isLoading) {
                      (e.target as HTMLElement).style.transform = 'scale(1.03)';
                      (e.target as HTMLElement).style.boxShadow = '0 0 60px rgba(201,123,26,0.55)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isLoading) {
                      (e.target as HTMLElement).style.transform = 'scale(1)';
                      (e.target as HTMLElement).style.boxShadow = '0 0 50px rgba(201,123,26,0.45)';
                    }
                  }}
                >
                  {isLoading ? 'Processing Order...' : 'Place Order'}
                </button>
              </form>
            </div>
          </section>
        )}

        {/* Empty Cart Redirect */}
        {cart.length === 0 && (
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
                Add some products to your cart before proceeding to checkout.
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