import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
} from "../redux/cartSlice";
import { Link } from "react-router-dom";
import { LuShoppingBag, LuArrowUpRight } from "react-icons/lu";
import { PlantImage } from "../components/ProductCard";
import "./CartPage.css";
const CartPage = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();
  const [reviewed, setReviewed] = useState(false);
  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );
  const quantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  return (
    <main className="cart-container">
      <span className="eyebrow">YOUR LITTLE COLLECTION</span>
      <h1>Your growing bag.</h1>
      <p className="cart-intro">A little green is always a good idea.</p>
      {!cartItems.length ? (
        <section className="empty-bag">
          <LuShoppingBag aria-hidden="true" />
          <h2>Room for something green.</h2>
          <p>Your bag is empty. Let’s find a plant that feels like you.</p>
          <Link to="/products" className="primary-link">
            Explore the plants <LuArrowUpRight />
          </Link>
        </section>
      ) : (
        <div className="cart-layout">
          <div>
            {cartItems.map((item) => (
              <article key={item.id} className="cart-item">
                <div className="cart-image">
                  <PlantImage src={item.image} alt={item.name} />
                </div>
                <div className="cart-details">
                  <span className="eyebrow">{item.category}</span>
                  <h2>{item.name}</h2>
                  <p>${item.price.toFixed(2)} each</p>
                  <div className="cart-actions">
                    <div className="quantity-control">
                      <button
                        aria-label={`Decrease ${item.name} quantity`}
                        disabled={item.quantity <= 1}
                        onClick={() => {
                          dispatch(decreaseQuantity(item.id));
                          setReviewed(false);
                        }}
                      >
                        −
                      </button>
                      <span aria-label={`${item.name} quantity`}>
                        {item.quantity}
                      </span>
                      <button
                        aria-label={`Increase ${item.name} quantity`}
                        onClick={() => {
                          dispatch(increaseQuantity(item.id));
                          setReviewed(false);
                        }}
                      >
                        +
                      </button>
                    </div>
                    <button
                      className="remove"
                      onClick={() => {
                        dispatch(removeFromCart(item.id));
                        setReviewed(false);
                      }}
                    >
                      Remove <span className="sr-only">{item.name}</span>
                    </button>
                  </div>
                </div>
                <strong className="line-total">
                  ${(item.price * item.quantity).toFixed(2)}
                </strong>
              </article>
            ))}
            <Link to="/products" className="continue-link">
              ← Keep exploring
            </Link>
          </div>
          <aside className="cart-summary">
            <span className="eyebrow">A LITTLE PARADISE</span>
            <h2>Your selection</h2>
            <div>
              <span>
                {quantity} {quantity === 1 ? "plant" : "plants"}
              </span>
              <span>${total.toFixed(2)}</span>
            </div>
            <div className="cart-total">
              <span>Subtotal</span>
              <strong>${total.toFixed(2)}</strong>
            </div>
            <button className="primary-link" onClick={() => setReviewed(true)}>
              Review demo bag <LuArrowUpRight />
            </button>
            <p>
              This is a portfolio demo. No orders or payments are processed.
            </p>
            {reviewed && (
              <p className="review-message" role="status">
                Your selection is ready: {quantity}{" "}
                {quantity === 1 ? "plant" : "plants"} totaling $
                {total.toFixed(2)}. Thanks for exploring Paradise Nursery!
              </p>
            )}
          </aside>
        </div>
      )}
    </main>
  );
};
export default CartPage;
