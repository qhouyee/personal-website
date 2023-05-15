import { React, useRef } from 'react';
import { motion } from "framer-motion";
import { simpleVariants, titleVariants, paragraphVariants, imageVariants } from '../variant/variants';
import { experiences } from '../const';
import Route from './Route';
import AnimatedLetters from '../components/animation/AnimatedLetters';
import JobListItem from '../components/list/JobListItem';
import SkillComponent from '../components/content/SkillComponent';
import { ReactComponent as SingaporeIcon } from '../assets/svg/sg.svg';

export interface IBackgroundProps { }

const Background: React.FC<IBackgroundProps> = (props: IBackgroundProps) => {
  const titleArray: string[] = ['B', 'a', 'c', 'k', 'g', 'r', 'o', 'u', 'n', 'd'];
  let ref = useRef<HTMLDivElement>(null);
  
  return (
    <Route>
      <motion.section initial='hidden' whileInView='visible' variants={simpleVariants(true, 1.5)} className='content-container' aria-label='My background'>
        <article className='image-text-container' aria-label='Page introduction'>
          <div style={{ width: '80%' }}>
            <h1>
              <AnimatedLetters
                strArray={titleArray}
                variants={titleVariants}
              />
            </h1>
            <motion.p variants={paragraphVariants(0)}>Hello there, I’m a self-taught software developer from Singapore, who is currently developing full stack applications at {experiences[0].company}.
              This page provides information about me, including my various internships and jobs.
            </motion.p>
          </div>
          <motion.div variants={imageVariants(0)}>
            <SingaporeIcon className='display-profile' />
          </motion.div>
        </article>
        <article aria-label='Background introduction'>
          <motion.p variants={paragraphVariants(0)}>I received my Master of Urban Planning and BSc. Real Estate with Honours (Distinction) from the National University of Singapore in July 2021.
            Although my background is unconventional, it has taught me design thinking for user interaction, data visualizations and handling map views.
            Some of my work can be found over&nbsp;
            <a title='Visit my design portfolio on Issuu' href='https://issuu.com/quekhouyee/docs/portfolio' target='_blank'>here</a>.
          </motion.p>
          <motion.span variants={paragraphVariants(0)}>If you are a fan of reading, I have some publications at:</motion.span>
          <ul>
            <motion.li variants={paragraphVariants(0)}><div>1) <a title='The conundrum in smart city governance: Interoperability and compatibility in an ever-growing ecosystem of digital twins' href='https://doi.org/10.1017/dap.2023.1' target='_blank'>Data & Policy journal</a>:
              An analysis of the current digital twin approaches and their implications on interoperability and compatibility in the context of smart urbanism.
            </div></motion.li>
            <motion.li variants={paragraphVariants(0)}><div>
              2) <a title='The slow engagement of planning scholars with BIM-GIS-Semantic integration: A literature review' href='https://como.ceb.cam.ac.uk/preprints/296/' target='_blank'>CoMo Preprint</a>:
              A literature review on BIM-GIS trends for planning processes. Supplemented with data visualizations designed in Python.
            </div></motion.li>
          </ul>
        </article>
      </motion.section>
      <motion.section initial='hidden' whileInView='visible' variants={simpleVariants(true, 3.5)} className='content-container' aria-label='My skills'>
        <motion.h2 variants={paragraphVariants(0)}>Skills<span className='dot'>.</span></motion.h2>
        <motion.p variants={paragraphVariants(0)}>
          In regards to software technologies, I am familiar with the following stack, but am comfortable picking up new technologies.
        </motion.p>
        <SkillComponent isComplete={true} />
      </motion.section>
      <section ref={ref} className='content-container' aria-label='My working experiences'>
        <h2>Experiences<span className='dot'>.</span></h2>
        <div className='across-line'></div>
        <motion.ul drag="x" dragConstraints={ref} className = "drag-container">
          {experiences.map((experience) => <JobListItem job={experience}/>)}
        </motion.ul>
        <div className='across-line'></div>
      </section>
    </Route>
  );
};

export default Background;