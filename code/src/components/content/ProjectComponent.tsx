import React, { useContext } from 'react';
import { NavLink } from "react-router-dom";
import { motion, Variants } from "framer-motion";
import { paragraphVariants, iconVariants, imageVariants, mobileImageVariants } from '../../variant/variants';
import { MobileContext } from '../../context/ViewContext';
import FigureComponent from '../figure/FigureComponent';
import { ReactComponent as CssIcon } from '../../svg/software/css.svg';
import { ReactComponent as HtmlIcon } from '../../svg/software/html.svg';
import { ReactComponent as JSIcon } from '../../svg/software/javascript.svg';
import { ReactComponent as ReactIcon } from '../../svg/software/react.svg';
import { ReactComponent as TSIcon } from '../../svg/software/typescript.svg';
import { ReactComponent as ViteIcon } from '../../svg/software/vite.svg';

export interface IProjectComponentProps {
  id: number;
  projectName: string;
  projectDescription: string;
  projectUrl: string;
  projectFigureUrl: string | undefined;
  projectTech: string[];
}

let techIconMap: { [tech: string]: React.FunctionComponent<React.SVGProps<SVGSVGElement>> } = {
  'HTML': HtmlIcon,
  'CSS': CssIcon,
  'Javascript': JSIcon,
  'Typescript': TSIcon,
  'React': ReactIcon,
  'Vite': ViteIcon
};

const ProjectComponent: React.FC<IProjectComponentProps> = ({ id, projectName, projectDescription, projectUrl, projectFigureUrl, projectTech }: IProjectComponentProps) => {
  let target: string = projectUrl.startsWith('http') ? '_blank' : '_self';
  let isMobile: boolean = useContext(MobileContext);
  let figVariant: Variants = isMobile ? mobileImageVariants :
    id % 2 === 0 ? imageVariants(0, true) : imageVariants(0);
  return (
    <motion.article initial='hidden' whileInView='visible' viewport={{ once: true }} className='project-layout' >
      <div className='figure-overlay'>
        <motion.h3 variants={paragraphVariants(0)} className='project-title'>{projectName}</motion.h3>
        <NavLink title='project link' to={projectUrl} target={target} className='project-link'>Find out more &#8658;</NavLink>
        <FigureComponent url={projectFigureUrl} alt='A preview of the project' cssClass='project-figure' motionVariant={figVariant} />
      </div>
      <div>
        <motion.span initial='hidden' whileInView='visible' viewport={{ once: true }} className='project-text'>
          <motion.h3 variants={paragraphVariants(0)}>Description</motion.h3>
          <motion.p variants={paragraphVariants(0)}>{projectDescription}</motion.p>
          <motion.div variants={iconVariants} className='tech-icons'>
            {projectTech.map(tech => {
              let Icon = techIconMap[tech];
              return Icon ? <Icon key={tech} className='tech-svg' /> : null;
            })}
          </motion.div>
        </motion.span>
      </div>
    </motion.article>
  );
}

export default ProjectComponent;