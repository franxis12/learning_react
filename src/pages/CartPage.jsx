import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, increaseQuantity, decreaseQuantity } from '../redux/cartSlice';
import { Link } from 'react-router-dom';
import './CartPage.css';

const CartPage = () => {
  const cartItems = useSelector(state => state.cart.cartItems);
  const dispatch = useDispatch();

  const getTotal = () => {
    return cartItems
      .reduce((acc, item) => acc + item.price * item.quantity, 0)
      .toFixed(2);
  };

  return (
    <div className="cart-container">
      <h2 className="cart-title">Your Cart</h2>

      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cartItems.map(item => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.name} />
              <div className="cart-details">
                <h3>{item.name}</h3>
                <p>Unit Price: ${item.price.toFixed(2)}</p>
                <p>Quantity: {item.quantity}</p>
                <p>Total: ${(item.price * item.quantity).toFixed(2)}</p>

                <div className="cart-actions">
                  <button onClick={() => dispatch(decreaseQuantity(item.id))}>-</button>
                  <button onClick={() => dispatch(increaseQuantity(item.id))}>+</button>
                  <button onClick={() => dispatch(removeFromCart(item.id))}>Remove</button>
                </div>
              </div>
            </div>
          ))}

          <div className="cart-total">
            Cart Total: ${getTotal()}
          </div>

          <div className="cart-buttons">
            <Link to="/products">
              <button>Continue Shopping</button>
            </Link>
            <button onClick={() => alert('Thank you for your purchase!')}>Checkout</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;