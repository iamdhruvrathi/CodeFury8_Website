import { Instagram, Facebook, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900/50 border-t border-gray-700/50 text-white">
      {/* Developer Credits */}
      <div className="pt-4 text-center text-sm text-gray-400 space-y-1 pb-6">
        <p className="text-gray-300 font-medium">Developed by</p>
        <p className="text-cyan-400 font-semibold">
          Dhruv Rathi &nbsp;| Lahari Priya N &nbsp;| Rahita H Puthran
        </p>
        <p className="text-gray-400">Software Development SIG, IEEE UVCE</p>
      </div>
    </footer>
  );
};

export default Footer;
