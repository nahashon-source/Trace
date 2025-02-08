function SearchBar({ searchTerm, setSearchTerm }) {
    return (
      <div className="search-container">
        <input
          type="text"
          className="search-bar"
          placeholder="Search for songs or artists."
value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
    )
  }

  export default SearchBar