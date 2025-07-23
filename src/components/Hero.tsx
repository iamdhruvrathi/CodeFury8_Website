import { useState, useEffect } from 'react';
import { Calendar, Users, Zap } from 'lucide-react';
import cslogo from '../assets/cs-logo.png';
import ieeelogo from '../assets/ieee-logo.png'; 


const Hero = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const targetDate = new Date('2025-08-23T00:00:00').getTime();
    
    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      }
    };

    updateCountdown();
    const timer = setInterval(updateCountdown, 1000);
    return () => clearInterval(timer);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative pt-20">
      <div className="container mx-auto px-6 text-center">
        {/* Main Title */}
        <div className="mb-8 animate-fade-in">
          <h1 className="text-6xl md:text-8xl font-bold mb-4">
            <span className="text-cyan-400 glow-text">Code</span>
            <span className="text-cyan-400 glow-text">Fury</span>
          </h1>
          <div className="text-4xl md:text-6xl font-bold text-white mb-6">8.0</div>
          <p className="text-xl md:text-2xl text-purple-300 max-w-4xl mx-auto leading-relaxed">
            Annual National-Level Hackathon
          </p>
          <div className="flex items-center justify-center space-x-4 mt-4 text-cyan-400">
            <Calendar className="w-6 h-6" />
            <span className="text-lg font-semibold">22nd, 23rd & 24th August 2025</span>
          </div>          
        </div>

        {/* Countdown Timer */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto mb-12">
          {Object.entries(timeLeft).map(([unit, value]) => (
            <div key={unit} className="glass-card p-4 text-center hover:scale-105 transition">
  <div className="text-3xl md:text-4xl font-bold text-neonCyan">
    {value.toString().padStart(2, '0')}
  </div>
  <div className="text-sm uppercase text-gray-400 mt-1 tracking-wider">
    {unit}
  </div>
</div>

          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
          <button
  className="glow-button bg-gradient-to-r from-neonCyan to-neonPurple hover:from-cyan-300 hover:to-pink-400 text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105"
>
  <Zap className="w-5 h-5 inline mr-2" />
  Register Now
</button>

          <button
            onClick={() => scrollToSection('#tracks')}
            className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-gray-900 font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105"
          >
            <Users className="w-5 h-5 inline mr-2" />
            Explore Tracks
          </button>
        </div>

        {/* Organizer Logos */}
<div className="flex flex-col sm:flex-row items-center justify-center space-y-6 sm:space-y-0 sm:space-x-12">
  <div className="flex items-center justify-center gap-6 sm:gap-12 text-center">
  {/* IEEE UVCE */}
  <div>
    <img
      src={ieeelogo}
      alt="IEEE UVCE Logo"
      className="w-16 h-16 object-contain mx-auto mb-1"
    />
    <p className="text-xs sm:text-sm text-gray-400 font-medium">IEEE UVCE</p>
  </div>

  {/* Divider */}
  <div className="text-gray-500 text-xl sm:text-2xl font-semibold">×</div>

  {/* Computer Society SIG */}
  <div>
    <img
      src={cslogo}
      alt="Computer Society Logo"
      className="w-21 h-16 object-contain mx-auto mb-1"
    />
    <p className="text-xs sm:text-sm text-gray-400 font-medium">Computer Society SIG</p>
  </div>
</div>
</div>

      </div>
    </section>
  );
};

export default Hero;