import React from 'react';
import { Calendar, Users, Trophy, Flag, Upload, Award } from 'lucide-react';

const Timeline = () => {
  const timelineEvents = [
    {
      title: 'Registration Open',
      date: 'August 1, 2025',
      description: 'Sign up and form your teams',
      icon: Calendar,
      color: 'text-green-400',
      bg: 'bg-green-500/20'
    },
    {
      title: 'Registration Close',
      date: 'August 20, 2025',
      description: 'Last day to register for the hackathon',
      icon: Users,
      color: 'text-yellow-400',
      bg: 'bg-yellow-500/20'
    },
    {
      title: 'Prelims (Online)',
      date: 'August 21, 2025',
      description: 'Online preliminary round to select finalists',
      icon: Trophy,
      color: 'text-purple-400',
      bg: 'bg-purple-500/20'
    },
    {
      title: 'Final 24-Hour Hackathon',
      date: 'August 23-24, 2025',
      description: 'The main event begins! 24 hours of non-stop coding',
      icon: Flag,
      color: 'text-cyan-400',
      bg: 'bg-cyan-500/20'
    },
    {
      title: 'Submission Deadline',
      date: 'August 24, 2025 - 11:59 PM',
      description: 'Final submissions and presentations',
      icon: Upload,
      color: 'text-orange-400',
      bg: 'bg-orange-500/20'
    },
    {
      title: 'Result Announcement',
      date: 'August 25, 2025',
      description: 'Winners declared and prizes distributed',
      icon: Award,
      color: 'text-pink-400',
      bg: 'bg-pink-500/20'
    }
  ];

  return (
    <section id="timeline" className="py-20 relative">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          <span className="text-cyan-400 glow-text">Event</span> Timeline
        </h2>

        <div className="max-w-4xl mx-auto">
          {/* Desktop Timeline */}
          <div className="hidden md:block relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-cyan-500 via-purple-500 to-pink-500"></div>
            
            {timelineEvents.map((event, index) => (
              <div
                key={index}
                className={`flex items-center mb-12 ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                }`}
              >
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                  <div className={`glass-card p-6 rounded-2xl ${event.bg} border border-gray-700/50 transform hover:scale-105 transition-all duration-300`}>
                    <h3 className="text-xl font-bold text-white mb-2">{event.title}</h3>
                    <p className={`text-lg font-semibold ${event.color} mb-2`}>{event.date}</p>
                    <p className="text-gray-400">{event.description}</p>
                  </div>
                </div>
                
                <div className="relative z-10">
                  <div className={`w-16 h-16 rounded-full ${event.bg} border-4 border-gray-800 flex items-center justify-center`}>
                    <event.icon className={`w-8 h-8 ${event.color}`} />
                  </div>
                </div>
                
                <div className="w-1/2"></div>
              </div>
            ))}
          </div>

          {/* Mobile Timeline */}
          <div className="md:hidden space-y-8">
            {timelineEvents.map((event, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className={`flex-shrink-0 w-12 h-12 rounded-full ${event.bg} border-2 border-gray-700 flex items-center justify-center`}>
                  <event.icon className={`w-6 h-6 ${event.color}`} />
                </div>
                <div className="glass-card p-4 rounded-xl flex-1">
                  <h3 className="text-lg font-bold text-white mb-1">{event.title}</h3>
                  <p className={`text-sm font-semibold ${event.color} mb-2`}>{event.date}</p>
                  <p className="text-gray-400 text-sm">{event.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;