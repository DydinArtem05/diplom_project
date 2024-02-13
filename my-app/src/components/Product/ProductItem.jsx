// components/Product/ProductItem.js
import React from 'react';
import ProductDetail from './ProductDetail';
import styles from '../../styles/Product.module.css';
import AddToCartButton from './AddToCartButton';

const ProductItem = ({ product }) => {
  return (
    <div className={styles.productItem}>
      <ProductDetail product={product} />
      <AddToCartButton onAddToCartClick={() => console.log(`Added ${product.name} to cart`)} />
    </div>
  );
};

export default ProductItem;
