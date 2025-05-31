import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { FaShoppingCart } from 'react-icons/fa';
import './Navbar.css';
import logo from '../assets/logo.png'; // Ruta del logo

const Navbar = () => {
  const cartItems = useSelector(state => state.cart.cartItems);
  const totalQuantity = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <nav className="navbar">
      <Link to="/">
        <img src={logo} alt="Paradise Nursery Logo" className="logo" />
      </Link>

      <Link to="/products">Productos</Link>

      <Link to="/cart" className="cart-link">
        <FaShoppingCart size={24} />
        {totalQuantity > 0 && (
          <span className="cart-count">{totalQuantity}</span>
        )}
      </Link>
    </nav>
  );
};

export default Navbar;