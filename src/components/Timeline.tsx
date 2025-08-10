import {
  Calendar,
  Users,
  Trophy,
  Flag,
  Lightbulb,
  ListTodo,
} from 'lucide-react';

const Timeline = () => {
  const timelineEvents = [
    {
      title: 'Registration Opens',
      date: 'August 1, 2025',
      description: 'Kickstart your CodeFury journey form your dream team and register!',
      icon: Users,
      color: 'text-green-400',
      bg: 'bg-green-500/20'
    },
    {
      title: 'Workshop',
      date: '12th and 13th August 2025',
      description: 'Offline hands-on workshop to get you hackathon-ready.',
      icon: Lightbulb,
      color: 'text-yellow-400',
      bg: 'bg-yellow-500/20'
    },
    {
      title: 'Mini Game and Mini Challenge',
      date: '',
      description: 'Participate in our surprise mini game & challenge to win exciting discounts on registration fees!',
      icon: ListTodo,
      color: 'text-green-400',
      bg: 'bg-green-500/20'
    },
    {
      title: 'Registration Closes',
      date: 'August 19, 2025',
      description: 'Final call! Register before the portal closes.',
      icon: Calendar,
      color: 'text-yellow-400',
      bg: 'bg-yellow-500/20'
    },
    {
      title: 'CodeFury Round 1',
      date: 'August 22-23, 2025',
      description: 'The 24-hour coding showdown begins.  [22nd 6pm to 23rd 6pm]',
      icon: Trophy,
      color: 'text-fuchsia-500',
      bg: 'bg-fuchsia-500/20'
    },
    {
      title: 'CodeFury Round 2',
      date: 'August 24, 2025',
      description: 'Top teams present their innovations to the jury. [24th 10am onwards]',
      icon: Flag,
      color: 'text-fuchsia-500',
      bg: 'bg-fuchsia-500/20'
    }
  ];

  return (
    <section id="timeline" className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-audiowide text-center mb-20">
          <span className="text-fuchsia-500 glow-text">Event</span> Timeline
        </h2>

        <div className="relative max-w-6xl mx-auto font-nunito">
          <div className="grid gap-20">
            {timelineEvents.map((event, index) => {
              const Icon = event.icon;
              const isEven = index % 2 === 0;

              return (
                <div
                  key={index}
                  className={`relative flex flex-col items-center md:flex-row ${isEven ? 'md:flex-row-reverse' : ''}`}
                >
                  {/* Icon */}
                  <div className="z-10 mb-4 md:mb-0">
                    <div className={`w-14 h-14 sm:w-16 sm:h-16 rounded-full ${event.bg} border-4 border-gray-800 flex items-center justify-center shadow-lg`}>
                      <Icon className={`w-6 h-6 sm:w-8 sm:h-8 ${event.color}`} />
                    </div>
                  </div>

                  {/* Optional line connector (desktop only) */}
                  <div className="hidden md:block absolute top-8 w-full h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent"></div>

                  {/* Card */}
                  <div className={`w-full md:w-[48%] max-w-xl glass-card bg-white/5 backdrop-blur-md border border-gray-700/40 p-5 sm:p-6 rounded-2xl ${isEven ? 'md:mr-6' : 'md:ml-6'}`}>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 ">{event.title}</h3>
                    <p className={`text-sm sm:text-md font-semibold ${event.color} mb-2 `}>{event.date}</p>
                    <p className="text-gray-400 text-sm sm:text-base">{event.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
