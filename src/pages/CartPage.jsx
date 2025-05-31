import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, increaseQuantity, decreaseQuantity } from '../redux/cartSlice';
import { Link } from 'react-router-dom';

const CartPage = () => {
  const cartItems = useSelector(state => state.cart.cartItems);
  const dispatch = useDispatch();

  const getTotal = () => {
    return cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2);
  };

  return (
    <div>
      <h2>Tu carrito</h2>

      {cartItems.length === 0 ? (
        <p>Tu carrito está vacío.</p>
      ) : (
        <div>
          {cartItems.map(item => (
            <div key={item.id} style={{ border: '1px solid #ccc', marginBottom: '1rem', padding: '1rem' }}>
              <img src={item.image} alt={item.name} width={100} />
              <h3>{item.name}</h3>
              <p>Precio unitario: ${item.price.toFixed(2)}</p>
              <p>Cantidad: {item.quantity}</p>
              <p>Total: ${(item.price * item.quantity).toFixed(2)}</p>
              <button onClick={() => dispatch(decreaseQuantity(item.id))}>-</button>
              <button onClick={() => dispatch(increaseQuantity(item.id))}>+</button>
              <button onClick={() => dispatch(removeFromCart(item.id))}>Eliminar</button>
            </div>
          ))}

          <h3>Total del carrito: ${getTotal()}</h3>

          <div>
            <Link to="/products"><button>Seguir comprando</button></Link>
            <button onClick={() => alert('Gracias por tu compra')}>Checkout</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;