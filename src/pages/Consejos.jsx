// src/pages/Consejos.jsx
import { useEffect, useState } from 'react';
import { CardConsejo } from '../components/CardConsejo';

const Consejos = () => {
  const [consejo, setConsejo] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const API = import.meta.env.VITE_BACKEND_API;

  useEffect(() => {
    traerConsejos();
  }, []);

  const traerConsejos = async () => {
    try {
      setLoading(true);
      setError("");

      const response = await fetch(`${API}/consejos`);

      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }

      const data = await response.json();
      setConsejo(data.data || []);
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="main">
      <h1>Consejos</h1>

      {loading && <p>Cargando consejos...</p>}
      {error && <p style={{ color: 'red' }}>Error: {error}</p>}

      <div className="container">
        {consejo.map((item) => (
          <CardConsejo key={item._id} {...item} />
        ))}
      </div>
    </main>
  );
};

export default Consejos;