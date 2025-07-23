import React, { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react'; // install via: npm install lucide-react

const BackToTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    isVisible && (
      <button
        onClick={scrollToTop}
        className="fixed bottom-3 right-2 z-50 p-2 sm:p-2.8 rounded-full shadow-lg transition duration-300 
                   bg-gradient-to-r from-cyan-400 to-violet-500 
                   text-white hover:opacity-90 hover:scale-105"
        aria-label="Back to top"
      >
        <ArrowUp className="w-4 h-4 sm:w-6 sm:h-6" />
      </button>
    )
  );
};

export default BackToTopButton;
