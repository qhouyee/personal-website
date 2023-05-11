import React from 'react';
import { motion } from "framer-motion";
import { bounceLetterVariants } from '../../variant/variants';
import './animation.scss';

export interface IAnimatedLettersProps {
  strArray: string[];
  letterClass: string;
}

const AnimatedLetters: React.FC<IAnimatedLettersProps> = ({ strArray, letterClass }: IAnimatedLettersProps) => {
  return (
    <>
      {strArray.map((char, i) => (
          <motion.div variants={bounceLetterVariants} key={char + i} className= {letterClass}>
            {char}
          </motion.div>
        ))}
    </>
  );
};

export default AnimatedLetters;