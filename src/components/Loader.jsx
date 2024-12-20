import React, { useEffect, useRef } from 'react';
import { preLoaderAnim } from './animations/index';

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

  useEffect(() => {
    preLoaderAnim();
  }, []);

  return (
    <div ref={preloaderRef} className="fixed top-0 left-0 w-full h-full bg-black z-50 flex flex-col gap-10 items-center justify-center preloader">
      <div ref={landingRef} className="flex space-x-2 text-n-4 text-2xl font-sans -mt-6">
        <span ref={logoRef} className="animate-blur1">L</span>
        <span className="animate-blur2">O</span>
        <span className="animate-blur3">A</span>
        <span className="animate-blur4">D</span>
        <span className="animate-blur5">I</span>
        <span className="animate-blur6">N</span>
        <span className="animate-blur7">G</span>
      </div>
    </div>
  );
};

export default Loader;