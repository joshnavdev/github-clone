import Header from './Header';
import Hero from './Hero';
import Productivity from './Productivity';
import './index.css';

function App() {
  return (
    <>
      <Header />
      <main className="overflow-hidden" style={{ fontFamily: 'Mona Sans' }}>
        <div className="relative mr-auto ml-auto">
          <picture>
            <img
              src="https://github.githubassets.com/images/modules/site/home-campaign/hero-bg.webp"
              alt=""
              width="4377"
              className="absolute right-[-738px] max-w-[calc(230vw+1670px)]"
            />
          </picture>
          <Hero />
          <Productivity />
        </div>
      </main>
    </>
  );
}

export default App;
