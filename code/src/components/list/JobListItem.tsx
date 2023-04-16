import React from 'react';
import { Job } from '../../const';
import './list.scss';

export interface IJobListItemProps {
  job: Job;
}

const JobListItem: React.FC<IJobListItemProps> = ({ job }: IJobListItemProps) => {
  return (
    <li className = 'job-item'>
      <span className = 'job-title'>{job.title}</span>
      <span className = 'job-company'>@{job.company}</span>
      <span className = 'job-date'>{job.start} - {job.end} | {job.location}</span> 
      {job.responsibility && (
        <p>{job.responsibility.map((str) => <div>&#8669; {str} <br/></div>)}</p>
      )}
    </li>
  );
}

export default JobListItem;