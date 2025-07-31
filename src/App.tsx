import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import PrizePool from './components/PrizePool';
import Tracks from './components/Tracks';
import Timeline from './components/Timeline';
import CodeFuryWall from './components/CodeFuryWall';
import PastWinners from './components/PastWinners';
import Game from './components/Game';
import Sponsors from './components/Sponsors';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ParticleBackground from './components/ParticleBackground';
import BackToTopButton from './components/BackToTopButton';

import { Analytics } from "@vercel/analytics/next"

function App() {
  return (
    <div className="min-h-screen bg-gray-950 text-white relative overflow-x-hidden">
      <ParticleBackground />
      <Header />
      <main>
        <Hero />
        <About />
        <Tracks />
        <PrizePool />
        <Timeline />
        <CodeFuryWall />
        <PastWinners />
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