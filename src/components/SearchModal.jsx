import React from "react";
import { useNavigate } from "react-router-dom";

// SearchModal component to handle the search results modal
const SearchModal = ({
  searchQuery,
  setIsSearchModalOpen,
  filteredProducts,
  setSearchQuery,
}) => {
  const navigate = useNavigate();

  const handleProductClick = (product) => {
    setIsSearchModalOpen(false);
    setSearchQuery("");
    navigate(`/product/${product.id}`, { state: { product } });
  };

  return (
    <div className="search-modal">
      <div className="search-modal-content">
        <button
          className="close-modal"
          onClick={() => setIsSearchModalOpen(false)}
        >
          ×
        </button>
        <h3>Search Results</h3>
        {filteredProducts.length > 0 ? (
          <ul className="search-results">
            {filteredProducts.map((product) => (
              <li
                key={product.id}
                className="search-result-item"
                onClick={() => handleProductClick(product)}
                style={{ cursor: "pointer" }}
              >
                <img src={product.image} alt={product.name} />
                <div>{product.name}</div>
              </li>
            ))}
          </ul>
        ) : (
          <p>No products found.</p>
        )}
      </div>
    </div>
  );
};

export default SearchModal;
