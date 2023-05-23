import React from 'react';
import ProjectComponent from './ProjectComponent';
import './project.scss';

interface IProjectProps { }

interface Project {
  projectName: string;
  projectDescription: string;
  projectUrl: string;
  projectFigureUrl: string;
  projectTech: string[];
}

let projects: Project[] = [
  {
    projectName: '1. PORTFOLIO',
    projectDescription: '- Designed and developed a portfolio site to experiment with front end technologies and showcase my skills.',
    projectUrl: 'https://github.com/qhouyee/personal-website',
    projectFigureUrl: '/png/portfolio.png',
    projectTech: ['HTML', 'CSS', 'Typescript', 'React', 'Vite'],
  },
  {
    projectName: '2. CYCLING CULTURE IN XIAMEN',
    projectDescription: '- Conducted a geospatial analysis of the cycling infrastructure in Xiamen for a university module. \n - Experiment with ArcGIS geospatial web visualization capabilities.',
    projectUrl: '/webgis',
    projectFigureUrl: '/png/giscycling.png',
    projectTech: ['HTML', 'CSS', 'Javascript'],
  },
];

const ProjectSection: React.FC<IProjectProps> = (props: IProjectProps) => {
  return (
    <>
      {projects.map((project, index) => (
        <ProjectComponent
          key={index}
          id={index}
          projectName={project.projectName}
          projectDescription={project.projectDescription}
          projectUrl={project.projectUrl}
          projectFigureUrl={project.projectFigureUrl}
          projectTech={project.projectTech}
        />
      ))}
    </>
  );
}

export default ProjectSection;