import React, { useEffect, useRef } from 'react';

const Loader = () => {
  const preloaderRef = useRef(null);
  const logoRef = useRef(null);
  const landingRef = useRef(null);

  useEffect(() => {
    document.body.classList.add('overflow-y-hidden');

    return () => {
      document.body.classList.remove('overflow-y-hidden');
    };
  }, []);

  const handleContinue = () => {
    if (preloaderRef.current) {
      preloaderRef.current.classList.add('opacity-0');
      setTimeout(() => {
        if (preloaderRef.current) {
          preloaderRef.current.style.display = 'none';
        }
        document.body.classList.remove('overflow-y-hidden');
      }, 500);
    }
  };

  return (
    <div ref={preloaderRef} className="fixed top-0 left-0 w-full h-full bg-black z-50 flex flex-col gap-10 items-center justify-center preloader transition-opacity duration-500">
      <div ref={landingRef} className="flex space-x-2 text-n-4 text-2xl font-sans -mt-6">
        <span ref={logoRef} className="animate-blur1">L</span>
        <span className="animate-blur2">O</span>
        <span className="animate-blur3">A</span>
        <span className="animate-blur4">D</span>
        <span className="animate-blur5">I</span>
        <span className="animate-blur6">N</span>
        <span className="animate-blur7">G</span>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 mt-8">
        <a
          href="https://whatsapp.com/channel/0029Vb6sCXjIXnlnXpnoqT05"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gradient-to-r from-green-500 to-green-600 text-white font-bold text-base px-8 py-3 rounded-full shadow-lg shadow-green-500/50 hover:shadow-green-500/75 hover:scale-105 transition-all duration-300">
          Join WhatsApp
        </a>

        <button
          onClick={handleContinue}
          className="bg-gradient-to-r from-green-500 to-blue-500 text-white font-bold text-base px-8 py-3 rounded-full shadow-lg shadow-green-500/50 hover:shadow-green-500/75 hover:scale-105 transition-all duration-300">
          Continue to Website
        </button>
      </div>
    </div>
  );
};

export default Loader;