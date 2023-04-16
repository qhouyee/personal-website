import React from 'react';
import './animation.scss';

export interface IAnimatedLettersProps {
  strArray: string[];
  letterClass: string;
  idx: number;
}

const AnimatedLetters: React.FC<IAnimatedLettersProps> = ({ strArray, letterClass, idx }: IAnimatedLettersProps) => {
  return (
    <>
      {strArray.map((char, i) => (
        <div key={char + i} className={`${letterClass} ${letterClass}_${i + idx}`}>
          {char}
        </div>
      ))}
    </>
  );
};

export default AnimatedLetters;