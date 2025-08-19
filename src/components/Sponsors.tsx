import bng from "../assets/bng.png";
import unstop from "../assets/unstop.png";
import wie from "../assets/wielogonew.png";
import artpark from "../assets/ARTPARK primary logo.png";

// Updated data with a new color and glow scheme from the allowed palette
const sponsorsData = [
  {
    tier: 'Diamond Sponsor',
    name: 'ARTPARK brings together the best of research, startup, industry and government ecosystems to drive large-scale impact.',
    logo: artpark,
    link: 'https://www.artpark.in/',
    color: 'text-yellow-400', // Changed to yellow for prominence
    glow: 'drop-shadow-[0_0_35px_#facc15]', // Added yellow glow
    width: 'w-[280px]',
    height: 'h-[90px]',
  },
  {
    tier: 'Platform Partner',
    name: 'Unstop',
    logo: unstop,
    link: 'https://unstop.com/',
    width: 'w-[300px]',
    height: 'h-[60px]',
  },
  {
    tier: 'General Sponsor',
    name: 'IEEE CS Bangalore Section',
    logo: bng,
    link: 'https://ieeecsbangalore.org/',
    width: 'w-[400px]',
    height: 'h-[70px]',
  },
  {
    tier: 'General Sponsor',
    name: 'IEEE WIE',
    logo: wie,
    link: 'https://wie.ieee.org/',
    width: 'w-[400px]',
    height: 'h-[100px]',
  },
  {
    tier: 'General Sponsor',
    name: 'MistyClimb LLP',
    link: 'https://tracxn.com/d/legal-entities/india/mistyclimb-llp/__IKhPP9H2P8LXL5e1EiNMGr3OCaWiJdUf9M_pVuIf3b8#about',
    width: 'w-auto',
    height: 'h-auto',
  },
];

const Sponsors = () => {
  // --- Group sponsors by tier ---
  const diamondSponsor = sponsorsData.find(s => s.tier === 'Diamond Sponsor');
  const platformPartners = sponsorsData.filter(s => s.tier === 'Platform Partner');
  const generalSponsors = sponsorsData.filter(s => s.tier === 'General Sponsor');

  return (
    <section
      id="sponsors"
      className="relative py-28 text-white text-center font-nunito z-10"
    >
      <h2 className="text-4xl md:text-5xl font-audiowide mb-20">
        <span className="text-cyan-400 glow-text">Our</span> Sponsors
      </h2>

      <div className="flex flex-col items-center gap-y-24 px-8">
        
        {/* --- Diamond Sponsor Section --- */}
        {diamondSponsor && (
          <div className="flex flex-col items-center w-full transition-transform duration-300 hover:scale-105">
            <p className={`text-3xl md:text-4xl font-extrabold font-poppins mb-10 uppercase ${diamondSponsor.color}`}>
              {diamondSponsor.tier}
            </p>
            <img
              src={diamondSponsor.logo}
              alt={diamondSponsor.tier}
              className={`${diamondSponsor.width} ${diamondSponsor.height} object-contain mb-6 transition-all duration-300 ${diamondSponsor.glow}`}
            />
            <p className="text-base md:text-lg font-nunito font-semibold text-gray-200 max-w-2xl mx-auto leading-relaxed mb-6">
              {diamondSponsor.name}
            </p>
            <a
              href={diamondSponsor.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-300 underline text-base hover:text-cyan-100 transition"
            >
              Explore →
            </a>
          </div>
        )}

        {/* --- Platform Partner Section --- */}
        {platformPartners.length > 0 && (
          <div className="flex flex-col items-center w-full">
            <p className="text-2xl md:text-3xl font-extrabold font-poppins mb-12 uppercase text-fuchsia-400">
              Platform Partner
            </p>
            {/* THIS IS THE KEY CHANGE: flex-col ensures a vertical stack */}
            <div className="flex flex-col items-center gap-y-16">
              {platformPartners.map((sponsor, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center transition-transform duration-300 hover:scale-110"
                >
                  <img
                    src={sponsor.logo}
                    alt={sponsor.name}
                    className={`${sponsor.width} ${sponsor.height} object-contain mb-4`}
                  />
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
          </div>
        )}

        {/* --- General Sponsors Section (Grouped) --- */}
        {generalSponsors.length > 0 && (
          <div className="flex flex-col items-center w-full">
            <p className="text-2xl md:text-3xl font-extrabold font-poppins mb-12 uppercase text-green-400">
              General Sponsors
            </p>
            {/* THIS IS THE KEY CHANGE: flex-col ensures a vertical stack */}
            <div className="flex flex-col items-center gap-y-16">
              {generalSponsors.map((sponsor, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center h-full transition-transform duration-300 hover:scale-110"
                >
                  <div className="flex-grow flex items-center justify-center mb-4 min-h-[80px]">
                    {sponsor.logo ? (
                      <img
                        src={sponsor.logo}
                        alt={sponsor.name}
                        className={`${sponsor.width} ${sponsor.height} object-contain`}
                      />
                    ) : (
                      <p className="text-2xl font-semibold px-4">{sponsor.name}</p>
                    )}
                  </div>
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
          </div>
        )}

      </div>
    </section>
  );
};

export default Sponsors;