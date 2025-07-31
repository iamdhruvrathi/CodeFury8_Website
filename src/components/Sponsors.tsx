import React from 'react';

const sponsors = [
  {
    tier: 'Golden Sponsor',
    name: 'TechCorp',
    logo: '/assets/sponsors/techcorp.png',
    link: 'https://example.com',
    color: 'text-yellow-400',
    glow: 'hover:drop-shadow-[0_0_35px_#facc15]',
  },
  {
    tier: 'Silver Sponsor',
    name: 'DevSolutions',
    logo: '/assets/sponsors/devsolutions.png',
    link: 'https://example.com',
    color: 'text-gray-300',
    glow: 'hover:drop-shadow-[0_0_35px_#d1d5db]',
  },
  {
    tier: 'General Sponsor',
    name: 'CodeNest',
    logo: '/assets/sponsors/codenest.png',
    link: 'https://example.com',
    color: 'text-blue-400',
    glow: 'hover:drop-shadow-[0_0_35px_#60a5fa]',
  },
  {
    tier: 'General Sponsor',
    name: 'AlgoTech',
    logo: '/assets/sponsors/algotech.png',
    link: 'https://example.com',
    color: 'text-green-400',
    glow: 'hover:drop-shadow-[0_0_35px_#4ade80]',
  },
];

const Sponsors = () => {
  return (
    <section
      id="sponsors"
      className="relative py-28 text-white text-center font-nunito z-10"
    >
      <h2 className="text-4xl md:text-5xl font-audiowide mb-20">
        <span className="text-cyan-400 glow-text">Our</span> Sponsors
      </h2>

      {/* TEMPORARY MESSAGE - Remove when sponsors are ready */}
      <p className="text-2xl md:text-3xl font-semibold text-gray-300 px-6">
        🎉 Our sponsors will be revealed soon. Stay tuned for exciting updates!
      </p>

      {/* 
      <div className="flex flex-wrap justify-center gap-x-24 gap-y-20 px-8">
        {sponsors.map((sponsor, index) => (
          <div
            key={index}
            className="flex flex-col items-center transition-transform duration-300 hover:scale-110"
          >
            <p
              className={`text-2xl md:text-3xl font-bold font-[Orbitron] mb-4 uppercase ${sponsor.color}`}
            >
              {sponsor.tier}
            </p>

            <img
              src={sponsor.logo}
              alt={sponsor.name}
              className={`w-32 h-32 object-contain mb-4 transition-all duration-300 ${sponsor.glow}`}
            />
            <p
              className={`text-2xl md:text-3xl font-extrabold ${sponsor.color} mb-2 tracking-wider`}
            >
              {sponsor.name}
            </p>

            <a
              href={sponsor.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-300 underline text-base hover:text-cyan-100 transition"
            >
              Explore →
            </a>
          </div>
        ))}
      </div>
      */}
    </section>
  );
};

export default Sponsors;
