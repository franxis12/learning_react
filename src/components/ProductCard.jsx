import { useEffect, useRef, useState } from "react";
import { LuPlus, LuCheck, LuLeaf } from "react-icons/lu";
import "./ProductCard.css";
export const PlantImage = ({ src, alt }) => {
  const [failed, setFailed] = useState(false);
  return failed ? (
    <div
      className="plant-placeholder"
      role="img"
      aria-label={`${alt} — photo unavailable`}
    >
      <LuLeaf />
      <span>{alt}</span>
    </div>
  ) : (
    <img src={src} alt={alt} loading="lazy" onError={() => setFailed(true)} />
  );
};
const ProductCard = ({ product, onAddToCart }) => {
  const [added, setAdded] = useState(false);
  const timer = useRef();
  useEffect(() => () => clearTimeout(timer.current), []);
  const add = () => {
    onAddToCart(product);
    setAdded(true);
    timer.current = setTimeout(() => setAdded(false), 1800);
  };
  return (
    <article className="product-card">
      <div className="plant-photo">
        <PlantImage src={product.image} alt={product.name} />
        <span>
          {product.category === "Aromatic Plants" ? "AROMATIC" : "MEDICINAL"}
        </span>
      </div>
      <div className="product-details">
        <div className="plant-name">
          <h2>{product.name}</h2>
          <span>${product.price.toFixed(2)}</span>
        </div>
        <p>{product.description}</p>
        <button
          onClick={add}
          disabled={added}
          aria-label={
            added
              ? `${product.name} added to bag`
              : `Add ${product.name} to bag`
          }
        >
          {added ? (
            <>
              <LuCheck /> Added to bag
            </>
          ) : (
            <>
              Add to bag <LuPlus />
            </>
          )}
        </button>
      </div>
    </article>
  );
};
export default ProductCard;
