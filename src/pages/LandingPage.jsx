import bgImage from '../assets/landing-bg.jpg';
import './LandingPage.css';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="landing">
      <div
        className="blur-background"
        style={{ backgroundImage: `url(${bgImage})` }}
      ></div>

      <div className="landing-content">
        <h1>Welcome to Paradise Nursery</h1>
        <p>Explore our collection of aromatic and medicinal plants</p>
        <button onClick={() => navigate('/products')}>View Products</button>
      </div>
    </div>
  );
};

export default LandingPage;