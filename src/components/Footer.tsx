import { Instagram, Facebook, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900/50 border-t border-gray-700/50 py-12 relative text-white">
     

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
