import { React, useContext, useRef } from 'react';
import { motion, Variants } from "framer-motion";
import { simpleVariants, swipeRightVariants, titleVariants, subTitleVariants, paragraphVariants, imageVariants, mobileImageVariants } from '../variant/variants';
import { experiences } from '../const';
import { MobileContext } from '../context/ViewContext';
import Route from './Route';
import AnimatedLetters from '../components/animation/AnimatedLetters';
import JobListItem from '../components/list/JobListItem';
import SkillComponent from '../components/content/SkillComponent';
import { ReactComponent as SingaporeIcon } from '../assets/svg/sg.svg';

export interface IBackgroundProps { }

const Background: React.FC<IBackgroundProps> = (props: IBackgroundProps) => {
  const titleArray: string[] = ['B', 'a', 'c', 'k', 'g', 'r', 'o', 'u', 'n', 'd'];
  let ref = useRef<HTMLDivElement>(null);
  let isMobile: boolean = useContext(MobileContext);
  let imageVariant: Variants = isMobile ? mobileImageVariants : imageVariants(0);
  return (
    <Route>
      <motion.section initial='hidden' whileInView='visible' variants={simpleVariants(true, 1.5)} viewport={{ once: true }}
        className='content-container' aria-label='My background'>
        <article className='image-text-container' aria-label='Page introduction'>
          <div>
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
          <motion.div className="center" variants={imageVariant}>
            <SingaporeIcon className='display-profile' />
          </motion.div>
        </article>
        <article aria-label='Background introduction'>
          <motion.p variants={paragraphVariants(0)}>I received my Master of Urban Planning and BSc. Real Estate with Honours (Distinction) from the National University of Singapore in July 2021.
            Although my background is unconventional, it has taught me design thinking for user interaction, data visualizations and handling map views.
            My planning portfolio can be found over&nbsp;
            <a title='Visit my design portfolio on Issuu' href='https://issuu.com/quekhouyee/docs/portfolio' target='_blank'>here</a>.
          </motion.p>
          <motion.span variants={paragraphVariants(0)}>If you are a fan of reading, I have a publication at:</motion.span>
          <ul>
            <motion.li variants={paragraphVariants(0)}><div>1) <a title='The conundrum in smart city governance: Interoperability and compatibility in an ever-growing ecosystem of digital twins' href='https://doi.org/10.1017/dap.2023.1' target='_blank'>Data & Policy journal</a>:
              An analysis of the current digital twin approaches and their implications on interoperability and compatibility in the context of smart urbanism.
            </div></motion.li>
          </ul>
        </article>
      </motion.section>
      <motion.section initial='hidden' whileInView='visible' variants={simpleVariants(true)} viewport={{ once: true, amount: 0.3 }}
        className='content-container' aria-label='My skills'>
        <motion.h2 variants={subTitleVariants}>Skills<span className='dot'>.</span></motion.h2>
        <motion.p variants={paragraphVariants(0)}>
          In regards to software technologies, I am familiar with the following stack, but am comfortable picking up new technologies.
        </motion.p>
        <SkillComponent isComplete={true} />
      </motion.section>
      <motion.section ref={ref} initial='hidden' whileInView='visible' variants={simpleVariants(false)} viewport={{ once: true, amount: 0.4 }}
        className='content-container' aria-label='My working experiences'>
        <motion.h2 variants={subTitleVariants}>Experiences<span className='dot'>.</span></motion.h2>
        <motion.div variants={swipeRightVariants} className='across-line screen-line alt-background'>
          <motion.ul drag="x" dragConstraints={ref} className="drag-container">
            {experiences.map((experience, index) => <JobListItem key={index} job={experience} />)}
          </motion.ul>
        </motion.div>
      </motion.section>
    </Route>
  );
};

export default Background;