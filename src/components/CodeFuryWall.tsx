import React from 'react';
import { ExternalLink, Github, Calendar, Award } from 'lucide-react';

const CodeFuryWall = () => {
  const pastWinners = [
    {
      year: '2024',
      project: 'EcoTracker Pro',
      team: 'Green Coders',
      description: 'AI-powered carbon footprint tracking app with gamification',
      tech: ['React', 'Node.js', 'ML'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      year: '2023',
      project: 'HealthBridge',
      team: 'MedTech Warriors',
      description: 'Telemedicine platform connecting rural areas to urban healthcare',
      tech: ['Flutter', 'Firebase', 'WebRTC'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      year: '2022',
      project: 'StudySync',
      team: 'EduInnovators',
      description: 'Collaborative learning platform with real-time study rooms',
      tech: ['Vue.js', 'Socket.io', 'MongoDB'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      year: '2021',
      project: 'FoodRescue',
      team: 'Zero Waste',
      description: 'App connecting surplus food from restaurants to NGOs',
      tech: ['React Native', 'Express', 'PostgreSQL'],
      liveUrl: '#',
      githubUrl: '#'
    }
  ];

  const highlights = [
    {
      title: 'CodeFury 7.0 Opening Ceremony',
      image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg',
      description: '500+ participants joined virtually'
    },
    {
      title: 'Judging Panel Session',
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg',
      description: 'Industry experts evaluating projects'
    },
    {
      title: 'Winner Announcement',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg',
      description: 'Celebrating the champions'
    },
    {
      title: 'Team Collaboration',
      image: 'https://images.pexels.com/photos/3182773/pexels-photo-3182773.jpeg',
      description: '24 hours of intense coding'
    }
  ];

  return (
    <section id="wall" className="py-20 relative">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          <span className="text-purple-400 glow-text">CodeFury</span> Wall
        </h2>

        {/* Past Winners */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-center mb-12 text-cyan-400">
            <Award className="w-6 h-6 inline mr-2" />
            Past Winners
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {pastWinners.map((winner, index) => (
              <div
                key={index}
                className="glass-card p-6 rounded-2xl transform hover:scale-105 transition-all duration-300 group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="flex items-center space-x-2 mb-2">
                      <Calendar className="w-4 h-4 text-cyan-400" />
                      <span className="text-cyan-400 font-semibold">{winner.year}</span>
                    </div>
                    <h4 className="text-xl font-bold text-white mb-1">{winner.project}</h4>
                    <p className="text-purple-400 font-medium">{winner.team}</p>
                  </div>
                  <Award className="w-8 h-8 text-yellow-400" />
                </div>
                
                <p className="text-gray-300 mb-4">{winner.description}</p>
                
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
                  <button className="flex items-center space-x-1 text-green-400 hover:text-green-300 transition-colors">
                    <ExternalLink className="w-4 h-4" />
                    <span className="text-sm">Live Demo</span>
                  </button>
                  <button className="flex items-center space-x-1 text-gray-400 hover:text-gray-300 transition-colors">
                    <Github className="w-4 h-4" />
                    <span className="text-sm">GitHub</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Photo Highlights */}
        <div>
          <h3 className="text-2xl font-bold text-center mb-12 text-purple-400">
            Event Highlights
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {highlights.map((highlight, index) => (
              <div
                key={index}
                className="glass-card rounded-2xl overflow-hidden transform hover:scale-105 transition-all duration-300 group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={highlight.image}
                    alt={highlight.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
                </div>
                <div className="p-4">
                  <h4 className="text-lg font-bold text-white mb-2">{highlight.title}</h4>
                  <p className="text-gray-400 text-sm">{highlight.description}</p>
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