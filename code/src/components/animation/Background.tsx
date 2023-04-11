import React from 'react';
import './background.scss';

export interface IBackgroundProps {
}

const Background: React.FC<IBackgroundProps> = (props: IBackgroundProps) => {
  return (
    <>
      <div id="pixels"></div>
      <div id="medium-pixels"></div>
    </>
  );
};

export default Background;