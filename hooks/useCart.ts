import { useState, useEffect } from 'react';

export interface CartItem {
  id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

/* ----- Cart Store (singleton) ----- */
type Listener = (cart: CartItem[]) => void;

class CartStore {
  private cart: CartItem[] = [];
  private listeners: Set<Listener> = new Set();
  private readonly isClient: boolean;

  constructor() {
    // Check if we are on the client side
    this.isClient = typeof window !== 'undefined';
    // Load from localStorage only on client
    if (this.isClient) {
      const saved = localStorage.getItem('amaraCart');
      if (saved) {
        try {
          this.cart = JSON.parse(saved);
        } catch (e) {
          console.error('Failed to parse cart from localStorage', e);
          this.cart = [];
        }
      }
    }
  }

  getCart(): CartItem[] {
    return this.cart;
  }

  subscribe(listener: Listener): () => void {
    this.listeners.add(listener);
    // Provide initial value
    listener(this.cart);
    return () => {
      this.listeners.delete(listener);
    };
  }

  private persistAndNotify() {
    if (this.isClient) {
      localStorage.setItem('amaraCart', JSON.stringify(this.cart));
    }
    this.listeners.forEach((listener) => listener(this.cart));
  }

  addToCart(item: Omit<CartItem, 'quantity'>) {
    const existing = this.cart.find((i) => i.id === item.id);
    if (existing) {
      this.cart = this.cart.map((i) =>
        i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
      );
    } else {
      this.cart = [...this.cart, { ...item, quantity: 1 }];
    }
    this.persistAndNotify();
  }

  removeFromCart(id: string) {
    this.cart = this.cart.filter((i) => i.id !== id);
    this.persistAndNotify();
  }

  updateQuantity(id: string, quantity: number) {
    if (quantity <= 0) {
      this.removeFromCart(id);
      return;
    }
    this.cart = this.cart.map((i) =>
      i.id === id ? { ...i, quantity } : i
    );
    this.persistAndNotify();
  }

  clearCart() {
    this.cart = [];
    this.persistAndNotify();
  }

  getCartTotal(): number {
    return this.cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  }

  getCartItemCount(): number {
    return this.cart.reduce((sum, item) => sum + item.quantity, 0);
  }
}

// Export a singleton instance
export const cartStore = new CartStore();

/* ----- Hook ----- */
export const useCart = () => {
  const [cart, setCart] = useState<CartItem[]>(cartStore.getCart());

  useEffect(() => {
    const handleChange = (newCart: CartItem[]) => {
      setCart(newCart);
    };
    const unsubscribe = cartStore.subscribe(handleChange);
    return unsubscribe;
  }, []);

  // Expose the same methods as before, delegating to the store
  const addToCart = (item: Omit<CartItem, 'quantity'>) => {
    cartStore.addToCart(item);
  };
  const removeFromCart = (id: string) => {
    cartStore.removeFromCart(id);
  };
  const updateQuantity = (id: string, quantity: number) => {
    cartStore.updateQuantity(id, quantity);
  };
  const clearCart = () => {
    cartStore.clearCart();
  };
  const getCartTotal = () => {
    return cartStore.getCartTotal();
  };
  const getCartItemCount = () => {
    return cartStore.getCartItemCount();
  };

  return {
    cart,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    getCartTotal,
    getCartItemCount
  };
};