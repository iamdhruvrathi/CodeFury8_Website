import React from 'react';
import bng from "../assets/bng.png";

const Sponsors = () => {
  return (
    <section
      id="sponsors"
      className="relative py-28 text-white text-center font-nunito z-10"
    >
      {/* Keep heading same as original */}
      <h2 className="text-4xl md:text-5xl font-audiowide mb-20">
        <span className="text-cyan-400 glow-text">Our</span> Sponsors
      </h2>

      <div className="flex justify-center px-8">
        <div className="flex flex-col items-center transition-transform duration-300 hover:scale-110">
          <p className="text-2xl md:text-3xl font-bold font-[Orbitron] mb-4 uppercase text-blue-400">
            General Sponsor
          </p>

          <img
            src={bng}
            alt="IEEE Bangalore Section"
            className="w-52 md:w-60 h-auto object-contain mb-4 hover:drop-shadow-[0_0_35px_#60a5fa] transition-all duration-300"
          />

          <p className="text-2xl md:text-3xl font-extrabold text-blue-400 mb-2 tracking-wider">
            IEEE Bangalore Section
          </p>

          <a
            href="https://www.instagram.com/ieeebangalore"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-300 underline text-base hover:text-cyan-100 transition"
          >
            Visit Page →
          </a>
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
