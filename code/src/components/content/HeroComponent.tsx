import React, { useContext } from 'react';
import { motion } from "framer-motion";
import { simpleVariants, paragraphVariants, bounceLetterVariants, iconVariants, imageVariants, mobileImageVariants } from '../../variant/variants';
import { paragraph } from '../../const';
import { MobileContext } from '../../context/ViewContext';
import AnimatedLetters from '../animation/AnimatedLetters';
import FigureComponent from '../figure/FigureComponent';
import { ReactComponent as GithubIcon } from '../../svg/github.svg';
import { ReactComponent as LinkedinIcon } from '../../svg/linkedin.svg';

let nameArray: string[] = ['H', 'e', 'l', 'l', 'o'];

const ProfileIcon: React.FC<{}> = () => {
  return (
    <motion.div className='svg-container'>
      <motion.a variants={iconVariants} title='My Github' href='https://github.com/qhouyee' target='_blank'>
        <GithubIcon className='svg-link' />
      </motion.a>
      <motion.a variants={iconVariants} title='My Linkedin' href='https://sg.linkedin.com/in/hou-yee' target='_blank'>
        <LinkedinIcon className='svg-link' />
      </motion.a>
    </motion.div>
  );
};

const HeroComponent: React.FC<{}> = () => {
  let isMobile: boolean = useContext(MobileContext);
  let CharProfile: string = '/png/charprofile.png';
  return (
    <>
      {isMobile ? (
        <motion.aside initial='hidden' whileInView='visible' variants={simpleVariants(true)} viewport={{ once: true }}
          className='home-text' aria-label='Introduction content'>
          <div className='image-text-container' aria-label='Page introduction'>
            <FigureComponent url={CharProfile} alt={'An illustration of my inner mind'} cssClass="center char-profile" motionVariant={mobileImageVariants} />
            <h1>
              <AnimatedLetters strArray={nameArray} variants={bounceLetterVariants} letterClass={'hello'} />
            </h1>
            <h1>
              <motion.p initial='hidden' whileInView='visible' variants={paragraphVariants(0.7)} viewport={{ once: true }}
                style={{ fontSize: '2.5rem', margin: '0' }}>
                <b>Hyde</b> here!
              </motion.p>
            </h1>
          </div>
          <motion.p variants={paragraphVariants(0)} >
            {paragraph[0]}
          </motion.p>
          <ProfileIcon />
        </motion.aside>
      ) : (
        <>
          <motion.aside initial='hidden' whileInView='visible' variants={simpleVariants(true)} viewport={{ once: true }}
            className='home-text' aria-label='Introduction content'>
            <h1 style={{ margin: '0' }}>
              <AnimatedLetters strArray={nameArray} variants={bounceLetterVariants} letterClass={'hello'} />
            </h1>
            <h1>
              <motion.p initial='hidden' whileInView='visible' variants={paragraphVariants(0.7)} viewport={{ once: true }}
                style={{ fontSize: '2.5rem' }}>
                <b>Hyde</b> here!
              </motion.p>
            </h1>
            <motion.p variants={paragraphVariants(0)}>
              {paragraph[0]}
            </motion.p>
            <ProfileIcon />
          </motion.aside>
          <FigureComponent url={CharProfile} alt={'An illustration of my inner mind'} cssClass="center char-profile" motionVariant={imageVariants(0)} />
        </>
      )
      }
    </>
  );
}

export default HeroComponent;