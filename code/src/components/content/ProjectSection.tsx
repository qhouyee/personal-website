import React from 'react';
import Portfolio from '../../assets/png/portfolio.png';
import CyclingAnalysis from '../../assets/png/giscycling.png';
import ProjectComponent from './ProjectComponent';
import './project.scss';

export interface IProjectProps { }

let portfolioTechStack: string[] = ['HTML', 'CSS', 'Typescript', 'React', 'Vite']
let cyclingTechStack: string[] = ['HTML', 'CSS', 'Javascript']

const ProjectSection: React.FC<IProjectProps> = (props: IProjectProps) => {
  return (
    <>
      <ProjectComponent projectName='1. PORTFOLIO' projectDescription='- Designed and developed a portfolio site to experiment with front end technologies and showcase my skills.'
        projectFigureUrl={Portfolio} projectTech={portfolioTechStack} />
      <ProjectComponent projectName='2. CYCLING CULTURE IN XIAMEN' projectDescription={'- Conducted a geospatial analysis of the cycling infrastructure in Xiamen for a university module. \n - Experiment with ArcGIS geospatial web visualization capabilities.'}
        projectFigureUrl={CyclingAnalysis} projectTech={cyclingTechStack} />
    </>
  );
}

export default ProjectSection;