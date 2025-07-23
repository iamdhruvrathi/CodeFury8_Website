import React, { useEffect, useState } from 'react';
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

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % highlightImages.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const getIndices = (index: number) => {
    const center = index % highlightImages.length;
    const left = (index - 1 + highlightImages.length) % highlightImages.length;
    const right = (index + 1) % highlightImages.length;
    return { left, center, right };
  };

  const { left, center, right } = getIndices(currentIndex);

  return (
    <section id="wall" className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-6">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">
          <span className="text-purple-400 glow-text">CodeFury</span> Wall
        </h2>

        {/* Sliding Gallery */}
        <div className="relative h-56 sm:h-72 md:h-96 w-full mb-20 overflow-hidden">
          <div className="flex justify-center items-center h-full relative transition-all duration-1000 ease-in-out">
            {/* Left Image */}
            <img
              src={highlightImages[left]}
              alt="Left"
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-40 sm:w-52 md:w-64 h-auto object-cover opacity-40 blur-sm scale-90 rounded-xl shadow-inner z-10 transition-all duration-1000 ease-in-out"
              style={{ transform: 'translateY(-50%) translateX(-50%)' }}
            />
            {/* Center Image */}
            <img
              src={highlightImages[center]}
              alt="Center"
              className="relative w-56 sm:w-72 md:w-96 h-auto object-cover rounded-2xl shadow-xl z-20 transition-all duration-1000 ease-in-out"
            />
            {/* Right Image */}
            <img
              src={highlightImages[right]}
              alt="Right"
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-40 sm:w-52 md:w-64 h-auto object-cover opacity-40 blur-sm scale-90 rounded-xl shadow-inner z-10 transition-all duration-1000 ease-in-out"
              style={{ transform: 'translateY(-50%) translateX(50%)' }}
            />
          </div>
        </div>

        {/* Past Winners (Unchanged) */}
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
    </section>
  );
};

export default CodeFuryWall;
