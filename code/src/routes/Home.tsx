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
        <div><h1 style={{ marginTop: '15%' }}>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={nameArray}
            idx={1}
          />
          <br />
          <span style={{ fontSize: '0.6em' }}><b>Hyde</b> here!</span>
        </h1>
        </div>
        <FigureComponent url={CharProfile} alt={'An illustration of my inner mind'} cssClass="char-profile" />
      </header>
      <section>
        <h2>About me<span class='dot'>.</span></h2>
        <p dangerouslySetInnerHTML={{ __html: paragraph[0] }}>
        </p>
      </section>
    </main>
  );
};

export default Home;