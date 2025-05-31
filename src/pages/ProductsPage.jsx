import products from '../data/productsData';
import ProductCard from '../components/ProductCard';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice';

const ProductsPage = () => {
  const aromaticas = products.filter(p => p.category === "Aromáticas");
  const medicinales = products.filter(p => p.category === "Medicinales");

  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
  dispatch(addToCart(product));
  };

  return (
    <div>
      <h2>Aromáticas</h2>
      <div className="section">
        {aromaticas.map(product => (
          <ProductCard key={product.id} product={product} onAddToCart={handleAddToCart} />
        ))}
      </div>

      <h2>Medicinales</h2>
      <div className="section">
        {medicinales.map(product => (
          <ProductCard key={product.id} product={product} onAddToCart={handleAddToCart} />
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;