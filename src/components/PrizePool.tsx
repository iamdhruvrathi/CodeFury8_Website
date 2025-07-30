// import { Trophy, Medal, BadgeDollarSign } from 'lucide-react';

// const PrizePool = () => {
//   const prizes = [
//     {
//       position: 'WINNERS',
//       amount: '₹25,000',
//       icon: Trophy,
//       color: 'text-cyan-400 drop-shadow-[0_0_35px_#00f6ff]',
//       bg: 'from-cyan-500/20 to-blue-500/20',
//       border: 'border-cyan-500/50',
//     },
//     {
//       position: 'RUNNERS',
//       amount: '₹15,000',
//       icon: Medal,
//       color: 'text-yellow-300 drop-shadow-[0_0_35px_#facc15]',
//       bg: 'from-gray-400/20 to-gray-600/20',
//       border: 'border-gray-500/50',
//     },
//   ];

//   const consolation = {
//     position: 'CONSOLATION PRIZE',
//     amount: '₹2,000',
//     icon: BadgeDollarSign,
//     color: 'text-green-400 drop-shadow-[0_0_35px_#4ade80]',
//     bg: 'from-green-500/20 to-lime-500/20',
//     border: 'border-green-500/50',
//   };

//   return (
//     <section id="prizes" className="pt-12 pb-20 relative font-[Poppins]">
//       <div className="container mx-auto px-6">
//         <h2 className="text-4xl md:text-5xl text-center mb-12 font-audiowide">
//           <span className="text-cyan-400 glow-text">Prize</span> Pool
//         </h2>

//         {/* Highlight ₹60,000+ */}
//         <div className="max-w-md mx-auto mb-12 glass-card bg-gradient-to-br from-purple-500/10 to-blue-500/10 border border-purple-500/30 p-6 md:p-8 rounded-2xl text-center">
//           <h3 className="text-2xl md:text-3xl font-bold text-green-400 drop-shadow-[0_0_35px_#4ade80]">
//             ₹60,000+ TOTAL PRIZE POOL
//           </h3>
//           <p className="text-gray-300 text-sm md:text-base mt-2">
//             Compete for cash prizes, tech gadgets, internship opportunities, and more!
//           </p>
//         </div>

//         {/* Main Prizes */}
//         <div className="grid md:grid-cols-2 gap-8 mb-12 max-w-4xl mx-auto">
//           {prizes.map((prize, index) => (
//             <div
//               key={index}
//               className={`glass-card p-8 rounded-2xl bg-gradient-to-br ${prize.bg} border ${prize.border} hover:scale-105 transform transition-all duration-300`}
//             >
//               <div className="text-center mb-4">
//                 <prize.icon className={`w-12 h-12 mx-auto mb-3 ${prize.color}`} />
//                 <h3 className="text-xl md:text-2xl font-bold text-white mb-1 tracking-wide">
//                   {prize.position}
//                 </h3>
//                 <div className={`text-3xl md:text-4xl font-extrabold ${prize.color}`}>
//                   {prize.amount}
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Consolation Prize (separate box) */}
//         <div className={`glass-card p-8 rounded-2xl bg-gradient-to-br ${consolation.bg} border ${consolation.border} hover:scale-[1.02] transition duration-300 mb-10 max-w-2xl mx-auto`}>
//           <div className="text-center">
//             <consolation.icon className={`w-12 h-12 mx-auto mb-3 ${consolation.color}`} />
//             <h3 className="text-xl md:text-2xl font-bold text-white mb-1 tracking-wide">
//               {consolation.position}
//             </h3>
//             <div className={`text-3xl md:text-4xl font-extrabold ${consolation.color}`}>
//               {consolation.amount}
//             </div>
//           </div>
//         </div>

//         {/* Certificate Info */}
//         <div className="glass-card p-6 md:p-8 rounded-2xl text-center max-w-4xl mx-auto border border-white/10 bg-white/5">
//           <p className="text-white text-base md:text-lg font-medium tracking-wide">
//             <span className="text-purple-400 font-semibold drop-shadow-[0_0_20px_#a855f7]">CERTIFICATE OF PARTICIPATION</span> WILL BE PROVIDED FOR EVERYONE
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default PrizePool;




// import { Trophy, Medal, Gift, Star } from 'lucide-react';

// const PrizePool = () => {
//   const prizes = [
//     {
//       position: '1st Place',
//       amount: '₹10,000',
//       icon: Trophy,
//       color: 'text-yellow-400',
//       bg: 'from-yellow-500/20 to-orange-500/20',
//       border: 'border-yellow-500/50'
//     },
//     {
//       position: '2nd Place',
//       amount: '₹5,000',
//       icon: Medal,
//       color: 'text-gray-300',
//       bg: 'from-gray-400/20 to-gray-600/20',
//       border: 'border-gray-500/50'
//     }
//   ];

//   return (
//     <section id="prizes" className="py-20 relative">
//       <div className="container mx-auto px-6">
//         <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
//           <span className="text-yellow-400">Prize</span> Pool
//         </h2>

//         <div className="max-w-4xl mx-auto">
//           {/* Main Prizes */}
//           <div className="grid md:grid-cols-2 gap-8 mb-12">
//             {prizes.map((prize, index) => (
//               <div
//                 key={index}
//                 className={`glass-card p-8 rounded-2xl bg-gradient-to-br ${prize.bg} border ${prize.border} transform hover:scale-105 transition-all duration-300`}
//               >
//                 <div className="text-center">
//                   <prize.icon className={`w-16 h-16 ${prize.color} mx-auto mb-4`} />
//                   <h3 className="text-2xl font-bold text-white mb-2">{prize.position}</h3>
//                   <div className={`text-4xl font-bold ${prize.color} mb-2`}>
//                     {prize.amount}
//                   </div>
//                   <p className="text-gray-400">Cash Prize</p>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* Additional Rewards */}
//           <div className="glass-card p-8 rounded-2xl text-center">
//             <div className="flex items-center justify-center mb-6">
//               <Gift className="w-8 h-8 text-purple-400 mr-3" />
//               <Star className="w-8 h-8 text-cyan-400 mr-3" />
//               <Gift className="w-8 h-8 text-green-400" />
//             </div>
//             <h3 className="text-2xl font-bold text-white mb-4">For All Finalists</h3>
//             <div className="grid md:grid-cols-3 gap-6">
//               <div className="p-4 bg-purple-500/10 rounded-lg border border-purple-500/30">
//                 <div className="text-lg font-semibold text-purple-400 mb-2">Certificates</div>
//                 <p className="text-gray-400 text-sm">Official participation & achievement certificates</p>
//               </div>
//               <div className="p-4 bg-cyan-500/10 rounded-lg border border-cyan-500/30">
//                 <div className="text-lg font-semibold text-cyan-400 mb-2">Goodies</div>
//                 <p className="text-gray-400 text-sm">Exclusive CodeFury merchandise & tech goodies</p>
//               </div>
//               <div className="p-4 bg-green-500/10 rounded-lg border border-green-500/30">
//                 <div className="text-lg font-semibold text-green-400 mb-2">Swags</div>
//                 <p className="text-gray-400 text-sm">Cool branded items & surprise gifts</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default PrizePool;

// import { Trophy, Medal, Gift, Star } from 'lucide-react';

// const PrizePool = () => {
//   const prizes = [
//     {
//       position: '1st Place',
//       amount: '₹10,000',
//       icon: Trophy,
//       color: 'text-yellow-400',
//       bg: 'from-yellow-500/20 to-orange-500/20',
//       border: 'border-yellow-500/50'
//     },
//     {
//       position: '2nd Place',
//       amount: '₹5,000',
//       icon: Medal,
//       color: 'text-gray-300',
//       bg: 'from-gray-400/20 to-gray-600/20',
//       border: 'border-gray-500/50'
//     }
//   ];

//   return (
//     <section id="prizes" className="py-20 relative">
//       <div className="container mx-auto px-6">
//         <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
//           <span className="text-yellow-400">Prize</span> Pool
//         </h2>

//         <div className="max-w-4xl mx-auto">
//           {/* Main Prizes */}
//           <div className="grid md:grid-cols-2 gap-8 mb-12">
//             {prizes.map((prize, index) => (
//               <div
//                 key={index}
//                 className={`glass-card p-8 rounded-2xl bg-gradient-to-br ${prize.bg} border ${prize.border} transform hover:scale-105 transition-all duration-300`}
//               >
//                 <div className="text-center">
//                   <prize.icon className={`w-16 h-16 ${prize.color} mx-auto mb-4`} />
//                   <h3 className="text-2xl font-bold text-white mb-2">{prize.position}</h3>
//                   <div className={`text-4xl font-bold ${prize.color} mb-2`}>
//                     {prize.amount}
//                   </div>
//                   <p className="text-gray-400">Cash Prize</p>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* Consolation Prizes */}
//           <div className="glass-card p-8 rounded-2xl text-center">
//             <div className="flex items-center justify-center mb-6">
//               <Gift className="w-8 h-8 text-purple-400 mr-3" />
//               <Star className="w-8 h-8 text-cyan-400 mr-3" />
//               <Gift className="w-8 h-8 text-green-400" />
//             </div>

//             {/* <h3 className="text-2xl font-bold text-white mb-4">For All Participants</h3> */}

//             <div className="grid md:grid-cols-2 gap-6">
//               <div className="p-4 bg-purple-500/10 rounded-lg border border-purple-500/30">
//                 <div className="text-lg font-semibold text-purple-400 mb-2">Certificates</div>
//                 <p className="text-gray-400 text-sm">
//                   Official participation certificates for everyone who competes
//                 </p>
//               </div>

//               <div className="p-4 bg-green-500/10 rounded-lg border border-green-500/30">
//                 <div className="text-lg font-semibold text-green-400 mb-2">Consolation Prize</div>
//                 <p className="text-gray-400 text-sm">
//                   {/* Cash prize of ₹2,000 */}
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default PrizePool;

// import { Trophy, Medal, Gift, Star } from 'lucide-react';

// const PrizePool = () => {
//   const prizes = [
//     {
//       position: '1st Place',
//       amount: '₹10,000',
//       icon: Trophy,
//       color: 'text-yellow-400',
//       bg: 'from-yellow-500/20 to-orange-500/20',
//       border: 'border-yellow-500/50',
//     },
//     {
//       position: '2nd Place',
//       amount: '₹5,000',
//       icon: Medal,
//       color: 'text-gray-300',
//       bg: 'from-gray-400/20 to-gray-600/20',
//       border: 'border-gray-500/50',
//     },
//   ];

//   return (
//     <section id="prizes" className="py-20 relative">
//       <div className="container mx-auto px-6">
//         <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
//           <span className="text-yellow-400">Prize</span> Pool
//         </h2>

//         <div className="max-w-4xl mx-auto">
//           {/* Main Prizes */}
//           <div className="grid md:grid-cols-2 gap-8 mb-12">
//             {prizes.map((prize, index) => (
//               <div
//                 key={index}
//                 className={`glass-card p-8 rounded-2xl bg-gradient-to-br ${prize.bg} border ${prize.border} transform hover:scale-105 transition-all duration-300`}
//               >
//                 <div className="text-center">
//                   <prize.icon className={`w-16 h-16 ${prize.color} mx-auto mb-4`} />
//                   <h3 className="text-2xl font-bold text-white mb-2">{prize.position}</h3>
//                   <div className={`text-4xl font-bold ${prize.color} mb-2`}>
//                     {prize.amount}
//                   </div>
//                   <p className="text-gray-400">Cash Prize</p>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* Consolation Prizes */}
//           <div className="glass-card p-8 rounded-2xl text-center">
//             <div className="flex items-center justify-center mb-6">
//               <Gift className="w-8 h-8 text-purple-400 mr-3" />
//               <Star className="w-8 h-8 text-cyan-400 mr-3" />
//               <Gift className="w-8 h-8 text-green-400" />
//             </div>

//             <div className="grid md:grid-cols-2 gap-6 text-justify">
//               <div className="p-4 bg-purple-500/10 rounded-lg border border-purple-500/30">
//                 <div className="text-lg font-semibold text-purple-400 mb-2">Certificates</div>
//                 <p className="text-gray-400 text-sm">
//                   Official participation certificates for everyone who competes.
//                 </p>
//               </div>

//               <div className="p-4 bg-green-500/10 rounded-lg border border-green-500/30">
//                 <div className="text-lg font-semibold text-green-400 mb-2">Consolation Prize</div>
//                 <p className="text-gray-400 text-sm">
//                   A token of appreciation and recognition for outstanding effort beyond the top winners.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default PrizePool;

// import { Trophy, Medal, Gift, Star, BadgeDollarSign } from 'lucide-react';

// const PrizePool = () => {
//   const prizes = [
//     {
//       position: '1st PRIZE',
//       amount: '₹25,000',
//       icon: Trophy,
//       color: 'text-yellow-400',
//       bg: 'from-yellow-500/20 to-orange-500/20',
//       border: 'border-yellow-500/50',
//       benefits: [
//         // 'Cash prize',
//         // 'Internship opportunities',
//         // 'Premium tech gadgets',
//         // 'Fast-track job interviews',
//       ],
//     },
//     {
//       position: '2nd PRIZE',
//       amount: '₹15,000',
//       icon: Medal,
//       color: 'text-gray-300',
//       bg: 'from-gray-400/20 to-gray-600/20',
//       border: 'border-gray-500/50',
//       benefits: [
//         // 'Cash prize',
//         // 'Tech workshop access',
//         // 'Development kits',
//         // 'Mentorship sessions',
//       ],
//     },
//     {
//       position: '3rd PRIZE',
//       amount: '₹10,000',
//       icon: BadgeDollarSign,
//       color: 'text-orange-400',
//       bg: 'from-orange-500/20 to-red-500/20',
//       border: 'border-orange-500/50',
//       benefits: [
//         // 'Cash prize',
//         // 'Software licenses',
//         // 'Development tools',
//         // 'Cloud credits',
//       ],
//     },
//      {
//       position: 'CONSOLATION PRIZE',
//       amount: '₹20,000',
//       icon: BadgeDollarSign,
//       color: 'text-gray-300',
//       bg: 'from-gray-400/20 to-gray-600/20',
//       border: 'border-gray-500/50',
//       benefits: [
//         // 'Cash prize',
//         // 'Software licenses',
//         // 'Development tools',
//         // 'Cloud credits',
//       ],
//     },
//   ];

//   return (
//     <section id="prizes" className="pt-12 pb-20 relative font-[Poppins]">
//       <div className="container mx-auto px-6">
//         <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-4 tracking-wide text-white">
//           PRIZE POOL
//         </h2>

//         <div className="text-center mb-8">
//           <h3 className="text-pink-400 text-2xl md:text-3xl font-bold mb-2">
//             ₹50,000+ TOTAL PRIZE POOL
//           </h3>
//           {/* <p className="text-gray-400 text-sm md:text-base">
//             Compete for cash prizes, tech gadgets, internship opportunities, and more!
//           </p> */}
//         </div>

//         <div className="grid md:grid-cols-3 gap-8 mb-8 max-w-6xl mx-auto">
//           {prizes.map((prize, index) => (
//             <div
//               key={index}
//               className={`glass-card p-8 rounded-2xl bg-gradient-to-br ${prize.bg} border ${prize.border} hover:scale-105 transform transition-all duration-300`}
//             >
//               <div className="text-center mb-4">
//                 <prize.icon className={`w-12 h-12 mx-auto mb-3 ${prize.color}`} />
//                 <h3 className="text-xl md:text-2xl font-bold text-white mb-1 tracking-wide">
//                   {prize.position}
//                 </h3>
//                 <div className={`text-3xl md:text-4xl font-extrabold ${prize.color}`}>
//                   {prize.amount}
//                 </div>
//               </div>
//               <ul className="mt-4 space-y-2 text-left text-sm md:text-base text-gray-300 pl-4 list-disc">
//                 {prize.benefits.map((benefit, i) => (
//                   <li key={i}>{benefit}</li>

//                 ))}
//               </ul>
//             </div>
//           ))}
//         </div>

//         {/* Certificate Info */}
//         <div className="glass-card p-6 md:p-8 rounded-2xl text-center max-w-4xl mx-auto border border-white/10 bg-white/5">
//           <p className="text-white text-base md:text-lg font-medium tracking-wide">
//             <span className="text-purple-400 font-semibold">CERTIFICATE OF PARTICIPATION</span> WILL BE PROVIDED FOR EVERYONE
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default PrizePool;

import { Trophy, Medal, BadgeDollarSign } from 'lucide-react';

const PrizePool = () => {
  const prizes = [
    {
      position: '1st PRIZE',
      amount: '₹20,000',
      icon: Trophy,
      color: 'text-yellow-400 drop-shadow-[0_0_35px_#00f6ff]',
      bg: 'from-yellow-500/20 to-orange-500/20',
      border: 'border-yellow-500/50',
      benefits: [],
    },
    {
      position: '2nd PRIZE',
      amount: '₹15,000',
      icon: Medal,
      color: 'text-cyan-400 drop-shadow-[0_0_35px_#00f6ff]',
      bg: 'from-gray-400/20 to-gray-600/20',
      border: 'border-gray-500/50',
      benefits: [],
    },
    {
      position: '3rd PRIZE',
      amount: '₹10,000',
      icon: BadgeDollarSign,
      color: 'text-fuchsia-500 drop-shadow-[0_0_35px_#00f6ff]',
      bg: 'from-orange-500/20 to-red-500/20',
      border: 'border-orange-500/50',
      benefits: [],
    },
  ];

  const consolationPrize = {
    position: 'CONSOLATION PRIZE',
    amount: '₹3,000',
    icon: BadgeDollarSign,
    color: 'text-green-400 drop-shadow-[0_0_35px_#00f6ff]',
    bg: 'from-gray-400/20 to-gray-600/20',
    border: 'border-gray-500/50',
    benefits: [],
  };

  return (
    <section id="prizes" className="pt-12 pb-20 relative font-[Poppins]">
      <div className="container mx-auto px-6">
        <h2 className=" font-audiowide text-4xl md:text-5xl font-extrabold text-center mb-4 tracking-wide text-white">
         <span className='text-yellow-400'>PRIZE</span> POOL
        </h2>

        <div className="text-center mb-8">
          <h3 className="text-white text-2xl md:text-3xl font-nunito font-bold mb-2">
            ₹50,000+ TOTAL PRIZE POOL
          </h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-8 max-w-6xl mx-auto">
          {prizes.map((prize, index) => (
            <div
              key={index}
              className={`glass-card p-8 font-nunito rounded-2xl bg-gradient-to-br ${prize.bg} border ${prize.border} hover:scale-105 transform transition-all duration-300`}
            >
              <div className="text-center mb-4">
                <prize.icon className={`w-12 h-12 mx-auto mb-3 ${prize.color}`} />
                <h3 className="text-xl md:text-2xl font-bold text-white mb-1 tracking-wide">
                  {prize.position}
                </h3>
                <div className={`text-3xl md:text-4xl font-extrabold ${prize.color}`}>
                  {prize.amount}
                </div>
              </div>
              <ul className="mt-4 space-y-2 text-left text-sm md:text-base text-gray-300 pl-4 list-disc">
                {prize.benefits.map((benefit, i) => (
                  <li key={i}>{benefit}</li>
                ))}
              </ul>
            </div>
          ))}
      <div className="md:col-span-2 md:ml-32 md:col-start-1 mt-6">
        <div
              className={`md:ml-[16.75rem] md:mr-0 font-nunito glass-card p-8 rounded-2xl bg-gradient-to-br ${consolationPrize.bg} border ${consolationPrize.border} hover:scale-105 transform transition-all duration-300`}
            >
          <div className=" text-center mb-4">
            <consolationPrize.icon className={`w-12 h-12 mx-auto mb-3 ${consolationPrize.color}`} />
            <h3 className="text-xl md:text-2xl font-bold text-white mb-1 tracking-wide">
              {consolationPrize.position}
            </h3>
            <div className={`text-3xl md:text-4xl font-nunito font-extrabold ${consolationPrize.color}`}>
              {consolationPrize.amount}
            </div>
          </div>
          <ul className="mt-4 space-y-2 text-left text-sm md:text-base text-gray-300 pl-4 list-disc">
            {consolationPrize.benefits.map((benefit, i) => (
              <li key={i}>{benefit}</li>
            ))}
          </ul>
        </div>
      </div>

        </div>

        {/* Certificate Info */}
        <div className="glass-card p-6 md:p-8 rounded-2xl text-center max-w-4xl mx-auto border border-white/10 bg-white/5">
          <p className="text-white text-base md:text-lg font-medium tracking-wide">
            <span className="text-purple-400 font-semibold">CERTIFICATE OF PARTICIPATION</span> WILL BE PROVIDED FOR EVERYONE
          </p>
        </div>
      </div>
    </section>
  );
};

export default PrizePool;

