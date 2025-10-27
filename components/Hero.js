export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__content">
        <p className="hero__eyebrow">Neighborhood Coffee</p>
        <h1 className="hero__title">Morning Tide Coffee</h1>
        <p className="hero__body">
          Thoughtful, sustainable coffee crafted with seasonal ingredients and served with care.
        </p>
        <div className="hero__details">
          <span>Open daily 7a&ndash;5p</span>
          <span>&bull;</span>
          <span>123 Harbor Street, Portland</span>
        </div>
      </div>
      <div className="hero__media" aria-hidden="true">
        <div className="hero__media-overlay" />
      </div>
    </section>
  );
}
