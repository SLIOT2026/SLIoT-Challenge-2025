import React from 'react';
import MagicButton from './ui/MagicButton';


const GuideLines = () => {
  return (
    <div className="flex flex-col items-center justify-center p-4 bg-transparent min-h-16">
   <a
  className="mt-4"
  href="/SLIOT%20Challenge%202025%20-%20Rules%20and%20Regulations.pdf"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="Download guidelines"
  download={true}
>
  <MagicButton title="Rules and Regulations" />
</a>
      <a
        className="mt-4"
        href="/guidelines"
        rel="noopener noreferrer"
        aria-label="Open guidelines in a new tab"
      >
        <MagicButton title="Proposal Submission" />
      </a>
    </div>
  );
};

export default GuideLines;
