import { React, useState } from 'react';
import { paragraph, experiences } from '../const';
import AnimatedLetters from '../components/animation/AnimatedLetters';
import FigureComponent from '../components/figure/FigureComponent';
import SkillComponent from '../components/SkillComponent';
import JobListItem from '../components/list/JobListItem';
import CharProfile from '../assets/png/charprofile.png';
import './routes.scss';

export interface IHomeProps { }

const Home: React.FC<IHomeProps> = (props: IHomeProps) => {
  const nameArray = ['H', 'e', 'l', 'l', 'o'];
  const [letterClass, setLetterClass] = useState('waviy');

  return (
    <main>
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
        </aside>
        <FigureComponent url={CharProfile} alt={'An illustration of my inner mind'} cssClass="char-profile" />
      </section>
      <section className='alt-background' aria-label='My skills'>
        <article className='content-container'>
          <h2 className='header-spacing'>Programming Skills<span className='dot'>.</span></h2>
          <SkillComponent isComplete={false} />
          <p></p>
        </article>
      </section>
      <section aria-label='My journey'>
        <article className='content-container'>
          <h2 className='header-spacing' >My Journey<span className='dot'>.</span></h2>
          <ul style={{ borderTop: '2px solid rgb(247,152,108, 0.7)', borderBottom: '2px solid rgb(247,152,108, 0.7)' }}>
            {experiences.map((experience) => <JobListItem job={experience} includeAll={false} />)}
          </ul>
        </article>
      </section>
    </main>
  );
};

export default Home;