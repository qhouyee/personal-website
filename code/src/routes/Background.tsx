import React from 'react';
import { experiences } from '../const';
import Route from './Route';
import JobListItem from '../components/list/JobListItem';
import SkillComponent from '../components/content/SkillComponent';
import { ReactComponent as SingaporeIcon } from '../assets/svg/sg.svg';

export interface IBackgroundProps { }

const Background: React.FC<IBackgroundProps> = (props: IBackgroundProps) => {
  return (
    <Route>
      <section className='content-container' aria-label='My background'>
        <article className='image-text-container' aria-label='Page introduction'>
          <div style={{ width: '80%' }}><h1>Background<span className='dot'>.</span></h1>
            <p>Hello there, I’m a self-taught software developer from Singapore, who is currently developing full stack applications at {experiences[0].company}.
              This page provides information about me, including my various internships and jobs.
            </p>
          </div>
          <SingaporeIcon className='display-profile' />
        </article>
        <article aria-label='Background introduction'>
          <p>I received my Master of Urban Planning and BSc. Real Estate with Honours (Distinction) from the National University of Singapore in July 2021.
            Although my background is unconventional, it has taught me design thinking for user interaction, data visualizations and handling map views.
            Some of my work can be found over&nbsp;
            <a title='Visit my design portfolio on Issuu' href='https://issuu.com/quekhouyee/docs/portfolio' target='_blank'>here</a>.
          </p>
          <span>If you are a fan of reading, I have some publications at:</span>
          <ul>
            <li><div>1) <a title='The conundrum in smart city governance: Interoperability and compatibility in an ever-growing ecosystem of digital twins' href='https://doi.org/10.1017/dap.2023.1' target='_blank'>Data & Policy journal</a>:
              An analysis of the current digital twin approaches and their implications on interoperability and compatibility in the context of smart urbanism.
            </div></li>
            <li><div>
              2) <a title='The slow engagement of planning scholars with BIM-GIS-Semantic integration: A literature review' href='https://como.ceb.cam.ac.uk/preprints/296/' target='_blank'>CoMo Preprint</a>:
              A literature review on BIM-GIS trends for planning processes. Supplemented with data visualizations designed in Python.
            </div></li>
          </ul>
        </article>
      </section>
      <section className='content-container' aria-label='My skills'>
        <h2>Skills<span className='dot'>.</span></h2>
        <p>In regards to software technologies, I am familiar with the following stack, but am comfortable picking up new technologies.</p>
        <SkillComponent isComplete={true} />
      </section>
      <section className='content-container' aria-label='My working experiences'>
        <h2>Experiences<span className='dot'>.</span></h2>
        <div className='across-line'></div>
        <ul>
          {experiences.map((experience) => <JobListItem job={experience} includeAll={true} />)}
        </ul>
        <div className='across-line'></div>
      </section>
    </Route>
  );
};

export default Background;