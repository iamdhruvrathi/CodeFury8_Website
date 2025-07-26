import { useState, useEffect } from 'react';
import { Calendar, Zap } from 'lucide-react';
import cslogo from '../assets/image.png';
import ieeelogo from '../assets/ieee-logo.png';

const Hero = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  const [isClosed, setIsClosed] = useState(false);

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

  useEffect(() => {
    const now = new Date();
    const closingTime = new Date('2025-08-20T13:00:00');
    if (now >= closingTime) setIsClosed(true);
    const interval = setInterval(() => {
      if (new Date() >= closingTime) setIsClosed(true);
    }, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative pt-20 px-4">
      <div className="container mx-auto text-center">
        {/* Title */}
        <div className="mb-10 animate-fade-in">
          <div className="relative inline-block w-full">
            <h1 className="text-[2rem] sm:text-6xl md:text-7xl lg:text-8xl xl:text-[9rem] font-orbitron font-extrabold tracking-tight leading-tight text-center">
              <span className="text-cyan-400 glow-text">Code</span>
              <span className="text-fuchsia-500 glow-text">Fury</span>
              <span className="text-white ml-2">8.0</span>
            </h1>
            <p className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-[80%] sm:w-[60%] text-xs sm:text-sm md:text-lg italic text-purple-300 font-poppins text-center">
              Fury in Code, Ready to Explode
            </p>
          </div>

          {/* Tagline */}
          <p className="font-semibold text-base sm:text-xl lg:text-2xl text-purple-100 font-poppins mt-20">
            Annual National-Level Hackathon
          </p>

          {/* Event Date */}
          <div className="flex items-center justify-center space-x-2 mt-4 text-cyan-400 font-poppins">
            <Calendar className="w-5 h-5 sm:w-6 sm:h-6" />
            <span className="text-sm sm:text-lg md:text-xl font-medium">
              22nd, 23rd & 24th August 2025
            </span>
          </div>
        </div>

        {/* Countdown */}
<div className="grid grid-cols-4 md:grid-cols-4 gap-2 sm:gap-4 max-w-2xl mx-auto mb-8 sm:mb-12">
  {Object.entries(timeLeft).map(([unit, value]) => (
    <div
      key={unit}
      className="p-2 sm:p-3 md:p-4 text-center hover:scale-105 transition rounded-lg sm:rounded-xl md:rounded-2xl glass-card shadow-lg"
    >
      <div className="text-xl sm:text-2xl md:text-2xl font-bold text-neonCyan">
        {value.toString().padStart(2, '0')}
      </div>
      <div className="text-[0.65rem] sm:text-xs md:text-sm uppercase text-gray-400 mt-1 tracking-wider">
        {unit}
      </div>
    </div>
  ))}
</div>


        {/* CTA Button */}
        <div className="flex justify-center mb-12">
          {isClosed ? (
            <button
              disabled
              className="border-2 glow-button text-white bg-gray-600 px-6 py-3 rounded-full font-semibold text-lg tracking-wide cursor-not-allowed"
            >
              Registration Closed
            </button>
          ) : (
            <button
              className="glow-button bg-gradient-to-r from-neonCyan to-neonPurple text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 hover:bg-cyan-400"
            >
              <Zap className="w-5 h-5 inline mr-2" />
              Register Now
            </button>
          )}
        </div>

        {/* Logos */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12">
          <img
            src={ieeelogo}
            alt="IEEE Logo"
            className="w-24 sm:w-28 md:w-32 h-auto object-contain"
          />
          <div className="text-gray-500 text-3xl sm:text-4xl font-semibold">×</div>
          <img
            src={cslogo}
            alt="CS Logo"
            className="w-40 sm:w-56 md:w-72 h-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
