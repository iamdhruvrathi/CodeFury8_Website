import { Calendar, Users, Trophy, Flag, Lightbulb, ListTodo, Upload, Award } from 'lucide-react';

const Timeline = () => {
  const timelineEvents = [
    {
      title: 'Registration Opens',
      date: 'August 1, 2025',
      description: 'Kickstart your CodeFury journey – form your dream team and register!',
      icon: Users, // Better represents team-based registration
      color: 'text-green-400',
      bg: 'bg-green-500/20'
    },
    {
      title: 'Workshop',
      date: 'August 8, 2025',
      description: 'Offline hands-on workshop to get you hackathon-ready.',
      icon: Lightbulb, // Represents learning and idea generation
      color: 'text-green-400',
      bg: 'bg-green-500/20'
    },
    {
      title: 'Mini Challenge',
      date: '',
      description: 'A surprise mini challenge to stir up the excitement!',
      icon: ListTodo, // Represents a challenge or task
      color: 'text-green-400',
      bg: 'bg-green-500/20'
    },
    {
      title: 'Registration Closes',
      date: 'August 19, 2025',
      description: 'Final call! Register before the portal closes.',
      icon: Calendar, // Denotes deadline well
      color: 'text-yellow-400',
      bg: 'bg-yellow-500/20'
    },
    {
      title: 'CodeFury Round 1',
      date: 'August 22-23, 2025',
      description: 'The 24-hour coding showdown begins!',
      icon: Trophy, // Perfect for competition
      color: 'text-purple-400',
      bg: 'bg-purple-500/20'
    },
    {
      title: 'CodeFury Round 2',
      date: 'August 24, 2025',
      description: 'Top teams present their innovations to the jury.',
      icon: Flag, // Represents final stage or goal
      color: 'text-cyan-400',
      bg: 'bg-cyan-500/20'
    },
    /*{
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
    }*/
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