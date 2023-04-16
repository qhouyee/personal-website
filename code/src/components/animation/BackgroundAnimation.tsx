import React from 'react';
import './backgroundanimation.scss';

export interface IBackgroundAnimationProps {
}

const BackgroundAnimation: React.FC<IBackgroundAnimationProps> = (props: IBackgroundAnimationProps) => {
  return (
    <>
      <div id="pixels"></div>
      <div id="medium-pixels"></div>
    </>
  );
};

export default BackgroundAnimation;