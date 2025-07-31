import React from 'react';
import { ExternalLink, Github, Trophy, Award } from 'lucide-react';

const pastWinners = [
  {
    track: 'Web Dev Track - Winners',
    project: 'Astero',
    team: 'Goofy Gophers',
    description: 'NMAM Institute of Technology',
    tech: ['Next.js', 'Google Maps API', 'MongoDB'],
    github: 'https://github.com/Team-Goofy-Gophers/website',
    live: 'https://astero-rho.vercel.app/',
    type: 'winner',
  },
  {
    track: 'Web Dev Track - Runners',
    project: 'Relief Compass',
    team: 'Team POV',
    description: 'Dr. Ambedhkar Institute of Technology',
    tech: ['React.js', 'Tailwind', 'Firebase'],
    github: 'https://github.com/Karthikeyan1508/crisis-connect',
    live: 'https://code-fury-submission.vercel.app/',
    type: 'runner',
  },
  {
    track: 'App Dev Track - Winners',
    project: 'Rescue Ring',
    team: 'Night Owls',
    description: 'Dayanand Sagar Institute of Technology',
    tech: ['Flutter', 'Dart', 'Firebase'],
    github: 'https://github.com/chetanr250/disaster-ready',
    live: '',
    type: 'winner',
  },
  {
    track: 'App Dev Track - Runners',
    project: 'ResQAids',
    team: 'Widget Wizards',
    description: 'Ambedhkar Institute of Technology',
    tech: ['Flutter', 'Dart', 'Google API'],
    github: 'https://github.com/aryanmajhi75/Widget-Wizards---Codefury-Hackathon',
    live: '',
    type: 'runner',
  },
];

const PastWinners = () => {
  return (
    <section id="past" className="py-16">
      <div className="container font-nunito mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-audiowide text-center mb-16">
          <span className="text-fuchsia-500 glow-text">Past</span> Winners
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto px-2">
          {pastWinners.map((winner, index) => {
            const Icon = winner.type === 'winner' ? Trophy : Award;
            const iconColor = winner.type === 'winner' ? 'text-yellow-400' : 'text-purple-400';

            return (
              <div
                key={index}
                className="glass-card p-5 sm:p-6 rounded-2xl transform hover:scale-[1.02] transition-all duration-300 group relative border border-gray-700/50 bg-white/5 backdrop-blur-md"
              >
                <div className="mb-4 flex justify-between items-center font-poppins">
                  <h4 className="text-sm sm:text-base font-medium text-gray-300">
                    {winner.track}
                  </h4>
                  <Icon className={`w-5 h-5 ${iconColor}`} />
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">
                  {winner.project}
                </h3>
                <p className="text-purple-300 font-medium text-sm sm:text-base mb-2">
                  {winner.team}
                </p>

                <p className="text-gray-400 text-sm sm:text-base mb-4">
                  {winner.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
  {winner.tech.map((tech, techIndex) => (
    <span
      key={techIndex}
      className="px-2 py-1 bg-gray-800/50 text-gray-300 border border-gray-700 text-xs rounded-full hover:text-cyan-400 transition-colors duration-200"
    >
      {tech}
    </span>
  ))}
</div>


                <div className="flex space-x-3 hover:text-cyan-300">
                  {winner.live && (
                    <a
                      href={winner.live}
                      className="flex items-center gap-1 text-cyan-400 transition-colors text-sm"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>Live Demo</span>
                    </a>
                  )}
                  <a
                    href={winner.github}
                    className="flex items-center gap-1 text-gray-400 hover:text-gray-300 transition-colors text-sm"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="w-4 h-4" />
                    <span>GitHub</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PastWinners;



// // PastWinners.tsx
// import React from 'react';
// import { ExternalLink, Github, Award } from 'lucide-react';

// const pastWinners = [
//   {
//     track: 'Web Dev Track - Winners',
//     project: 'Astero',
//     team: 'Goofy Gophers',
//     description: 'NMAM Institute of Technology',
//     tech: ['Next.js', 'Google Maps API', 'MongoDB'],
//     github: 'https://github.com/Team-Goofy-Gophers/website',
//     live: 'https://astero-rho.vercel.app/',
//   },
//   {
//     track: 'Web Dev Track - Runners',
//     project: 'Relief Compass',
//     team: 'Team POV',
//     description: 'Dr. Ambedhkar Institute of Technology',
//     tech: ['React.js', 'Tailwind', 'Firebase'],
//     github: 'https://github.com/Karthikeyan1508/crisis-connect',
//     live: 'https://code-fury-submission.vercel.app/',
//   },
//   {
//     track: 'App Dev Track - Winners',
//     project: 'Rescue Ring',
//     team: 'Night Owls',
//     description: 'Dayanand Sagar Institute of Technology',
//     tech: ['Flutter', 'Dart', 'Firebase'],
//     github: 'https://github.com/chetanr250/disaster-ready',
//     live: '',
//   },
//   {
//     track: 'App Dev Track - Runners',
//     project: 'ResQAids',
//     team: 'Widget Wizards',
//     description: 'Ambedhkar Institute of Technology',
//     tech: ['Flutter', 'Dart', 'Google API'],
//     github: 'https://github.com/aryanmajhi75/Widget-Wizards---Codefury-Hackathon',
//     live: '',
//   },
// ];

// const PastWinners = () => {
//   return (
//     <section id="past" className="py-10">
//       <div className="container font-nunito mx-auto px-4">
//         <h2 className="text-3xl md:text-5xl font-audiowide text-center mb-12">
//           <span className="text-purple-400 glow-text">Past</span> Winners
//         </h2>

//         <div className="grid font-nunito grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto px-2">
//           {pastWinners.map((winner, index) => (
//             <div
//               key={index}
//               className="glass-card p-4 sm:p-6 rounded-2xl transform hover:scale-105 transition-all duration-300 group relative"
//             >
//               <div className="mb-4 flex justify-between items-start">
//                 <h4 className="text-lg sm:text-xl font-semibold text-cyan-400">
//                   {winner.track}
//                 </h4>
//                 <Award className="w-5 h-5 text-yellow-400" />
//               </div>

//               <h3 className="text-xl sm:text-2xl font-bold font-nunito text-white mb-1">
//                 {winner.project}
//               </h3>
//               <p className="text-purple-400 font-medium text-sm sm:text-base mb-2">
//                 {winner.team}
//               </p>

//               <p className="text-gray-300 text-sm sm:text-base mb-4">
//                 {winner.description}
//               </p>

//               <div className="flex flex-wrap gap-2 mb-4">
//                 {winner.tech.map((tech, techIndex) => (
//                   <span
//                     key={techIndex}
//                     className="px-2 py-1 bg-gray-800/50 text-cyan-400 rounded-full text-xs border border-gray-700"
//                   >
//                     {tech}
//                   </span>
//                 ))}
//               </div>

//               <div className="flex space-x-3">
//                 {winner.live && (
//                   <a
//                     href={winner.live}
//                     className="flex items-center space-x-1 text-green-400 hover:text-green-300 transition-colors text-sm"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                   >
//                     <ExternalLink className="w-4 h-4" />
//                     <span>Live Demo</span>
//                   </a>
//                 )}
//                 <a
//                   href={winner.github}
//                   className="flex items-center space-x-1 text-gray-400 hover:text-gray-300 transition-colors text-sm"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                 >
//                   <Github className="w-4 h-4" />
//                   <span>GitHub</span>
//                 </a>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default PastWinners;
