import React, { useState } from 'react';
import { Globe, ChevronDown } from 'lucide-react';

const Tracks = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <section id="tracks" className="py-20 relative">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl text-center mb-16 font-audiowide">
          <span className="text-fuchsia-500 glow-text">Tracks</span>
        </h2>

        <div className="glass-card bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-500/50 p-8 rounded-2xl max-w-5xl mx-auto transform hover:scale-105 transition-all duration-300 group cursor-pointer">
          <div className="text-center mb-6">
            <div className="inline-flex p-4 rounded-full bg-gray-800/50 mb-4 group-hover:scale-110 transition-transform duration-300">
              <Globe className="w-12 h-12 text-cyan-400" />
            </div>

            {/* Desktop: show full content | Mobile: collapsible */}
            <div className="relative">
              <p
                className={`text-gray-300 text-lg sm:text-xl leading-relaxed text-justify font-nunito transition-all duration-500 ease-in-out 
                  ${expanded ? '' : 'max-h-[7.5rem] overflow-hidden'} 
                  md:max-h-full md:overflow-visible`}
              >
                Participants will be presented with{' '}
                <span className="text-green-400 font-semibold">three distinct themes</span>, each accompanied by a unique problem statement.
                These themes and their respective challenges will be officially announced on the{' '}
                <span className="text-green-300 font-semibold">first day of the event</span>.

                <br />
                <br />

                Teams are required to select one theme and develop a solution based on the provided problem statement.
                Participants may opt to build either a{' '}
                <span className="text-yellow-400 font-semibold">web application</span> or a{' '}
                <span className="text-yellow-400 font-semibold">mobile application</span>, depending on their area of expertise and preference.
                There are no restrictions on the technology stack — teams are free to use tools and platforms of their choice.

                <br />
                <br />

                The primary objective is to address the given problem with an innovative and practical solution that demonstrates strong technical execution and thoughtful design.
                Participants are encouraged to think critically, collaborate effectively, and create impactful technology-driven outcomes.
              </p>

              {/* Mobile-only Read More */}
              <div className="md:hidden mt-4 flex justify-center">
                {!expanded && (
                  <button
                    onClick={() => setExpanded(true)}
                    className="flex items-center gap-1 text-cyan-300 hover:text-cyan-400 text-sm font-medium"
                  >
                    Read More <ChevronDown className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>
          </div>

          <div className="mt-6">
            <h2 className="text-center text-xl font-semibold text-white mb-4">Quick Info</h2>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <div className="w-full sm:w-64 text-center p-4 bg-gray-800/50 rounded-lg">
                <div className="text-lg sm:text-xl font-bold text-green-400">Team Size</div>
                <div className="text-md text-gray-400">1–4 members</div>
              </div>
              <div className="w-full sm:w-64 text-center p-4 bg-gray-800/50 rounded-lg">
                <div className="text-lg sm:text-xl font-bold text-yellow-400">Registration Fees</div>
                <div className="text-md text-gray-400">₹120 per head</div>
              </div>
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
