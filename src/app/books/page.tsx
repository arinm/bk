"use client";

import { useState, useMemo } from "react";
import BookList from "../components/BookList";
import SearchBar from "../components/SearchBar";
import { useCart } from "../context/CartContext";

const BooksPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const { books } = useCart();

  const handleSearch = (query: string) => {
    if (query.length >= 3 || query.length === 0) {
      setSearchQuery(query);
    }
  };

  const filteredBooks = useMemo(() => {
    return books.filter(
      (book) =>
        book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        book.author.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery, books]);

  return (
    <div>
      <h1>Books Page</h1>
      <SearchBar onSearch={handleSearch} />
      <BookList books={filteredBooks} />
    </div>
  );
};

export default BooksPage;
