import Head from 'next/head';
import Hero from '../components/Hero';
import MenuNavigation from '../components/MenuNavigation';
import MenuCategory from '../components/MenuCategory';
import Footer from '../components/Footer';
import { menuCategories } from '../data/menu';

export default function Home() {
  return (
    <>
      <Head>
        <title>Morning Tide Coffee | Menu</title>
        <meta
          name="description"
          content="Explore the full menu for Morning Tide Coffee including espresso drinks, seasonal specialties, and small bites."
        />
      </Head>
      <div className="page">
        <Hero />
        <MenuNavigation categories={menuCategories} />
        <main className="menu">
          {menuCategories.map((category) => (
            <MenuCategory key={category.id} category={category} />
          ))}
        </main>
        <aside className="callout">
          <div className="callout__inner">
            <h2>Seasonal Single-Origin Spotlight</h2>
            <p>
              Currently featuring: Ethiopia Guji, natural process. Notes of blueberry, cacao nib, and candied orange
              peel.
            </p>
            <a className="callout__cta" href="#espresso">Try it as a pour over</a>
          </div>
        </aside>
        <Footer />
      </div>
    </>
  );
}
