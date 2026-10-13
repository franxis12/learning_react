import { useSearchParams } from "react-router-dom";
import products from "../data/productsData";
import ProductCard from "../components/ProductCard";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import "./ProductPage.css";
const ProductsPage = () => {
  const [params, setParams] = useSearchParams();
  const category = params.get("category") || "all";
  const dispatch = useDispatch();
  const visible = products.filter((plant) =>
    category === "aromatic"
      ? plant.category === "Aromatic Plants"
      : category === "medicinal"
        ? plant.category === "Medicinal Plants"
        : true,
  );
  return (
    <main className="productsView">
      <span className="eyebrow">THE PARADISE COLLECTION</span>
      <h1>Find your kind of green.</h1>
      <p className="collection-description">
        Small plants. Beautiful possibilities. Explore the collection and make a
        little space for nature.
      </p>
      <div className="product-filters" aria-label="Plant categories">
        {[
          ["all", "All plants"],
          ["aromatic", "Aromatic plants"],
          ["medicinal", "Medicinal plants"],
        ].map(([value, label]) => (
          <button
            key={value}
            aria-pressed={category === value}
            onClick={() =>
              setParams(value === "all" ? {} : { category: value })
            }
          >
            {label}
          </button>
        ))}
        <span>{visible.length} plants</span>
      </div>
      <div className="product-section">
        {visible.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={(plant) => dispatch(addToCart(plant))}
          />
        ))}
      </div>
      <p className="shop-note">
        A portfolio shop demo. Prices are examples; no orders or payments are
        processed.
      </p>
    </main>
  );
};
export default ProductsPage;
