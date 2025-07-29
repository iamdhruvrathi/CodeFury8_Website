import { Globe, Smartphone, Code } from 'lucide-react';

const Tracks = () => {
  const tracks = [
    {
      title: 'Web Development',
      description:
        'Build modern, scalable websites and web applications for real-world problems. Use cutting-edge technologies like React, Vue, Angular, or explore emerging frameworks.',
      icon: Globe,
      color: 'text-cyan-400',
      bg: 'from-cyan-500/20 to-blue-500/20',
      border: 'border-cyan-500/50',
      technologies: ['React', 'Next.js', 'Vue', 'Angular', 'Node.js', 'Express'],
    },
    // Uncomment below to add more tracks:
    // {
    //   title: 'App Development',
    //   description: 'Create innovative mobile applications using Flutter or Android Studio. Develop cross-platform or native apps that solve everyday challenges.',
    //   icon: Smartphone,
    //   color: 'text-purple-400',
    //   bg: 'from-purple-500/20 to-pink-500/20',
    //   border: 'border-purple-500/50',
    //   technologies: ['Flutter', 'Dart', 'Android Studio', 'Java', 'Kotlin', 'Firebase'],
    // },
  ];

  return (
    <section id="tracks" className="py-20 relative">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl text-center mb-16 font-audiowide">
          <span className="text-purple-400 glow-text">Tracks</span>
        </h2>

        <div className="font-nunito grid md:grid-cols-1 gap-12 max-w-6xl mx-auto">
          {tracks.map((track, index) => (
            <div
              key={index}
              className={`glass-card p-8 rounded-2xl bg-gradient-to-br ${track.bg} border ${track.border} transform hover:scale-105 transition-all duration-300 group cursor-pointer`}
            >
              <div className="text-center mb-6">
                <div
                  className={`inline-flex p-4 rounded-full bg-gray-800/50 mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <track.icon className={`w-12 h-12 ${track.color}`} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 font-poppins">{track.title}</h3>
                <p className="text-gray-300 leading-relaxed text-justify">{track.description}</p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-center">
                  <Code className={`w-5 h-5 ${track.color} mr-2`} />
                  <span className="text-white font-semibold">Popular Technologies</span>
                </div>
                <div className="flex flex-wrap gap-2 justify-center">
                  {track.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className={`px-3 py-1 rounded-full text-sm bg-gray-800/50 ${track.color} border border-gray-700 hover:border-current transition-colors duration-300`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 ">
          <p className="text-xl text-gray-400 mb-4 text-center max-w-3xl mx-auto font-nunito">
            Choose your track and start building the future!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Tracks;
