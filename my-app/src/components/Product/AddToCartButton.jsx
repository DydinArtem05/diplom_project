// components/Product/AddToCartButton.js
import React from 'react';

const AddToCartButton = ({ onAddToCartClick }) => {
  return (
    <button onClick={onAddToCartClick}>Add to Cart</button>
  );
};

export default AddToCartButton;
