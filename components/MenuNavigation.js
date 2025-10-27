import { useState } from 'react';

export default function MenuNavigation({ categories }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <nav className={`menu-nav${expanded ? ' menu-nav--open' : ''}`}>
      <button
        className="menu-nav__toggle"
        type="button"
        onClick={() => setExpanded((prev) => !prev)}
        aria-expanded={expanded}
      >
        Browse Menu
      </button>
      <ul className="menu-nav__list">
        {categories.map((category) => (
          <li key={category.id}>
            <a href={`#${category.id}`} onClick={() => setExpanded(false)}>
              {category.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
