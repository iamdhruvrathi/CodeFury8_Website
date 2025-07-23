import { Star, Zap } from 'lucide-react';

const sponsors = [
  { name: 'TechCorp', tier: 'Gold', logo: <Star />, color: 'from-yellow-400 to-yellow-600', link: 'https://techcorp.com' },
  { name: 'DevSolutions', tier: 'Silver', logo: <Zap />, color: 'from-gray-400 to-gray-600', link: 'https://devsolutions.com' },
  { name: 'InnoSoft', tier: 'General', logo: <Zap />, color: 'from-blue-400 to-blue-600', link: 'https://innosoft.com' },
  { name: 'AlgoTech', tier: 'General', logo: <Zap />, color: 'from-green-400 to-green-600', link: 'https://algotech.com' },
];

const SponsorCard = ({ sponsor }: { sponsor: any }) => (
  <div className="rounded-[2rem] p-5 bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-600 shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 backdrop-blur-sm flex flex-col sm:flex-row items-center gap-4 text-left">
    {/* Logo Section */}
    <div className={`w-20 h-20 rounded-full bg-gradient-to-r ${sponsor.color} flex items-center justify-center text-white text-2xl shrink-0`}>
      {sponsor.logo}
    </div>

    {/* Info Section */}
    <div className="flex flex-col items-start">
      <p className="text-xs font-semibold text-yellow-300 mb-1">{sponsor.tier} Sponsor</p>
      <h3 className="text-white font-bold text-lg mb-1">{sponsor.name}</h3>
      <a
        href={sponsor.link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-cyan-400 text-sm underline hover:text-cyan-300 transition-colors"
      >
        Visit Website
      </a>
    </div>
  </div>
);

const Sponsors = () => {
  const displayedSponsors = [
    sponsors.find(s => s.tier === 'Gold'),
    sponsors.find(s => s.tier === 'Silver'),
    ...sponsors.filter(s => s.tier === 'General').slice(0, 2),
  ].filter(Boolean); // filter out undefined

  return (
    <section id="sponsors" className="py-16 bg-gradient-to-tr from-gray-950 via-gray-900 to-black text-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
          <span className="text-cyan-400">Our</span> Sponsors
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {displayedSponsors.map((sponsor, idx) => (
            <SponsorCard key={idx} sponsor={sponsor} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
