"use client";

import { Book } from "../types";
import { useCart } from "../context/CartContext";
import styles from "../styles/BookList.module.scss";

interface BookListProps {
  books: Book[];
}

const BookList = ({ books }: BookListProps) => {
  const { addToCart } = useCart();

  return (
    <div className={styles.bookList}>
      {books.map((book) => (
        <div key={book.id} className={styles.bookItem}>
          <h3>{book.title}</h3>
          <p>Author: {book.author}</p>
          <p>Price: ${book.price.toFixed(2)}</p>
          <p>Stock: {book.stock}</p>
          <button disabled={book.stock === 0} onClick={() => addToCart(book)}>
            {book.stock === 0 ? "Out of Stock" : "Add to Cart"}
          </button>
        </div>
      ))}
    </div>
  );
};

export default BookList;
