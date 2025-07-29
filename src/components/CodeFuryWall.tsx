import { useEffect, useState } from 'react';

// Import local images
import img1 from '../assets/img1.png';
import img2 from '../assets/img2.png';
import img3 from '../assets/img3.png';
import img4 from '../assets/img4.png';
import img5 from '../assets/img5.png';
import img6 from '../assets/img6.png';
import img7 from '../assets/img7.png';
import img8 from '../assets/img8.png';

const highlightImages = [img1, img2, img3, img4, img5, img6, img7, img8];

const CodeFuryWall = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % highlightImages.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const getIndices = (index: number) => {
    const center = index % highlightImages.length;
    const left = (index - 1 + highlightImages.length) % highlightImages.length;
    const right = (index + 1) % highlightImages.length;
    return { left, center, right };
  };

  const { left, center, right } = getIndices(currentIndex);

  return (
    <section id="wall" className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-6">
        <h2 className="text-3xl md:text-5xl font-audiowide text-center mb-12">
          <span className="text-purple-400 glow-text">CodeFury</span> Wall
        </h2>

        {/* Sliding Gallery */}
        <div className="relative h-56 sm:h-72 md:h-96 w-full mb-20 overflow-hidden">
          <div className="flex justify-center items-center h-full relative transition-all duration-1000 ease-in-out">
            <img
              src={highlightImages[left]}
              alt="Left"
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-40 sm:w-52 md:w-64 h-auto object-cover opacity-40 blur-sm scale-90 rounded-xl shadow-inner z-10 transition-all duration-1000 ease-in-out"
              style={{ transform: 'translateY(-50%) translateX(-50%)' }}
            />
            <img
              src={highlightImages[center]}
              alt="Center"
              className="relative w-56 sm:w-72 md:w-96 h-auto object-cover rounded-2xl shadow-xl z-20 transition-all duration-1000 ease-in-out"
            />
            <img
              src={highlightImages[right]}
              alt="Right"
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-40 sm:w-52 md:w-64 h-auto object-cover opacity-40 blur-sm scale-90 rounded-xl shadow-inner z-10 transition-all duration-1000 ease-in-out"
              style={{ transform: 'translateY(-50%) translateX(50%)' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CodeFuryWall;
