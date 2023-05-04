import { React, useState } from 'react';
import { paragraph, experiences } from '../const';
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
        <aside className='home-text' aria-label='Introduction content'>
          <h1 style={{ marginTop: '15%' }}>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={1}
            />
            <br />
            <span style={{ fontSize: '2.5rem' }}><b>Hyde</b> here!</span>
          </h1>
          <p dangerouslySetInnerHTML={{ __html: paragraph[0] }}>
          </p>
          <div className='svg-container'>
            <a title='My Github' href='https://github.com/qhouyee' target='_blank'>
              <GithubIcon className='svg-link' />
            </a>
            <a title='My Linkedin' href='https://sg.linkedin.com/in/hou-yee' target='_blank'>
              <LinkedinIcon className='svg-link' />
            </a>
          </div>
        </aside>
        <FigureComponent url={CharProfile} alt={'An illustration of my inner mind'} cssClass="char-profile" />
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