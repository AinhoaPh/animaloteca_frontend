const Inicio = () => {
    return (
      <main className="container">
        <section className="hero">
          <h1 className="hero__h1">Animaloteca</h1>
        </section>
  
        <article className="card">
          <picture>
            <img
              className="card__img"
              src="/img/recetas.jpg"
              alt="imagen dietas"
              loading="lazy"
            />
          </picture>
          <div className="card__contenido">
            <h3 className="card__h3">Recetas</h3>
            <p className="card__p">
              En el apartado de Recetas encontrarás una variedad de recetas
              fáciles que nos podrán ayudar en diversas situaciones, como la
              receta de Sopa de Moro que ayuda con la diarrea, así como una
              receta para gatos deshidratados o unos snacks para aves, etc.
            </p>
          </div>
        </article>
  
        <article className="card">
          <picture>
            <img
              className="card__img"
              src="/img/consejos.jpg"
              alt="imagen tips"
              loading="lazy"
            />
          </picture>
          <div className="card__contenido">
            <h3 className="card__h3">Consejos</h3>
            <p className="card__p">
              En el apartado de Consejos compartimos ideas y recomendaciones tanto
              generales como consejos clasificados por las distintas estaciones
              del año que ayudarán a mejorar la calidad de vida del animal. Desde
              primeros auxilios, alimentos tóxicos o prevención de lesiones, todo
              para garantizar su bienestar.
            </p>
          </div>
        </article>
  
        <article className="card">
          <picture>
            <img
              className="card__img"
              src="/img/protect.jpg"
              alt="imagen protectoras"
              loading="lazy"
            />
          </picture>
          <div className="card__contenido">
            <h3 className="card__h3">Protectoras & Refugios</h3>
            <p className="card__p">
              ABANDONAR NO ES UNA OPCIÓN. Existen muchas alternativas antes de
              abandonar a un animal. En el apartado de Protectoras & Refugios,
              encontrarás una amplia variedad de centros de toda España donde
              intentarán darle otro hogar. También hay centros de recuperación que
              cuidan y tratan a los animales para reintegrarlos en su hábitat.
            </p>
          </div>
        </article>
  
        <article className="card">
          <picture>
            <img
              className="card__img"
              src="/img/logo.jpg"
              alt="imagen Conócenos"
              loading="lazy"
            />
          </picture>
          <div className="card__contenido">
            <h3 className="card__h3">Conócenos</h3>
            <p className="card__p">
              ¿Cuál es nuestra misión? Ante todo, como amantes de los animales,
              creemos que el desconocimiento puede llevar a decisiones equivocadas
              y que la información, junto con la empatía, puede marcar la
              diferencia. Animaloteca es un proyecto sin ánimo de lucro cuyo
              objetivo es conocer y entender mejor el mundo animal.
            </p>
          </div>
        </article>
      </main>
    );
  };
  
  export default Inicio;