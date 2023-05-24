import React from 'react';
import { motion, Variants } from "framer-motion";

export interface IAnimatedLettersProps {
  strArray: string[];
  variants: Variants;
  letterClass?: string;
}

const AnimatedLetters: React.FC<IAnimatedLettersProps> = ({ strArray, variants, letterClass }: IAnimatedLettersProps) => {
  return (
    <>
      {strArray.map((char, i) => (
        <motion.div variants={variants} viewport={{ once: true }} key={char + i}
          className={letterClass} style={{ display: "inline-block", whiteSpace: "pre" }
          }>
          {char}
        </motion.div>
      ))}
    </>
  );
};

export default AnimatedLetters;