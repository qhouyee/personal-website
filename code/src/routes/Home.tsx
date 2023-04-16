import { React, useState } from 'react';
import { paragraph } from '../const';
import AnimatedLetters from '../components/animation/AnimatedLetters';
import FigureComponent from '../components/figure/FigureComponent';
import CharProfile from '../assets/png/charprofile.png';
import './routes.scss';

export interface IHomeProps { }

const Home: React.FC<IHomeProps> = (props: IHomeProps) => {
  const nameArray = ['H', 'e', 'l', 'l', 'o'];
  const [letterClass, setLetterClass] = useState('waviy');

  return (
    <main>
      <article className='first-section'>
        <section className = 'home-text'>
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
        </section>
        <FigureComponent url={CharProfile} alt={'An illustration of my inner mind'} cssClass="char-profile" />
      </article>
    </main>
  );
};

export default Home;