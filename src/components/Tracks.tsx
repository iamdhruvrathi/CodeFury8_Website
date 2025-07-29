// Tracks.tsx
import React from 'react';
import { Globe } from 'lucide-react';

const Tracks = () => {
  return (
    <section id="tracks" className="py-20 relative">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl text-center mb-16 font-audiowide">
          <span className="text-purple-400 glow-text">Tracks</span>
        </h2>

        <div className="glass-card bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-500/50 p-8 rounded-2xl max-w-5xl mx-auto transform hover:scale-105 transition-all duration-300 group cursor-pointer">
          <div className="text-center mb-6">
            <div className="inline-flex p-4 rounded-full bg-gray-800/50 mb-4 group-hover:scale-110 transition-transform duration-300">
              <Globe className="w-12 h-12 text-cyan-400" />
            </div>

            <p className="text-gray-300 text-lg sm:text-xl leading-relaxed text-justify font-nunito">
              Participants will be presented with <span className="text-purple-400 font-semibold">three distinct themes</span>, each accompanied by a unique problem statement. These themes and their respective challenges will be officially announced on the <span className="text-yellow-300 font-semibold">first day of the event</span>.

              <br /><br />

              Teams are required to select one theme and develop a solution based on the provided problem statement. Participants may opt to build either a <span className="text-green-400 font-semibold">web application</span> or a <span className="text-blue-400 font-semibold">mobile application</span>, depending on their area of expertise and preference. There are no restrictions on the technology stack — teams are free to use tools and platforms of their choice.

              <br /><br />

              The primary objective is to address the given problem with an innovative and practical solution that demonstrates strong technical execution and thoughtful design. Participants are encouraged to think critically, collaborate effectively, and create impactful technology-driven outcomes.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-6">
            <div className="px-4 py-2 bg-gray-800/50 border border-gray-700 text-cyan-400 rounded-full text-sm font-medium">
              Team Size: 1 - 4 Members
            </div>
            <div className="px-4 py-2 bg-gray-800/50 border border-gray-700 text-green-400 rounded-full text-sm font-medium">
              Registration Fee: ₹50 per Head
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-xl text-gray-400 mb-4 text-center max-w-3xl mx-auto font-nunito">
            Select your theme, assemble your team, and start building impactful solutions!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Tracks;
