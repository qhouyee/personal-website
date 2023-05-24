import React, { useRef } from 'react';
import { motion } from "framer-motion";
import { experiences } from '../const';
import { simpleVariants, swipeRightVariants, subTitleVariants } from '../variant/variants';
import Route from './Route';
import HeroComponent from '../components/content/HeroComponent';
import SkillComponent from '../components/content/SkillComponent';
import ProjectSection from '../components/content/ProjectSection';
import JobListItem from '../components/list/JobListItem';

const Home: React.FC<{}> = () => {
  let ref = useRef<HTMLDivElement>(null);
  return (
    <Route>
      <section className='content-container image-text-container section-padding' aria-label='Introduction'>
        <HeroComponent />
      </section>
      <section ref={ref} className='section-padding' aria-label='My journey'>
        <motion.article initial='hidden' whileInView='visible' variants={simpleVariants(true)} viewport={{ once: true, amount: 0.6 }}
          className='content-container' >
          <motion.div variants={swipeRightVariants} className='timeline-edges screen-line alt-background'>
            <motion.ul drag="x" dragConstraints={ref} className='drag-container'>
              <p className='side-title '>my journey</p>
              {experiences.map((experience, index) => <JobListItem key={index} job={experience} />)}
            </motion.ul>
          </motion.div>
        </motion.article>
      </section>
      <motion.section initial='hidden' whileInView='visible' variants={simpleVariants(true)} viewport={{ once: true, amount: 0.3 }} aria-label='My skills'>
        <article className='content-container'>
          <motion.h2 variants={subTitleVariants} className='header-spacing'>Programming Skills<span className='dot'>.</span></motion.h2>
          <SkillComponent isComplete={false} />
        </article>
      </motion.section>
      <motion.section className='content-container section-padding' aria-label='My journey'>
        <motion.h2 initial='hidden' whileInView='visible' variants={subTitleVariants} viewport={{ once: true, amount: 0.6 }}>Projects<span className='dot'>.</span></motion.h2>
        <ProjectSection />
      </motion.section>
    </Route>
  );
};

export default Home;