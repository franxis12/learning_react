import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Bienvenido a Paradise Nursery</h1>
      <p>Descubre nuestras plantas aromáticas y medicinales</p>
      <button onClick={() => navigate('/products')}>Ver productos</button>
    </div>
  );
};

export default LandingPage;