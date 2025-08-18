import bng from "../assets/bng.png";
import unstop from "../assets/unstop.png";
import wie from "../assets/wielogonew.png";
import artpark from "../assets/ARTPARK primary logo.png";

const sponsors = [
  {
  tier: 'Diamond Sponsor',
  name: '',
  logo: artpark, // replace with your actual image import
  link: 'https://www.artpark.in/', 
  color: 'text-cyan-400', 
  glow: 'drop-shadow-[0_0_35px_#22d3ee]', // Cyan glow for diamond
  width: 'w-[250px]', // a bit larger than gold
  height: 'h-[80px]',
},
  // {
  //   tier: 'Gold Sponsor',
  //   name: 'IEEE Bangalore Section',
  //   logo: bng,
  //   link: 'https://ieeebangalore.org/',
  //   color: 'text-yellow-400',
  //   glow: 'drop-shadow-[0_0_35px_#facc15]', // Yellow glow
  //   width: 'w-[200px]',
  //   height: 'h-[40px]',
  // },
  // {
  //   tier: 'Silver Sponsor',
  //   name: 'IEEE Bangalore Section',
  //   logo: bng,
  //   link: 'https://ieeebangalore.org/',
  //   color: 'text-gray-400',
  //   glow: 'drop-shadow-[0_0_45px_#d1d5db]', // Gray/Silver glow
  //   width: 'w-[200px]',
  //   height: 'h-[40px]',
  // },
  {
    tier: 'General Sponsor',
    name: '',
    logo: bng,
    link: 'https://ieeecsbangalore.org/',
    color: 'text-green-400',
    glow: 'drop-shadow-none', // Clean look
    width: 'w-[500px]',
    height: 'h-[80px]',
  },
  {
    tier: 'General Sponsor',
    name: '',
    logo: wie,
    link: 'https://wie.ieee.org/',
    color: 'text-green-400',
    glow: 'drop-shadow-none', // Clean look
    width: 'w-[500px]',
    height: 'h-[110px]',
  },
  {
    tier: 'General Sponsor',
    name: 'MistyClimb LLP',
    // logo: '',
    link: 'https://tracxn.com/d/legal-entities/india/mistyclimb-llp/__IKhPP9H2P8LXL5e1EiNMGr3OCaWiJdUf9M_pVuIf3b8#about',
    color: 'text-green-400',
    glow: 'drop-shadow-none', // Clean look
    width: 'w-[500px]',
    height: 'h-[80px]',
  },
  {
    tier: 'Platform Partner',
    name: '',
    logo: unstop,
    link: 'https://unstop.com/',
    color: 'text-green-400',
    glow: 'drop-shadow-none', // Clean look
    width: 'w-[350px]',
    height: 'h-[65px]',
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

      <div className="flex flex-wrap justify-center gap-x-24 gap-y-20 px-8">
        {sponsors.map((sponsor, index) => (
          <div
            key={index}
            className="flex flex-col items-center transition-transform duration-300 hover:scale-110"
          >
            {/* Tier (with color based on sponsor.color) */}
            <p
              className={`text-2xl md:text-3xl font-extrabold font-poppins mb-10 uppercase ${sponsor.color}`}
            >
              {sponsor.tier}
            </p>

            {/* Render logo only if sponsor.logo exists */}
            {sponsor.logo && (
              <img
                src={sponsor.logo}
                alt={sponsor.name}
                className={`${sponsor.width ?? "w-32"} ${sponsor.height ?? "h-24"} object-contain mb-4 transition-all duration-300 ${sponsor.glow}`}
              />
            )}

            {/* Sponsor Name (White + Highlight) */}
            <p className="text-lg md:text-xl font-nunito font-bold text-white mb-4 tracking-wider drop-shadow-[0_0_60px_#ffffff]">
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

      {/* TEMPORARY MESSAGE */}
      <p className="text-xl mt-14 md:text-2xl font-semibold text-gray-300 px-6 mb-10">
        🎉 More dropping soon. Watch this space!
      </p>
    </section>
  );
};

export default Sponsors;

