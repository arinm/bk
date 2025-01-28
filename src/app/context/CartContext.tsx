"use client";

import {
  createContext,
  useContext,
  useState,
  useCallback,
  useRef,
} from "react";
import { Book } from "../types";
import { mockData } from "../utils/mockData";

interface CartContextType {
  cart: Book[];
  books: Book[];
  addToCart: (book: Book) => void;
  removeFromCart: (bookId: number) => void;
  isCartVisible: boolean;
  setIsCartVisible: (visible: boolean) => void;
}

const CartContext = createContext<CartContextType | null>(null);

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cart, setCart] = useState<Book[]>([]);
  const [books, setBooks] = useState<Book[]>(mockData);
  const [isCartVisible, setIsCartVisible] = useState(false);
  const isProcessing = useRef(false);

  const addToCart = useCallback((book: Book) => {
    if (book.stock > 0) {
      setCart((prevCart: any) => [...prevCart, book]);

      setBooks((prevBooks: any[]) =>
        prevBooks.map((b) =>
          b.id === book.id ? { ...b, stock: b.stock - 1 } : b
        )
      );
    } else {
      alert("Out of stock!");
    }
  }, []);

  const removeFromCart = useCallback((bookId: number) => {
    setCart((prevCart: any[]) => {
      if (isProcessing.current) return prevCart;

      isProcessing.current = true;
      const removedBook = prevCart.find((book: { id: number; }) => book.id === bookId);

      if (removedBook) {
        console.log(removedBook);
        setBooks((prevBooks: any[]) =>
          prevBooks.map((b) =>
            b.id === bookId ? { ...b, stock: b.stock + 1 } : b
          )
        );
      }

      setTimeout(() => {
        isProcessing.current = false;
      }, 0);
      isProcessing.current = false;
      return prevCart.filter((book) => book.id !== bookId)
    });
  }, []);

  return (
    <CartContext.Provider
      value={{
        cart,
        books,
        addToCart,
        removeFromCart,
        isCartVisible,
        setIsCartVisible,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
