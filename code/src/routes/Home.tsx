import { React, useState } from 'react';
import { paragraph, experiences } from '../const';
import AnimatedLetters from '../components/animation/AnimatedLetters';
import FigureComponent from '../components/figure/FigureComponent';
import JobListItem from '../components/list/JobListItem';
import CharProfile from '../assets/png/charprofile.png';
import './routes.scss';

export interface IHomeProps { }

const Home: React.FC<IHomeProps> = (props: IHomeProps) => {
  const nameArray = ['H', 'e', 'l', 'l', 'o'];
  const [letterClass, setLetterClass] = useState('waviy');

  return (
    <main>
      <section className='first-section' aria-label='Introduction'>
        <article className='home-text' aria-label='Introduction content'>
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
        </article>
        <FigureComponent url={CharProfile} alt={'An illustration of my inner mind'} cssClass="char-profile" />
      </section>
      <section aria-label='Experiences'>
        <ul>
          {experiences.map((experience) => <JobListItem job={experience} includeAll={false} />)}
        </ul>
      </section>
    </main>
  );
};

export default Home;