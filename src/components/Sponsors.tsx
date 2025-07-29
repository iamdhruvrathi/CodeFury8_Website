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
    <section id="sponsors" className="pt-12 pb-6 relative text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl md:text-5xl font-audiowide text-center mb-12">
          <span className="text-cyan-400 glow-text">Our</span> Sponsors
        </h2>

        <div className="flex flex-wrap justify-center gap-6 font-nunito">
          {sponsors.map((sponsor, index) => (
            <div key={index} className="w-[260px] space-y-2">
              <h3 className={`text-xl md:text-2xl font-bold ${sponsor.tierColor} text-center`}>
                {sponsor.tier}
              </h3>

              <div className="glass-card-no-border rounded-xl p-4 flex flex-col items-center text-center shadow-lg border border-white/10 backdrop-blur-md bg-white/5 transition-all duration-300 group hover:scale-105">
                {/* Logo and Name side by side */}
                <div className="flex items-center justify-center space-x-3 mb-2">
                  <div
                    className={`w-14 h-14 rounded-full bg-gradient-to-r ${sponsor.color} flex items-center justify-center shadow-md transform transition-transform duration-300 group-hover:scale-110`}
                  >
                    <img
                      src={sponsor.logo}
                      alt={sponsor.name}
                      className="w-9 h-9 object-contain"
                    />
                  </div>
                  <p className="text-base font-semibold text-white font-poppins font-bold">{sponsor.name}</p>
                </div>

                {/* Link below the row */}
                <a
                  href={sponsor.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-300 underline text-sm hover:text-cyan-200 transition"
                >
                  website link→
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
