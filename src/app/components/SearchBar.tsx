"use client";

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar = ({ onSearch }: SearchBarProps) => {
  return (
    <input
      type="text"
      placeholder="Search by title or author..."
      onChange={(e) => onSearch(e.target.value)}
    />
  );
};

export default SearchBar;
