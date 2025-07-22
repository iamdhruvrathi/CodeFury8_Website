import React from 'react';
import { ExternalLink, Github, Award } from 'lucide-react';

const CodeFuryWall = () => {
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

  const highlightImages = [
    'https://images.pexels.com/photos/3184300/pexels-photo-3184300.jpeg',
    'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg',
    'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg',
    'https://images.pexels.com/photos/3182773/pexels-photo-3182773.jpeg',
    'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg',
    'https://images.pexels.com/photos/1181353/pexels-photo-1181353.jpeg',
    'https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg',
    'https://images.pexels.com/photos/3184433/pexels-photo-3184433.jpeg',
    'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg',
    'https://images.pexels.com/photos/1181289/pexels-photo-1181289.jpeg',
  ];

  return (
    <section id="wall" className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Title */}
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">
          <span className="text-purple-400 glow-text">CodeFury</span> Wall
        </h2>

        {/* Infinite Scroll Image Carousel */}
        <div className="overflow-hidden w-full mb-16">
          <div
            className="flex gap-4 animate-scroll-infinite w-max"
            onTouchStart={(e) => e.currentTarget.classList.add('paused')}
            onTouchEnd={(e) => e.currentTarget.classList.remove('paused')}
            onMouseEnter={(e) => e.currentTarget.classList.add('paused')}
            onMouseLeave={(e) => e.currentTarget.classList.remove('paused')}
          >
            {[...highlightImages, ...highlightImages].map((src, index) => (
              <img
                key={index}
                src={src}
                alt={`Highlight ${index + 1}`}
                className="w-48 h-32 md:w-60 md:h-40 object-cover rounded-xl flex-shrink-0"
              />
            ))}
          </div>
        </div>

        {/* Past Winners Section */}
        <div className="mb-10">
          <h3 className="text-2xl font-bold text-center mb-10 text-cyan-400">
            <Award className="w-6 h-6 inline mr-2" />
            Past Winners
          </h3>

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

                <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">
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
      </div>

      {/* Tailwind Custom Animation */}
      <style>{`
        @keyframes scroll-infinite {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll-infinite {
          animation: scroll-infinite 50s linear infinite;
        }
        .paused {
          animation-play-state: paused !important;
        }
      `}</style>
    </section>
  );
};

export default CodeFuryWall;
