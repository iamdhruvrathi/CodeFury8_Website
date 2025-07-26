import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import handle from '../assets/handle.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Tracks', href: '#tracks' },
    { name: 'Timeline', href: '#timeline' },
    { name: 'Contact', href: '#contact' }
  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
  document.body.style.overflow = isMenuOpen ? 'hidden' : 'auto';
  return () => {
    document.body.style.overflow = 'auto';
  };
}, [isMenuOpen]);


  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-gray-950/80 backdrop-blur-md border-b border-gray-700/40' : ''
      }`}
    >
      <nav className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <img
  src={handle}
  onClick={() => scrollToSection("#hero")}
  alt="CodeFury Logo"
  className="h-10 sm:h-10 object-contain drop-shadow-[0_0_10px_#00f6ff] cursor-pointer hover:drop-shadow-[0_0_15px_#00f6ff] transition-transform duration-300"
/>


          {/* Desktop Nav */}
          <div className="hidden md:flex flex-wrap gap-4 lg:gap-6">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="relative text-sm lg:text-base text-gray-300 hover:text-cyan-400 transition-colors duration-300 group"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-fuchsia-500 group-hover:w-full transition-all duration-300"></span>
              </button>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-gray-300 hover:text-cyan-400 transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden fixed top-16 left-0 right-0 z-40 bg-gray-950/95 backdrop-blur-md border-t border-gray-700/50">
            <div className="px-4 py-4 space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="block w-full text-left py-2 text-gray-300 hover:text-cyan-400 transition-colors duration-300"
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;