import React from "react";

const Heading = ({ className, title }) => {
  return (
    <div className={`max-w-[50rem] mx-auto ${className}`}>
      {title && <h2 className="h2">{title}</h2>}
    </div>
  );
};

export default Heading;
