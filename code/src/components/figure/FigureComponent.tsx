import React from 'react';
import { motion, Variants } from "framer-motion";

export interface IFigureComponentProps {
  url: string | undefined;
  alt: string;
  cssClass?: string;
  motionVariant?: Variants;
}

const FigureComponent: React.FC<IFigureComponentProps> = ({ url, alt, cssClass, motionVariant }: IFigureComponentProps) => {
  return (
    <motion.img initial='hidden' whileInView='visible' variants={motionVariant} viewport={{ once: true }}
      src={url} alt={alt} className={cssClass} />
  );
};

export default FigureComponent;