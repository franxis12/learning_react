import { useState } from 'react';
import './ProductCard.css';

const ProductCard = ({ product, onAddToCart }) => {
  const [added, setAdded] = useState(false);

  const handleClick = () => {
    onAddToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000); // vuelve a estado normal después de 2s
  };

  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p className="description">{product.description}</p>
      <p className="price">${product.price.toFixed(2)}</p>
      <button
        onClick={handleClick}
        disabled={added}
        className={added ? 'added-button' : ''}
      >
        {added ? "Added" : "Add to Cart"}
      </button>
    </div>
  );
};

export default ProductCard;