import { React, useRef, useState } from 'react';
import { motion } from "framer-motion";
import { paragraph, experiences } from '../const';
import { simpleVariants, swipeRightVariants, subTitleVariants, paragraphVariants, bounceLetterVariants, iconVariants, imageVariants } from '../variant/variants';
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
  let ref = useRef<HTMLDivElement>(null);

  return (
    <Route>
      <section className='content-container image-text-container section-padding' aria-label='Introduction'>
        <motion.aside initial='hidden' whileInView='visible' variants={simpleVariants(true)} viewport={{ once: true }}
          className='home-text' aria-label='Introduction content'>
          <h1 style={{ marginTop: '15%' }}>
            <AnimatedLetters
              strArray={nameArray}
              variants={bounceLetterVariants}
              letterClass={letterClass}
            />
            <br />
            <motion.p initial='hidden' whileInView='visible' variants={paragraphVariants(0.7)} viewport={{ once: true }}
              style={{ fontSize: '2.5rem' }}>
              <b>Hyde</b> here!
            </motion.p>
          </h1>
          <motion.p variants={paragraphVariants(0)} dangerouslySetInnerHTML={{ __html: paragraph[0] }}>
          </motion.p>
          <motion.div className='svg-container'>
            <motion.a variants={iconVariants} title='My Github' href='https://github.com/qhouyee' target='_blank'>
              <GithubIcon className='svg-link' />
            </motion.a>
            <motion.a variants={iconVariants} title='My Linkedin' href='https://sg.linkedin.com/in/hou-yee' target='_blank'>
              <LinkedinIcon className='svg-link' />
            </motion.a>
          </motion.div>
        </motion.aside>
        <FigureComponent url={CharProfile} alt={'An illustration of my inner mind'} cssClass="char-profile" motionVariant={imageVariants(0)} />
      </section>
      <section ref={ref} className='section-padding ' aria-label='My journey'>
        <motion.article initial='hidden' whileInView='visible' variants={simpleVariants(true)} viewport={{ once: true, amount: 0.6 }}
          className='content-container' >
          <motion.div variants={swipeRightVariants} className='timeline-edges screen-line alt-background'>
            <motion.ul drag="x" dragConstraints={ref} className='drag-container '>
              <p className='side-title '>my journey</p>
              {experiences.map((experience, index) => <JobListItem key={index} job={experience} includeAll={false} />)}
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