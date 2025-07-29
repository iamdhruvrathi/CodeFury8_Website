// PastWinners.tsx
import React from 'react';
import { ExternalLink, Github, Award } from 'lucide-react';

const pastWinners = [
  {
    track: 'Web Dev Track - Winners',
    project: 'EcoTracker Pro',
    team: 'Green Coders',
    description: 'AI-powered carbon footprint tracking app with gamification',
    tech: ['React', 'Node.js', 'ML'],
  },
  {
    track: 'Web Dev Track - Runners',
    project: 'HealthBridge',
    team: 'MedTech Warriors',
    description: 'Telemedicine platform connecting rural areas to urban healthcare',
    tech: ['Flutter', 'Firebase', 'WebRTC'],
  },
  {
    track: 'App Dev Track - Winners',
    project: 'StudySync',
    team: 'EduInnovators',
    description: 'Collaborative learning platform with real-time study rooms',
    tech: ['Vue.js', 'Socket.io', 'MongoDB'],
  },
  {
    track: 'App Dev Track - Runners',
    project: 'FoodRescue',
    team: 'Zero Waste',
    description: 'App connecting surplus food from restaurants to NGOs',
    tech: ['React Native', 'Express', 'PostgreSQL'],
  },
];

const PastWinners = () => {
  return (
    <section id="past" className="py-10">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-audiowide text-center mb-12">
          <span className="text-purple-400 glow-text">Past</span> Winners
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto px-2">
          {pastWinners.map((winner, index) => (
            <div
              key={index}
              className="glass-card p-4 sm:p-6 rounded-2xl transform hover:scale-105 transition-all duration-300 group relative"
            >
              <div className="mb-4 flex justify-between items-start">
                <h4 className="text-lg sm:text-xl font-semibold text-cyan-400">
                  {winner.track}
                </h4>
                <Award className="w-5 h-5 text-yellow-400" />
              </div>

              <h3 className="text-xl sm:text-2xl font-bold font-poppins text-white mb-1">
                {winner.project}
              </h3>
              <p className="text-purple-400 font-medium text-sm sm:text-base mb-2">
                {winner.team}
              </p>

              <p className="text-gray-300 text-sm sm:text-base mb-4">
                {winner.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {winner.tech.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-2 py-1 bg-gray-800/50 text-cyan-400 rounded-full text-xs border border-gray-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex space-x-3">
                <a
                  href="https://example.com"
                  className="flex items-center space-x-1 text-green-400 hover:text-green-300 transition-colors text-sm"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Live Demo</span>
                </a>
                <a
                  href="https://github.com/example"
                  className="flex items-center space-x-1 text-gray-400 hover:text-gray-300 transition-colors text-sm"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PastWinners;
