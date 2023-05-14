import { React, useState } from 'react';
import { motion } from "framer-motion";
import { paragraph, experiences } from '../const';
import { simpleVariants, paragraphVariants, bounceLetterVariants, iconVariants, imageVariants } from '../variant/variants';
import Route from './Route';
import AnimatedLetters from '../components/animation/AnimatedLetters';
import FigureComponent from '../components/figure/FigureComponent';
import SkillComponent from '../components/content/SkillComponent';
import ProjectSection from '../components/content/ProjectSection';
import JobListItem from '../components/list/JobListItem';
import CharProfile from '../assets/png/charprofile.png';
import { ReactComponent as GithubIcon } from '../assets/svg/github.svg';
import { ReactComponent as LinkedinIcon } from '../assets/svg/linkedin.svg';

export interface IHomeProps { }

const Home: React.FC<IHomeProps> = (props: IHomeProps) => {
  const nameArray = ['H', 'e', 'l', 'l', 'o'];
  const [letterClass, setLetterClass] = useState('waviy');

  return (
    <Route>
      <section className='content-container image-text-container section-padding' aria-label='Introduction'>
        <motion.aside initial='hidden' whileInView='visible' variants={simpleVariants(true)}
          className='home-text' aria-label='Introduction content'>
          <h1 style={{ marginTop: '15%' }}>
            <AnimatedLetters
              strArray={nameArray}
              variants={bounceLetterVariants}
              letterClass={letterClass}
            />
            <br />
            <motion.p initial='hidden' whileInView='visible' variants={paragraphVariants(1.6)} style={{ fontSize: '2.5rem' }}>
              <b>Hyde</b> here!
            </motion.p>
          </h1>
          <motion.p variants={paragraphVariants(2.2)} dangerouslySetInnerHTML={{ __html: paragraph[0] }}>
          </motion.p>
          <motion.div variants={simpleVariants(true, 3.5)} className='svg-container'>
            <motion.a variants={iconVariants} title='My Github' href='https://github.com/qhouyee' target='_blank'>
              <GithubIcon className='svg-link' />
            </motion.a>
            <motion.a variants={iconVariants} title='My Linkedin' href='https://sg.linkedin.com/in/hou-yee' target='_blank'>
              <LinkedinIcon className='svg-link' />
            </motion.a>
          </motion.div>
        </motion.aside>
        <FigureComponent url={CharProfile} alt={'An illustration of my inner mind'} cssClass="char-profile" motionVariant={imageVariants(2.6)} />
      </section>
      <section className='section-padding' aria-label='My journey'>
        <article className='content-container'>
          <p className='side-title'>my journey</p>
          <ul className='timeline-edges'>
            {experiences.map((experience) => <JobListItem job={experience} includeAll={false} />)}
          </ul>
        </article>
      </section>
      <section className='alt-background' aria-label='My skills'>
        <article className='content-container'>
          <h2 className='header-spacing'>Programming Skills<span className='dot'>.</span></h2>
          <SkillComponent isComplete={false} />
          <p></p>
        </article>
      </section>
      <section className='content-container section-padding' aria-label='My journey'>
        <h2>Projects<span className='dot'>.</span></h2>
        <ProjectSection />
      </section>
    </Route>
  );
};

export default Home;