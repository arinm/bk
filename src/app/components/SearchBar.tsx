"use client";

import styles from '../styles/SearchBar.module.scss';

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar = ({ onSearch }: SearchBarProps) => {
  return (
      <input
        className={styles.searchInput}
        type="text"
        placeholder="Search by title or author..."
        onChange={(e) => onSearch(e.target.value)}
    />
  );
};

export default SearchBar;