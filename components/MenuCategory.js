export default function MenuCategory({ category }) {
  return (
    <section id={category.id} className="menu-category">
      <header className="menu-category__header">
        <h2>{category.name}</h2>
        <p>{category.description}</p>
      </header>
      <ul className="menu-category__items">
        {category.items.map((item) => (
          <li key={item.name} className="menu-item">
            <div className="menu-item__heading">
              <h3>{item.name}</h3>
              <span className="menu-item__price">${item.price.toFixed(2)}</span>
            </div>
            <p className="menu-item__description">{item.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
