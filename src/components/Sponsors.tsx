import React from 'react';
import { Heart } from 'lucide-react';

const Sponsors = () => {
  const sponsors = [
    {
      name: 'TechCorp',
      tier: 'Platinum',
      logo: 'TC',
      color: 'from-gray-300 to-gray-500'
    },
    {
      name: 'InnovateLabs',
      tier: 'Gold',
      logo: 'IL',
      color: 'from-yellow-400 to-yellow-600'
    },
    {
      name: 'DevTools Pro',
      tier: 'Gold',
      logo: 'DT',
      color: 'from-yellow-400 to-yellow-600'
    },
    {
      name: 'CodeBase',
      tier: 'Silver',
      logo: 'CB',
      color: 'from-gray-400 to-gray-600'
    },
    {
      name: 'WebFlow',
      tier: 'Silver',
      logo: 'WF',
      color: 'from-gray-400 to-gray-600'
    },
    {
      name: 'StartupX',
      tier: 'Bronze',
      logo: 'SX',
      color: 'from-orange-400 to-orange-600'
    }
  ];

  const getTierColor = (tier: string) => {
    switch (tier) {
      case 'Platinum':
        return 'text-gray-300 border-gray-300/50';
      case 'Gold':
        return 'text-yellow-400 border-yellow-400/50';
      case 'Silver':
        return 'text-gray-400 border-gray-400/50';
      case 'Bronze':
        return 'text-orange-400 border-orange-400/50';
      default:
        return 'text-cyan-400 border-cyan-400/50';
    }
  };

  return (
    <section id="sponsors" className="py-20 relative">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          <span className="text-cyan-400 glow-text">Our</span> Sponsors
        </h2>

        <div className="max-w-6xl mx-auto">
          {/* Sponsor Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-16">
            {sponsors.map((sponsor, index) => (
              <div
                key={index}
                className={`glass-card p-6 rounded-2xl text-center transform hover:scale-110 transition-all duration-300 group cursor-pointer border ${getTierColor(sponsor.tier)}`}
              >
                <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${sponsor.color} flex items-center justify-center text-white font-bold text-xl group-hover:scale-110 transition-transform duration-300`}>
                  {sponsor.logo}
                </div>
                <h3 className="text-white font-semibold mb-1">{sponsor.name}</h3>
                <p className={`text-xs ${getTierColor(sponsor.tier).split(' ')[0]}`}>
                  {sponsor.tier}
                </p>
              </div>
            ))}
          </div>

          {/* Sponsorship CTA */}
          <div className="glass-card p-8 rounded-2xl text-center">
            <Heart className="w-12 h-12 text-red-400 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white mb-4">Become a Sponsor</h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Partner with CodeFury 8.0 and connect with the brightest coding talents. 
              Your support helps us create an amazing experience for all participants.
            </p>
            <button className="glow-button bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-400 hover:to-red-400 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105">
              Sponsor CodeFury 8.0
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sponsors;