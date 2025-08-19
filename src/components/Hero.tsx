import { useState, useEffect } from 'react';
import { Calendar } from 'lucide-react';
import cslogo from '../assets/cs-logo.png';
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
    const targetDate = new Date('2025-08-22T10:00:00').getTime();

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
    const closingTime = new Date('2025-08-22T10:00:00');

    if (now >= closingTime) setIsClosed(true);

    const interval = setInterval(() => {
      if (new Date() >= closingTime) setIsClosed(true);
    }, 60000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative pt-32 px-4 bg-black">
      <div className="container mx-auto text-center">
        
        {/* Top Powered By Line */}
        <p className="text-sm sm:text-base md:text-lg text-white tracking-widest mb-3 font-[Orbitron] uppercase">
          Powered by IEEE UVCE CS
        </p>

        {/* Presented By Line */}
        <p className="text-xs sm:text-base md:text-lg text-fuchsia-300 tracking-widest mb-2 font-[Orbitron] uppercase">
          IEEE UVCE Computer Society Presents
        </p>

        {/* Title */}
        <div className="mb-6 animate-fade-in px-4">
          <h1 className="mt-6 font-orbitron font-extrabold tracking-tight leading-tight text-center text-3xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[9rem]">
            <span className="inline-block">
              <span className="text-cyan-400">Code</span>
              <span className="text-fuchsia-500">Fury</span>
            </span>
            <span className="text-white ml-2">8.0</span>
          </h1>

          {/* Tagline */}
          <p className="mt-4 text-base md:text-lg lg:text-xl italic text-purple-200 font-nunito text-center max-w-2xl mx-auto">
            Fury in Code, Ready to Explode
          </p>
        </div>

        {/* Powered by Section */}
        <div className="mt-4 mb-8">
          <p className="text-lg sm:text-xl md:text-2xl font-bold text-white uppercase tracking-wide">
            Powered By
          </p>
          <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-cyan-300 font-orbitron mt-2">
            ArtPark I-Hub @ IISc
          </p>
        </div>

        {/* Main Subheading */}
        <p className="font-bold text-lg sm:text-2xl lg:text-3xl text-white font-audiowide mt-6 mb-8 tracking-wide uppercase">
          Annual National - Level Hackathon
        </p>

        {/* Date */}
        <div className="flex items-center justify-center space-x-2 mt-7 text-cyan-300 font-poppins">
          <Calendar className="w-5 h-5 sm:w-6 sm:h-6" />
          <span className="text-md sm:text-lg md:text-xl font-medium font-nunito">
            22nd, 23rd & 24th August 2025
          </span>
        </div>

        {/* Countdown */}
        {!isClosed && (
          <>
            <p className="text-lg sm:text-xl font-bold mt-10 mb-4 text-white font-nunito tracking-wide">
              It Begins In
            </p>
            <div className="grid grid-cols-4 md:grid-cols-4 gap-2 sm:gap-4 max-w-2xl mx-auto mb-8 sm:mb-12">
              {Object.entries(timeLeft).map(([unit, value]) => (
                <div
                  key={unit}
                  className="p-2 sm:p-3 md:p-4 text-center hover:scale-105 transition rounded-lg sm:rounded-xl md:rounded-2xl shadow-lg bg-transparent border border-white/20"
                >
                  <div className="text-xl sm:text-2xl md:text-2xl font-bold text-white">
                    {value.toString().padStart(2, '0')}
                  </div>
                  <div className="text-[0.65rem] sm:text-xs md:text-sm uppercase text-gray-400 mt-1 tracking-wider">
                    {unit}
                  </div>
                </div>
              ))}
            </div>
          </>
        )}

        {/* Conditional Content */}
        <div className="flex flex-col items-center mb-12">
          {isClosed ? (
            <div className="text-white text-xs sm:text-sm md:text-base px-4 py-2 rounded-md font-mono w-full text-center">
              <span className="text-gray-400 mr-2">&gt;&gt;&gt; REGISTRATIONS CLOSED</span>
              <br />
              <span className="font-bold">
                THE REGISTRATIONS FOR CODEFURY 8.0 WERE CLOSED ON{" "}
                <span className="text-cyan-400 font-bold">21<sup>st</sup> August 2025</span>. SEE YOU FOR
                CODEFURY 9.0!
              </span>
            </div>
          ) : (
            <>
              <button
                onClick={() =>
                  window.open(
                    "https://unstop.com/o/eyWD58I?lb=qyWQPa8&utm_medium=Share&utm_source=ieeecom4643&utm_campaign=Online_coding_challenge",
                    "_blank"
                  )
                }
                className="mt-4 bg-gradient-to-r from-fuchsia-500 to-cyan-400 text-white font-bold font-orbitron py-5 px-10 rounded-full text-2xl transition-all duration-300 transform hover:scale-105 hover:from-cyan-400 hover:to-fuchsia-500"
              >
                Register Now
              </button>
              <p className="mt-4 text-xs sm:text-sm md:text-base text-gray-300 font-nunito max-w-3xl text-center">
                Participants can form teams of 1 to 4 members, but all members must register individually on
                Unstop; team details will be collected later.
              </p>
            </>
          )}
        </div>

        {/* Section Title */}
        <p className="text-lg sm:text-xl font-bold mt-10 mb-4 text-white font-nunito tracking-wide text-center">
          Presented By
        </p>

        {/* Logos Container */}
        <div className="mb-6 flex flex-col sm:flex-row items-center justify-center md:ml-[8rem] divide-y-2 sm:divide-y-0 sm:divide-x-2 divide-white/20">
          {/* IEEE Logo Link */}
          <a
            href="https://www.instagram.com/ieeeuvce"
            target="_blank"
            rel="noopener noreferrer"
            title="Visit IEEE"
            className="py-6 sm:px-8 md:px-12 transition-transform duration-300 hover:scale-105"
          >
            <img src={ieeelogo} alt="IEEE Logo" className="w-20 md:w-24 h-auto object-contain" />
          </a>

          {/* IEEE CS Logo Link */}
          <a
            href="https://www.instagram.com/ieee.uvce.cs"
            target="_blank"
            rel="noopener noreferrer"
            title="Visit IEEE Computer Society"
            className="py-6 sm:px-8 md:px-12 transition-transform duration-300 hover:scale-105"
          >
            <img src={cslogo} alt="IEEE Computer Society Logo" className="w-48 md:w-56 h-auto object-contain" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
