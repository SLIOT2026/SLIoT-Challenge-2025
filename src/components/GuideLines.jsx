import React from 'react';
import MagicButton from './ui/MagicButton';


const GuideLines = () => {
  return (
    <div className="flex flex-col items-center justify-center p-4 bg-transparent min-h-16">
      <a
        className="mt-4"
        href="/guidelines"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Open guidelines in a new tab"
      >
        <MagicButton title="Submission Guidelines" />
      </a>
    </div>
  );
};

export default GuideLines;
