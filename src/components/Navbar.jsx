import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { LuLeaf, LuShoppingBag, LuArrowUpRight } from "react-icons/lu";
import "./Navbar.css";
const Navbar = () => {
  const total = useSelector((state) =>
    state.cart.cartItems.reduce((sum, item) => sum + item.quantity, 0),
  );
  return (
    <>
      <div className="announcement">
        A little green goes a long way.{" "}
        <span>
          Find your next favorite plant <LuArrowUpRight aria-hidden="true" />
        </span>
      </div>
      <header className="navbar">
        <NavLink
          to="/"
          className="nursery-brand"
          aria-label="Paradise Nursery home"
        >
          <LuLeaf aria-hidden="true" />
          <span>
            paradise<small>NURSERY & PLANTS</small>
          </span>
        </NavLink>
        <nav aria-label="Main navigation">
          <NavLink to="/" end>
            Home
          </NavLink>
          <NavLink to="/products">Our plants</NavLink>
          <NavLink
            to="/cart"
            className="cart-link"
            aria-label={`Shopping bag, ${total} ${total === 1 ? "item" : "items"}`}
          >
            <LuShoppingBag aria-hidden="true" />
            <span className="bag-label">Your bag</span>
            <span className="cart-count">{total}</span>
          </NavLink>
        </nav>
      </header>
    </>
  );
};
export default Navbar;
