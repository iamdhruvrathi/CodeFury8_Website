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
          <div className="glass-card p-8 rounded-2xl ">
            <div className="flex items-center mb-6">
              <Users className="w-8 h-8 text-purple-400 mr-4" />
              <h3 className="text-2xl font-bold font-poppins text-white">IEEE UVCE & Computer Society</h3>
            </div>
            <p className="text-gray-300 leading-relaxed mb-4">
              IEEE UVCE Student Branch, established in 2001, is one of the most active technical communities 
              at University Visvesvaraya College of Engineering. We foster innovation, technical excellence, 
              and professional development among students.
            </p>
            <p className="text-gray-300 leading-relaxed">
            The 'IEEE UVCE Computer Society' is a distinguished technical society within IEEE UVCE. It is dedicated to hosting regular technical events like coding competitions and hackathons that tackle current societal issues and create a positive impact. The main goal is to foster a dynamic and skilled student community by encouraging technical excellence and innovation.
            </p>
            <div className="flex items-center space-x-4 mt-6">
              <div className="flex items-center">
                <Globe className="w-5 h-5 text-cyan-400 mr-2" />
                <span className="text-cyan-400">500+ Members</span>
              </div>
              <div className="flex items-center">
                <Award className="w-5 h-5 text-purple-400 mr-2" />
                <span className="text-purple-400">15+ Years</span>
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
            <p className="text-gray-300 leading-relaxed mb-4">
              CodeFury is our flagship Annual National-Level Hackathon that brings together the brightest minds in 
              programming and innovation. This 24-hour intensive coding marathon challenges participants 
              to build revolutionary solutions to real-world problems.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              Open to students from all colleges and universities, CodeFury has grown to become one of 
              the most prestigious hackathons in the region, attracting participants from across the country.
            </p>
            <div className="grid grid-cols-2 gap-4 mt-6">
              <div className="text-center p-4 bg-gray-800/50 rounded-lg">
                <div className="text-2xl font-bold text-cyan-400">500+</div>
                <div className="text-sm text-gray-400">Participants</div>
              </div>
              <div className="text-center p-4 bg-gray-800/50 rounded-lg">
                <div className="text-2xl font-bold text-purple-400">24hrs</div>
                <div className="text-sm text-gray-400">Non-stop</div>
              </div>
              <div className="text-center p-4 bg-gray-800/50 rounded-lg">
                <div className="text-2xl font-bold text-green-400">₹60K+</div>
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


// import { Users, Target, Award, Globe, School } from 'lucide-react';

// const About = () => {
//   return (
//     <section id="about" className="py-20 relative">
//       <div className="container mx-auto px-6">
//         <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
//           <span className="text-cyan-400">About</span> Us
//         </h2>

//         <div className="flex flex-col gap-12 max-w-4xl mx-auto">
//           {/* About UVCE */}
//           <div className="glass-card p-8 rounded-2xl">
//             <div className="flex items-center mb-6">
//               <School className="w-8 h-8 text-yellow-400 mr-4" />
//               <h3 className="text-2xl font-bold text-white">About UVCE</h3>
//             </div>
//             <p className="text-gray-300 leading-relaxed">
//               University of Visvesvaraya College of Engineering, established in 1917 by Bharat Ratna Sir M Visvesvaraya. UVCE stands as the fifth engineering college in India and the first in Karnataka. UVCE provides 8 undergraduate, 24 postgraduate, and various research programs in fields such as Computer Science and Engineering, Information Science and Engineering, Artificial Intelligence and Machine Learning, Electronics and Communication Engineering, Electrical and Electronics Engineering, Mechanical Engineering, Civil Engineering, and Architecture. UVCE is dedicated to delivering high-quality technical education and is recognized as one of the top engineering colleges in Karnataka.
//             </p>
//           </div>

//           {/* About IEEE UVCE */}
//           <div className="glass-card p-8 rounded-2xl">
//             <div className="flex items-center mb-6">
//               <Users className="w-8 h-8 text-purple-400 mr-4" />
//               <h3 className="text-2xl font-bold text-white">About IEEE UVCE</h3>
//             </div>
//             <p className="text-gray-300 leading-relaxed">
//               The 'IEEE UVCE Computer Society' is a distinguished technical society within IEEE UVCE. It is dedicated to hosting regular technical events like coding competitions and hackathons that tackle current societal issues and create a positive impact. The main goal is to foster a dynamic and skilled student community by encouraging technical excellence and innovation.
//             </p>
//             <div className="flex items-center space-x-4 mt-6">
//               <div className="flex items-center">
//                 <Globe className="w-5 h-5 text-cyan-400 mr-2" />
//                 <span className="text-cyan-400">500+ Members</span>
//               </div>
//               <div className="flex items-center">
//                 <Award className="w-5 h-5 text-purple-400 mr-2" />
//                 <span className="text-purple-400">15+ Years</span>
//               </div>
//             </div>
//           </div>

//           {/* About Computer Society SIG */}
//           <div className="glass-card p-8 rounded-2xl">
//             <div className="flex items-center mb-6">
//               <Users className="w-8 h-8 text-cyan-400 mr-4" />
//               <h3 className="text-2xl font-bold text-white">About IEEE UVCE Computer Society</h3>
//             </div>
//             <p className="text-gray-300 leading-relaxed">
//               The Computer Society SIG (Special Interest Group) under IEEE UVCE aims to promote excellence in the field of computing. It provides a platform for students to explore cutting-edge technologies, participate in hackathons, attend coding workshops, and sharpen their problem-solving abilities. The SIG fosters collaboration, knowledge-sharing, and hands-on experience in various domains of computer science.
//             </p>
//           </div>

//           {/* About CodeFury 8.0 */}
//           <div className="glass-card p-8 rounded-2xl">
//             <div className="flex items-center mb-6">
//               <Target className="w-8 h-8 text-cyan-400 mr-4" />
//               <h3 className="text-2xl font-bold text-white">About CodeFury 8.0</h3>
//             </div>

//             <p className="text-gray-300 leading-relaxed mb-4">
//               CodeFury is the IEEE UVCE Computer Society's Annual National-Level hackathon. Our goal is to host
//               hackathons annually to tackle significant challenges faced by society and the industry, thereby
//               creating a real-world impact.
//             </p>

//             <p className="text-gray-300 leading-relaxed mb-4">
//               Participants can develop solutions to real-world issues from the comfort of their homes by creating
//               either a Web Application or an Android Application within 24 hours. Mark your calendars for the
//               10<sup>th</sup> and 11<sup>th</sup> of August, 2024, and get ready for one of the best hackathons
//               you’ve ever experienced!
//             </p>

//             <p className="text-gray-300 leading-relaxed mb-4">
//               The Computer Society is one of the most esteemed SIGs under IEEE UVCE. It serves as a platform for
//               students from all branches to explore the computing world. Over the years, it has organised
//               initiatives like the CodeFury hackathon, NCode monthly contests, and hands-on workshops aimed at
//               enhancing students’ technical skills and curiosity in new technologies.
//             </p>

//             {/* Highlighted Info Cards */}
//             <div className="grid grid-cols-2 gap-4 mt-6">
//               <div className="text-center p-6 bg-gray-800/50 rounded-lg shadow-lg">
//                 <div className="text-2xl font-bold text-cyan-400 mb-1">Team Size</div>
//                 <div className="text-lg text-white font-medium">1 to 4</div>
//               </div>
//               <div className="text-center p-6 bg-gray-800/50 rounded-lg shadow-lg">
//                 <div className="text-2xl font-bold text-yellow-400 mb-1">Dates</div>
//                 <div className="text-lg text-white font-medium">10 & 11 Aug, 2024</div>
//               </div>
//               <div className="text-center p-6 bg-gray-800/50 rounded-lg col-span-2 shadow-lg">
//                 <div className="text-2xl font-bold text-green-400 mb-2">Prizes</div>
//                 <div className="text-lg text-white font-medium leading-relaxed">
//                   🥇 Web: ₹12,000 | App: ₹13,000<br />
//                   🥈 Web: ₹6,000 | App: ₹7,000<br />
//                   🎖️ Consolation (Web): ₹2,000
//                 </div>
//               </div>
//             </div>
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;

// import { Users, Target, Award, Globe } from 'lucide-react';

// const About = () => {
//   return (
//     <section id="about" className="py-20 relative">
//       <div className="container mx-auto px-6">
//         <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
//           <span className="text-cyan-400 glow-text">About</span> Us
//         </h2>

//         <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
//           {/* IEEE UVCE & Computer Society SIG */}
//           <div className="glass-card p-8 rounded-2xl">
//             <div className="flex items-center mb-6">
//               <Users className="w-8 h-8 text-purple-400 mr-4" />
//               <h3 className="text-2xl font-bold text-white">IEEE UVCE & Computer Society</h3>
//             </div>
//             <p className="text-gray-300 leading-relaxed mb-4">
//               IEEE UVCE Student Branch, established in 2001, is one of the most active technical communities 
//               at University Visvesvaraya College of Engineering. We foster innovation, technical excellence, 
//               and professional development among students.
//             </p>
//             <p className="text-gray-300 leading-relaxed">
//             The 'IEEE UVCE Computer Society' is a distinguished technical society within IEEE UVCE. It is dedicated to hosting regular technical events like coding competitions and hackathons that tackle current societal issues and create a positive impact. The main goal is to foster a dynamic and skilled student community by encouraging technical excellence and innovation.
//             </p>
//             <div className="flex items-center space-x-4 mt-6">
//               <div className="flex items-center">
//                 <Globe className="w-5 h-5 text-cyan-400 mr-2" />
//                 <span className="text-cyan-400">500+ Members</span>
//               </div>
//               <div className="flex items-center">
//                 <Award className="w-5 h-5 text-purple-400 mr-2" />
//                 <span className="text-purple-400">15+ Years</span>
//               </div>
//             </div>
//           </div>

//           {/* About CodeFury */}
//           <div className="glass-card p-8 rounded-2xl">
//             <div className="flex items-center mb-6">
//               <Target className="w-8 h-8 text-cyan-400 mr-4" />
//               <h3 className="text-2xl font-bold text-white">About CodeFury</h3>
//             </div>
//             <p className="text-gray-300 leading-relaxed mb-4">
//               CodeFury is our flagship Annual National-Level Hackathon that brings together the brightest minds in 
//               programming and innovation. This 24-hour intensive coding marathon challenges participants 
//               to build revolutionary solutions to real-world problems.
//             </p>
//             <p className="text-gray-300 leading-relaxed mb-4">
//               Open to students from all colleges and universities, CodeFury has grown to become one of 
//               the most prestigious hackathons in the region, attracting participants from across the country.
//             </p>
//             <div className="grid grid-cols-2 gap-4 mt-6">
//               <div className="text-center p-4 bg-gray-800/50 rounded-lg">
//                 <div className="text-2xl font-bold text-cyan-400">500+</div>
//                 <div className="text-sm text-gray-400">Participants</div>
//               </div>
//               <div className="text-center p-4 bg-gray-800/50 rounded-lg">
//                 <div className="text-2xl font-bold text-purple-400">24hrs</div>
//                 <div className="text-sm text-gray-400">Non-stop</div>
//               </div>
//               <div className="text-center p-4 bg-gray-800/50 rounded-lg">
//                 <div className="text-2xl font-bold text-green-400">₹60K+</div>
//                 <div className="text-sm text-gray-400">Prize Pool</div>
//               </div>
//               <div className="text-center p-4 bg-gray-800/50 rounded-lg">
//                 <div className="text-2xl font-bold text-yellow-400">100%</div>
//                 <div className="text-sm text-gray-400">Online</div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;
