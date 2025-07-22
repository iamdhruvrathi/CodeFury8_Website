import { Instagram, Facebook, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900/50 border-t border-gray-700/50 py-12 relative text-white">
      <div className="container mx-auto px-6">
        {/* Contacts Header */}
        <h2 className="text-3xl font-bold mb-8 text-white text-center">For More queries, Contact:</h2>

        {/* Contact Cards */}
        <div className="flex flex-wrap justify-center gap-6 mb-12">
          {/* Girish */}
          <div className="w-full sm:w-72 border border-gray-700 rounded-lg p-6 text-center">
            <h3 className="text-cyan-400 font-bold text-lg mb-2">Girish Bharadwaj</h3>
            <p className="text-gray-300 mb-1">Chairperson, Computer Society, IEEE UVCE</p>
            <p className="text-gray-400 text-sm">Phone: +91 74065 43569</p>
          </div>

          {/* Samyuktha */}
          <div className="w-full sm:w-72 border border-gray-700 rounded-lg p-6 text-center">
            <h3 className="text-cyan-400 font-bold text-lg mb-2">Samyuktha Sridhar</h3>
            <p className="text-gray-300 mb-1">Vice Chairperson, Computer Society, IEEE UVCE</p>
            <p className="text-gray-400 text-sm">Phone: +91 91085 62257</p>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 mb-10 text-sm text-gray-400">
          <a href="#" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-cyan-400">
            <Instagram className="w-4 h-4" />
            <span>ieee.uvce.cs</span>
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-cyan-400">
            <Facebook className="w-4 h-4" />
            <span>IEEE UVCE COMPUTER SOCIETY</span>
          </a>
          <a href="mailto:cs.ieee.uvce@gmail.com" className="flex items-center gap-2 hover:text-cyan-400">
            <Mail className="w-4 h-4" />
            <span>cs.ieee.uvce@gmail.com</span>
          </a>
        </div>

        {/* Developer Credits */}
        <div className="border-t border-gray-700/50 pt-6 text-center text-sm text-gray-400">
          <p>
            <span className="text-cyan-400 font-semibold">Dhruv Rathi</span>, Software Development SIG &nbsp;|&nbsp;
            <span className="text-cyan-400 font-semibold">Lahari Priya N</span>, Software Development SIG &nbsp;|&nbsp;
            <span className="text-cyan-400 font-semibold">Rahita H Puthran</span>, Software Development SIG
          </p>
          <p className="mt-2">Developed by Software Development SIG, IEEE UVCE</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
