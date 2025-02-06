import React from 'react';
import { SectionWrapper } from '../hoc';
import { technologies } from '../constants';

const Tech = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {technologies.map((technology) => (
        <div 
          key={technology.name}
          className="w-14 sm:w-28 h-10 sm:h-28 transform hover:scale-110 transition duration-300 cursor-pointer"
        >
          <img src={technology.icon} alt={technology.name} className="w-full h-full object-contain" />
        </div>
      ))}
    </div>
  );
};

export default Tech;
