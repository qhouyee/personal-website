import React from 'react';

export interface IProjectProps { }

const Project: React.FC<IProjectProps> = (props: IProjectProps) => {
  return (
    <main>
      <p>This is the project page</p>
    </main>
  );
};

export default Project;