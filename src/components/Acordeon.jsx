// src/components/Acordeon.jsx
import { useState } from "react";

export const Acordeon = ({ titulo, contenido, imagen }) => {
  const [abierto, setAbierto] = useState(false);

  return (
    <article className={`acordeon__bloque ${abierto ? "acordeon__bloque--activo" : ""}`}>
      <div className="acordeon__titulo" onClick={() => setAbierto(!abierto)}>
        <h2 className="acordeon__h2">{titulo}</h2>
      </div>

      <div className="acordeon__contenido" style={{ height: abierto ? "auto" : 0 }}>
        {imagen && (
          <img className="acordeon__img" src={imagen} alt={titulo} />
        )}

        {Array.isArray(contenido) && contenido.length > 0 && (
          <ul>
            {contenido.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        )}
      </div>
    </article>
  );
};