import React from 'react';
import { motion } from "framer-motion";
import { simpleVariants, subTitleVariants } from '../variant/variants';
import Route from './Route';
import HeroComponent from '../components/content/HeroComponent';
import SkillComponent from '../components/content/SkillComponent';
import ProjectSection from '../components/content/ProjectSection';
import JobSection from '../components/content/JobSection';

const Home: React.FC<{}> = () => {
  return (
    <Route>
      <section className='content-container image-text-container section-padding' aria-label='Introduction'>
        <HeroComponent />
      </section>
      <JobSection title='My journey' />
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