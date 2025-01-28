"use client";

import { useState } from "react";
import { useCart } from "../context/CartContext";
import { FaShoppingCart } from "react-icons/fa";
import styles from "../styles/CartSidebar.module.scss";

const CartSidebar = () => {
  const { cart, removeFromCart } = useCart();
  const [isCartVisible, setIsCartVisible] = useState(false);

  const totalPrice = cart.reduce((sum, book) => sum + book.price, 0);

  return (
    <>
      <button
        className={styles.cartIcon}
        onClick={() => setIsCartVisible(!isCartVisible)}
      >
        <FaShoppingCart />
        {cart.length > 0 && (
          <span className={styles.cartCount}>{cart.length}</span>
        )}
      </button>
      <div
        className={`${styles.sidebar} ${
          isCartVisible ? styles.visible : "none"
        }`}
      >
        <h2>Shopping Cart</h2>
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <>
            <ul>
              {cart.map((book) => (
                <li key={book.id}>
                  <span>{book.title}</span>
                  <span>${book.price.toFixed(2)}</span>
                  <button onClick={() => removeFromCart(book.id)}>
                    Remove
                  </button>
                </li>
              ))}
            </ul>
            <div className={styles.cartTotal}>
              <p>Total: ${totalPrice.toFixed(2)}</p>
              <button onClick={() => alert("Order submitted successfully!")}>
                Submit Order
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default CartSidebar;
