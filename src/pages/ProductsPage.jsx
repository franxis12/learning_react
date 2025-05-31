import products from '../data/productsData';
import ProductCard from '../components/ProductCard';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice';
import "./ProductPage.css"

const ProductsPage = () => {
  const aromaticPlants = products.filter(p => p.category === "Aromatic Plants");
  const medicinalPlants = products.filter(p => p.category === "Medicinal Plants");

  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  return (
    <div className='productsView'>
      <h2>Aromatic Plants</h2>
      <div className="product-section">
        {aromaticPlants.map(product => (
          <ProductCard key={product.id} product={product} onAddToCart={handleAddToCart} />
        ))}
      </div>

      <h2>Medicinal Plants</h2>
      <div className="product-section">
        {medicinalPlants.map(product => (
          <ProductCard key={product.id} product={product} onAddToCart={handleAddToCart} />
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;