import { React, useState } from 'react';
import { paragraph } from '../const';
import AnimatedLetters from '../components/animation/AnimatedLetters';
import FigureComponent from '../components/figure/FigureComponent';
import CharProfile from '../assets/png/charprofile.png';
import './scss/home.scss';

export interface IHomeProps { }

const Home: React.FC<IHomeProps> = (props: IHomeProps) => {
  const nameArray = ['H', 'e', 'l', 'l', 'o'];
  const [letterClass, setLetterClass] = useState('waviy');

  return (
    <main>
      <header>
        <h1 style={{ marginTop: '15%' }}>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={nameArray}
            idx={1}
          />
          <br />
          <span style={{ fontSize: 'calc(12px + 2vw)' }}><b>Hyde</b> here!</span>
        </h1>
        <FigureComponent url={CharProfile} alt={'An illustration of my inner mind'} cssClass="char-profile" />
      </header>
      <section>
        <p dangerouslySetInnerHTML={{ __html: paragraph[0] }}>
        </p>
      </section>
    </main>
  );
};

export default Home;