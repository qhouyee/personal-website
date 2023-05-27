import React, { useRef } from 'react';
import { motion } from "framer-motion";
import JobListItem from '../list/JobListItem';
import WavySectionDivider from '../figure/WavySectionDivider';
import { experiences } from '../../const';
import { simpleVariants, subTitleVariants, swipeRightVariants } from '../../variant/variants';

export interface IJobComponentProps {
  title: string;
}

const JobSection: React.FC<IJobComponentProps> = ({ title }: IJobComponentProps) => {
  let ref = useRef<HTMLDivElement>(null);
  return (
    <motion.section ref={ref} initial='hidden' whileInView='visible' variants={simpleVariants(false)} viewport={{ once: true, amount: 0.4 }}
      className='section-padding alt-background' aria-label='My working experiences'>
      <WavySectionDivider />
      <motion.article initial='hidden' whileInView='visible' variants={simpleVariants(true)} viewport={{ once: true, amount: 0.6 }}
        className='content-container' >
        <motion.h2 className='header-spacing centered-text' variants={subTitleVariants}>{title}</motion.h2>
        <motion.p className='header-spacing centered-text' variants={swipeRightVariants}>&#8610; drag &#8611;</motion.p>
        <motion.div variants={swipeRightVariants} className='across-line screen-line modal-section'>
          <motion.ul drag="x" dragConstraints={ref} className="drag-container">
            {experiences.map((experience, index) => <JobListItem key={index} job={experience} />)}
          </motion.ul>
        </motion.div>
      </motion.article>
    </motion.section>
  );
};

export default JobSection;