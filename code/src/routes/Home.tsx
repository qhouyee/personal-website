import React from 'react';

export interface IHomeProps { }

const Home: React.FC<IHomeProps> = (props: IHomeProps) => {
  return (
    <main>
      <p>This is the home page</p>
    </main>
  );
};

export default Home;