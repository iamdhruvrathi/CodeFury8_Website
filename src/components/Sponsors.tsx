// import React from 'react';
// import { Heart } from 'lucide-react';

// const Sponsors = () => {
//   const sponsors = [
//     {
//       name: 'TechCorp',
//       tier: 'Platinum',
//       logo: 'TC',
//       color: 'from-gray-300 to-gray-500'
//     },
//     {
//       name: 'InnovateLabs',
//       tier: 'Gold',
//       logo: 'IL',
//       color: 'from-yellow-400 to-yellow-600'
//     },
//     {
//       name: 'DevTools Pro',
//       tier: 'Gold',
//       logo: 'DT',
//       color: 'from-yellow-400 to-yellow-600'
//     },
//     {
//       name: 'CodeBase',
//       tier: 'Silver',
//       logo: 'CB',
//       color: 'from-gray-400 to-gray-600'
//     },
//     {
//       name: 'WebFlow',
//       tier: 'Silver',
//       logo: 'WF',
//       color: 'from-gray-400 to-gray-600'
//     },
//     {
//       name: 'StartupX',
//       tier: 'Bronze',
//       logo: 'SX',
//       color: 'from-orange-400 to-orange-600'
//     }
//   ];

//   const getTierColor = (tier: string) => {
//     switch (tier) {
//       case 'Platinum':
//         return 'text-gray-300 border-gray-300/50';
//       case 'Gold':
//         return 'text-yellow-400 border-yellow-400/50';
//       case 'Silver':
//         return 'text-gray-400 border-gray-400/50';
//       case 'Bronze':
//         return 'text-orange-400 border-orange-400/50';
//       default:
//         return 'text-cyan-400 border-cyan-400/50';
//     }
//   };

//   return (
//     <section id="sponsors" className="py-10 relative">
//       <div className="container mx-auto px-6">
//         <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
//           <span className="text-cyan-400 glow-text">Our</span> Sponsors
//         </h2>

//         <div className="max-w-6xl mx-auto">
//           {/* Sponsor Grid */}
//           <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-16">
//             {sponsors.map((sponsor, index) => (
//               <div
//                 key={index}
//                 className={`glass-card p-6 rounded-2xl text-center transform hover:scale-110 transition-all duration-300 group cursor-pointer border ${getTierColor(sponsor.tier)}`}
//               >
//                 <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${sponsor.color} flex items-center justify-center text-white font-bold text-xl group-hover:scale-110 transition-transform duration-300`}>
//                   {sponsor.logo}
//                 </div>
//                 <h3 className="text-white font-semibold mb-1">{sponsor.name}</h3>
//                 <p className={`text-xs ${getTierColor(sponsor.tier).split(' ')[0]}`}>
//                   {sponsor.tier}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Sponsors;

import React from 'react';
import { Star, Zap, Flame } from 'lucide-react';

const sponsors = [
  { name: 'TechCorp', tier: 'Gold', logo: <Star />, color: 'from-yellow-400 to-yellow-600' },
  { name: 'DevSolutions', tier: 'Silver', logo: <Zap />, color: 'from-gray-400 to-gray-600' },
  { name: 'CodeNest', tier: 'Bronze', logo: <Flame />, color: 'from-orange-400 to-orange-600' },
  { name: 'InnoSoft', tier: 'Silver', logo: <Zap />, color: 'from-gray-400 to-gray-600' },
  { name: 'ByteWorks', tier: 'Gold', logo: <Star />, color: 'from-yellow-400 to-yellow-600' },
  { name: 'AlgoTech', tier: 'Bronze', logo: <Flame />, color: 'from-orange-400 to-orange-600' },
];

const getTierColor = (tier: string) => {
  switch (tier) {
    case 'Gold':
      return 'border-yellow-400 text-yellow-400';
    case 'Silver':
      return 'border-gray-400 text-gray-400';
    case 'Bronze':
      return 'border-orange-400 text-orange-400';
    default:
      return 'border-gray-500 text-gray-500';
  }
};

const Sponsors = () => {
  return (
    <section id="sponsors" className="pt-20 pb-10 relative">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          <span className="text-cyan-400 glow-text">Our</span> Sponsors
        </h2>

        <div className="max-w-6xl mx-auto">
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
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
