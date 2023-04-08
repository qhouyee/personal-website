import React from 'react';
import { paragraph } from '../const';
import './scss/home.scss';
import FigureComponent from '../components/figure/FigureComponent';
import CharProfile from '../assets/png/charprofile.png';

export interface IHomeProps { }

const Home: React.FC<IHomeProps> = (props: IHomeProps) => {
  return (
    <main>
      <header>
        <h1 style={{ marginTop: '15%' }}>
          HELLO, <br />
          <span style = {{fontSize:'calc(12px + 2vw)'}}><b>Hyde</b> here!</span>
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