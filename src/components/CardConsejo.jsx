// src/components/CardConsejo.jsx

export const CardConsejo = ({ titulo, categoria, imagen, contenido }) => {
    return (
      <div className="card">
        <h3>{titulo}</h3>
  
        {imagen && <img src={imagen} alt={titulo} />}
  
        <ul>
          <li><strong>Categoría:</strong> {categoria}</li>
        </ul>
  
        {contenido && contenido.length > 0 && (
          <>
            <h4>Consejos:</h4>
            <ul>
              {contenido.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </>
        )}
      </div>
    );
  };