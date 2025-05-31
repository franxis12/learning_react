const ProductCard = ({ product, onAddToCart }) => {
  return (
    <div className="card">
      <img src={product.image} alt={product.name} width={150} />
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p><strong>${product.price.toFixed(2)}</strong></p>
      <button onClick={() => onAddToCart(product)}>Agregar al carrito</button>
    </div>
  );
};

export default ProductCard;