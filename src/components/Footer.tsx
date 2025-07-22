import { ExternalLink, Heart, Code } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: 'IEEE UVCE Website', url: 'https://ieeeuvcecs.com' },
    { name: 'Computer Society SIG LinkedIn', url: 'https://linkedin.com/company/ieee-uvce-cs' },
    { name: 'Computer Society SIG GitHub', url: 'https://github.com/ieee-uvce-cs' }
  ];

  return (
    <footer className="bg-gray-900/50 border-t border-gray-700/50 py-12 relative">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Logo & Description */}
          <div>
            <div className="text-2xl font-bold mb-4">
              <span className="text-cyan-400 glow-text">Code</span>
              <span className="text-purple-400 glow-text">Fury</span>
              <span className="text-cyan-400 text-lg ml-2">8.0</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              India's most exciting 24-hour online hackathon, bringing together the brightest coding minds 
              to innovate, create, and compete.
            </p>
            <div className="flex items-center mt-4 text-cyan-400">
              <Code className="w-5 h-5 mr-2" />
              <span className="text-sm">August 23-24, 2025</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Quick Links</h3>
            <div className="space-y-3">
              {quickLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-400 hover:text-cyan-400 transition-colors duration-300"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Organized By</h3>
            <div className="space-y-2 text-gray-400">
              <p>IEEE UVCE Student Branch</p>
              <p>Computer Society Special Interest Group</p>
              <p className="text-cyan-400 font-medium">University Visvesvaraya College of Engineering</p>
              <p>Bangalore, Karnataka, India</p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700/50 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-gray-400">
              <span>Designed & Developed with</span>
              <Heart className="w-4 h-4 text-red-400" />
              <span>by CodeFury OC</span>
            </div>
            
            <div className="text-gray-400 text-sm">
              © 2025 IEEE UVCE & Computer Society SIG. All rights reserved.
            </div>
          </div>
          
          <div className="text-center mt-4 text-xs text-gray-500">
            This website is for educational and promotional purposes only. All trademarks belong to their respective owners.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;