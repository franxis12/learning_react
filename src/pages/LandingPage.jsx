import { Link } from "react-router-dom";
import {
  LuArrowUpRight,
  LuLeaf,
  LuSprout,
  LuSun,
  LuDroplets,
} from "react-icons/lu";
import bgImage from "../assets/landing-bg.jpg";
import "./LandingPage.css";
const LandingPage = () => (
  <main className="landing">
    <section className="nursery-hero">
      <div className="hero-copy">
        <span className="eyebrow">
          <span /> A LITTLE CLOSER TO NATURE
        </span>
        <h1>
          Bring a little
          <br />
          <em>life</em> home.
        </h1>
        <p>
          A windowsill herb. A fragrant garden. A greener everyday.
          <br className="desktop" /> Discover plants that make your space feel
          more like you.
        </p>
        <div className="hero-actions">
          <Link to="/products" className="primary-link">
            Find your plant <LuArrowUpRight aria-hidden="true" />
          </Link>
          <a
            href="#our-roots"
            onClick={(event) => {
              event.preventDefault();
              document
                .getElementById("our-roots")
                ?.scrollIntoView({
                  behavior: window.matchMedia(
                    "(prefers-reduced-motion: reduce)",
                  ).matches
                    ? "instant"
                    : "smooth",
                });
            }}
            className="quiet-link"
          >
            Meet the nursery <span>↗</span>
          </a>
        </div>
        <div className="hero-footnote">
          <span className="leaf-stamp">
            <LuSprout aria-hidden="true" />
          </span>
          <div>
            Small beginnings.
            <br />
            <strong>Beautiful possibilities.</strong>
          </div>
          <span className="hero-count">
            16<span>plants to explore</span>
          </span>
        </div>
      </div>
      <div className="hero-photo">
        <img
          src={bgImage}
          alt="A sunlit garden with a stone path, flowering plants, and a small wooden bridge"
          fetchPriority="high"
        />
        <span className="photo-number">01 / THE GREEN LIFE</span>
        <div className="photo-caption">
          <span>
            A slower pace.
            <br />
            <em>A greener place.</em>
          </span>
          <span className="photo-arrow" aria-hidden="true">
            ↗
          </span>
        </div>
        <span className="round-stamp" aria-hidden="true">
          LET IT
          <br />
          <LuLeaf />
          GROW
        </span>
      </div>
    </section>
    <section className="values-strip" aria-label="Our collection">
      <div>
        <LuLeaf aria-hidden="true" />
        <span>Aromatic favorites</span>
      </div>
      <div>
        <LuSun aria-hidden="true" />
        <span>Everyday greenery</span>
      </div>
      <div>
        <LuDroplets aria-hidden="true" />
        <span>Rooted in possibility</span>
      </div>
      <div>
        <LuSprout aria-hidden="true" />
        <span>A little room to grow</span>
      </div>
    </section>
    <section className="collections" id="our-roots">
      <div className="section-intro">
        <div>
          <span className="eyebrow">FIND YOUR KIND OF GREEN</span>
          <h2>Good things take root.</h2>
        </div>
        <p>
          From kitchen companions to botanical favorites,
          <br />
          there’s something here for your own little paradise.
        </p>
      </div>
      <div className="collection-grid">
        <Link to="/products?category=aromatic" className="collection aromatic">
          <div>
            <span className="eyebrow">01 / AROMATIC PLANTS</span>
            <h3>
              A breath of
              <br />
              <em>something fresh.</em>
            </h3>
            <p>
              Lavender, mint, rosemary, and more.
              <br />
              Meet your next kitchen or garden companion.
            </p>
            <span className="collection-link">
              Explore 8 aromatic plants <LuArrowUpRight />
            </span>
          </div>
          <div className="botanical botanical-one" aria-hidden="true">
            <LuSprout />
          </div>
        </Link>
        <Link
          to="/products?category=medicinal"
          className="collection medicinal"
        >
          <div>
            <span className="eyebrow">02 / MEDICINAL PLANTS</span>
            <h3>
              Nature, in your
              <br />
              <em>own little corner.</em>
            </h3>
            <p>
              Aloe vera, chamomile, and other classics.
              <br />
              Discover a world of botanical variety.
            </p>
            <span className="collection-link">
              Explore 8 medicinal plants <LuArrowUpRight />
            </span>
          </div>
          <div className="botanical" aria-hidden="true">
            <LuLeaf />
          </div>
        </Link>
      </div>
    </section>
    <section className="closing-note">
      <LuSprout aria-hidden="true" />
      <p>
        You don’t need a big garden.
        <br />
        <em>Just a little space to start.</em>
      </p>
      <Link to="/products">
        Let’s grow something <LuArrowUpRight />
      </Link>
    </section>
    <footer className="nursery-footer">
      <span>
        paradise <small>NURSERY</small>
      </span>
      <p>A plant shop demo by Francis Martinez.</p>
      <Link to="/products">Explore the collection ↗</Link>
    </footer>
  </main>
);
export default LandingPage;
