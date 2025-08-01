import bng from "../assets/bng.png";

const sponsors = [
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
    name: 'IEEE Bangalore Section',
    logo: bng,
    link: 'https://ieeebangalore.org/',
    color: 'text-green-400',
    glow: 'drop-shadow-none', // Clean look
    width: 'w-[200px]',
    height: 'h-[40px]',
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
            <p className={`text-2xl md:text-3xl font-extrabold font-poppins mb-10 uppercase ${sponsor.color}`}>
              {sponsor.tier}
            </p>

            {/* Logo with individual size and glow */}
            <img
              src={sponsor.logo}
              alt={sponsor.name}
              className={`${sponsor.width ?? 'w-32'} ${sponsor.height ?? 'h-24'} object-contain mb-4 transition-all duration-300 ${sponsor.glow}`}
            />

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
