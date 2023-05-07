import React from 'react';
import { NavLink } from "react-router-dom";
import FigureComponent from '../figure/FigureComponent';
import { ReactComponent as CssIcon } from '../../assets/svg/software/css.svg';
import { ReactComponent as HtmlIcon } from '../../assets/svg/software/html.svg';
import { ReactComponent as JSIcon } from '../../assets/svg/software/javascript.svg';
import { ReactComponent as ReactIcon } from '../../assets/svg/software/react.svg';
import { ReactComponent as TSIcon } from '../../assets/svg/software/typescript.svg';
import { ReactComponent as ViteIcon } from '../../assets/svg/software/vite.svg';

export interface IProjectComponentProps {
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

const ProjectComponent: React.FC<IProjectComponentProps> = ({ projectName, projectDescription, projectUrl, projectFigureUrl, projectTech }: IProjectComponentProps) => {
  let target:string = projectUrl.startsWith('http') ? '_blank' : '_self';
  return (
    <article className='project-layout'>
      <div className='figure-overlay' proj-title={projectName}>
        <NavLink title='project link' to={projectUrl} target={target} className='project-link'>Find out more &#8658;</NavLink>
        <FigureComponent url={projectFigureUrl} alt='A preview of the project' cssClass='project-figure' />
      </div>
      <div>
        <span className='project-text'>
          <h3>Description</h3>
          <p>{projectDescription}</p>
          <div className='tech-icons'>
            {projectTech.map(tech => {
              let Icon = techIconMap[tech];
              return Icon ? <Icon key={tech} title={tech} className='tech-svg' /> : null;
            })}
          </div>
        </span>
      </div>
    </article>
  );
}

export default ProjectComponent;