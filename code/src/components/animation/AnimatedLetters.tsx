import React from 'react';
import './animation.scss';

export interface IAnimatedLettersProps {
  strArray: string[];
  letterClass: string;
  idx: number;
}

const AnimatedLetters: React.FC<IAnimatedLettersProps> = ({ strArray, letterClass, idx }: IAnimatedLettersProps) => {
  return (
    <span>
      {strArray.map((char, i) => (
        <span key={char + i} className={`${letterClass} ${letterClass}_${i + idx}`}>
          {char}
        </span>
      ))}
    </span>
  );
};

export default AnimatedLetters;