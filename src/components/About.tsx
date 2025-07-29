import { Users, Award, Globe, Code } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl text-center mb-16 font-audiowide">
          <span className="text-cyan-400 glow-text">About</span> Us
        </h2>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto font-nunito">
          {/* IEEE UVCE & Computer Society SIG */}
          <div className="glass-card p-8 rounded-2xl">
            <div className="flex items-center mb-6">
              <Users className="w-8 h-8 text-fuchsia-400 mr-4" />
              <h3 className="text-2xl font-bold font-poppins text-white">IEEE UVCE & Computer Society</h3>
            </div>
            <p className="text-gray-300 leading-relaxed mb-4 text-justify">
              IEEE UVCE is the student branch of IEEE at the University of Visvesvaraya College of Engineering, operating under the IEEE Bangalore Section. Established in 2001, it has grown into a vibrant platform for students to explore innovation, research, and leadership through national and global IEEE events, technical interest groups, and collaborative initiatives. The branch actively promotes technical excellence, professional development, and community engagement, shaping the next generation of engineers.
            </p>
            <p className="text-gray-300 leading-relaxed text-justify">
              The IEEE UVCE Computer Society is a dedicated technical chapter focused on fostering a culture of innovation and problem-solving. It regularly conducts coding competitions, hackathons, workshops, and tech talks addressing real-world challenges. With a strong emphasis on skill-building and peer learning, the society empowers students to grow into competent and impactful tech professionals.
            </p>
            <div className="flex items-center space-x-4 mt-6">
              <div className="flex items-center">
                <Globe className="w-5 h-5 text-cyan-400 mr-2" />
                <span className="text-cyan-400">500+ Members</span>
              </div>
              <div className="flex items-center">
                <Award className="w-5 h-5 text-fuchsia-400 mr-2" />
                <span className="text-fuchsia-400">25+ Years</span>
              </div>
            </div>
          </div>

          {/* About CodeFury */}
          <div className="glass-card p-8 rounded-2xl">
            <div className="flex items-center mb-6">
              <Code className="w-8 h-8 text-cyan-400 mr-4" />
              <h3 className="text-2xl font-bold text-white font-poppins">
                About CodeFury <span className="text-sm text-fuchsia-400 align-top font-poppins">v8.0</span>
              </h3>
            </div>
            <p className="text-gray-300 leading-relaxed mb-4 text-justify">
              CodeFury is our flagship Annual National-Level Hackathon that brings together the brightest minds in programming and innovation. This 24-hour intensive coding marathon challenges participants to build revolutionary solutions to real-world problems.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4 text-justify">
              Open to students from all colleges and universities, CodeFury has grown to become one of the most prestigious hackathons in the region, attracting participants from across the country.
            </p>
            <div className="grid grid-cols-2 gap-4 mt-6">
              <div className="text-center p-4 bg-gray-800/50 rounded-lg">
                <div className="text-2xl font-bold text-cyan-400">500+</div>
                <div className="text-sm text-gray-400">Participants</div>
              </div>
              <div className="text-center p-4 bg-gray-800/50 rounded-lg">
                <div className="text-2xl font-bold text-fuchsia-400">24hrs</div>
                <div className="text-sm text-gray-400">Non-stop</div>
              </div>
              <div className="text-center p-4 bg-gray-800/50 rounded-lg">
                <div className="text-2xl font-bold text-green-400">₹60K</div>
                <div className="text-sm text-gray-400">Prize Pool</div>
              </div>
              <div className="text-center p-4 bg-gray-800/50 rounded-lg">
                <div className="text-2xl font-bold text-yellow-400">100%</div>
                <div className="text-sm text-gray-400">Online</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
