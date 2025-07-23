import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import PrizePool from './components/PrizePool';
import Tracks from './components/Tracks';
import Timeline from './components/Timeline';
import CodeFuryWall from './components/CodeFuryWall';
import Game from './components/Game';
import Sponsors from './components/Sponsors';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ParticleBackground from './components/ParticleBackground';
import BackToTopButton from './components/BackToTopButton';

function App() {
  return (
      <ParticleBackground />
      <Header />
      <main>
        <Hero />
        <About />
        <PrizePool />
        <Tracks />
        <Timeline />
        <CodeFuryWall />
        <Game />
        <Sponsors />
        <FAQ />
        <Contact />
      </main>
      <BackToTopButton />
      <Footer />
    </div>
  );
}

export default App;