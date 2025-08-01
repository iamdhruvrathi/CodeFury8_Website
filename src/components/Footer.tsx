import { Instagram, Facebook, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900/50 border-t border-gray-700/50 text-white">
      {/* Developer Credits */}
      <div className="pt-4 text-center text-sm text-gray-400 space-y-1 pb-6 font-nunito">
        <p className="text-gray-300 font-medium">Developed by</p>
        {/* <p className="text-cyan-400 font-semibold">
          Dhruv Rathi &nbsp;|&nbsp; Lahari Priya N &nbsp;|&nbsp; Rahita H Puthran
        </p> */}
        <p className="text-cyan-400 font-semibold">
  <a href="https://www.linkedin.com/in/dhruv-rathi-399378282/" target="_blank" rel="noopener noreferrer" className="hover:underline">
    Dhruv Rathi
  </a>
  &nbsp;|&nbsp;
  <a href="https://www.linkedin.com/in/lahari-priya-n/" target="_blank" rel="noopener noreferrer" className="hover:underline">
    Lahari Priya N
  </a>
  &nbsp;|&nbsp;
  <a href="https://www.linkedin.com/in/rahita-puthran-1262202a5/" target="_blank" rel="noopener noreferrer" className="hover:underline">
    Rahita H Puthran
  </a>
</p>

        <p className="text-gray-400">Software Development SIG, IEEE UVCE</p>
      </div>
    </footer>
  );
};

export default Footer;
