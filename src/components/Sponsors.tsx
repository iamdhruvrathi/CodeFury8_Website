import React from 'react';

const sponsors = [
  {
    tier: 'Golden Sponsor',
    name: 'TechCorp',
    logo: '/assets/sponsors/techcorp.png',
    link: 'https://example.com',
    color: 'from-yellow-400 to-yellow-600',
    tierColor: 'text-yellow-400',
  },
  {
    tier: 'Silver Sponsor',
    name: 'DevSolutions',
    logo: '/assets/sponsors/devsolutions.png',
    link: 'https://example.com',
    color: 'from-gray-400 to-gray-600',
    tierColor: 'text-gray-300',
  },
  {
    tier: 'General Sponsor',
    name: 'CodeNest',
    logo: '/assets/sponsors/codenest.png',
    link: 'https://example.com',
    color: 'from-blue-400 to-blue-600',
    tierColor: 'text-blue-400',
  },
  {
    tier: 'General Sponsor',
    name: 'AlgoTech',
    logo: '/assets/sponsors/algotech.png',
    link: 'https://example.com',
    color: 'from-green-400 to-green-600',
    tierColor: 'text-green-400',
  },
];

const Sponsors = () => {
  return (
    <section
      id="sponsors"
      className="pt-20 pb-10 relative text-white"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          <span className="text-cyan-400 glow-text">Our</span> Sponsors
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {sponsors.map((sponsor, index) => (
            <div key={index} className="space-y-4">
              <h3
                className={`text-2xl md:text-3xl font-bold ${sponsor.tierColor}`}
              >
                {sponsor.tier}
              </h3>

              <div
                className="glass-card rounded-2xl p-6 flex items-center justify-between shadow-xl hover:scale-105 transition-all duration-300 group border border-white/10 backdrop-blur-md bg-white/5"
                style={{ opacity: 0.85 }}
              >
                <div className="flex items-center space-x-4">
                  <div
                    className={`w-20 h-20 rounded-full bg-gradient-to-r ${sponsor.color} flex items-center justify-center shadow-lg transform transition-transform duration-300 group-hover:scale-110`}
                  >
                    <img
                      src={sponsor.logo}
                      alt={sponsor.name}
                      className="w-12 h-12 object-contain"
                    />
                  </div>

                  <p className="text-2xl font-semibold text-white">
                    {sponsor.name}
                  </p>
                </div>

                <a
                  href={sponsor.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-300 underline text-sm hover:text-cyan-200 transition"
                >
                  Dive into their world →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
