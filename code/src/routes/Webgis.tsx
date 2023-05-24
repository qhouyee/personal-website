import React, { useEffect } from 'react';
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Route from './Route';
import AnimatedLetters from '../components/animation/AnimatedLetters';
import { simpleVariants, titleVariants, paragraphVariants, iconVariants } from '../variant/variants';

const Webgis: React.FC<{}> = () => {
  let titleArray: string[] = ['Cycling', ' ', 'culture', ' ', 'in', ' ', 'Xiamen'];
  // To ensure route always start at the top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <AnimatePresence>
      <Route>
        <NavLink to="/" end>
          <div className="close-button"></div>
        </NavLink>
        <motion.div initial='hidden' whileInView='visible' exit='hidden' variants={simpleVariants(true, 1.5)} viewport={{ once: true }}
          id='center-page-container'>
          <h2><AnimatedLetters
            strArray={titleArray}
            variants={titleVariants} /></h2>
          <motion.p variants={paragraphVariants(0)}>
            <b>Description:</b> <br />The goal of this school project is to collect and process datasets for visualization on a web GIS platform. Our team has chosen to use a dataset from Xiamen, which includes information about public transport and cycling infrastructure, as well as cycling journeys. We specifically use the ArcGIS API to develop map views with interactive elements and embed them in a HTML and CSS website.
          </motion.p>
          <motion.p variants={paragraphVariants(0)}>Please see the video below for our demo:</motion.p>
          <motion.iframe variants={iconVariants} className='video' width="560" height="260" src="https://www.youtube.com/embed/6LlBX-7IFb0?autoplay=1" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></motion.iframe>
        </motion.div>
      </Route>
    </AnimatePresence>
  );
};

export default Webgis;