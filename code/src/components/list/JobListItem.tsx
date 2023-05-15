import React from 'react';
import { Job } from '../../const';
import './list.scss';

export interface IJobListItemProps {
  job: Job;
}


const JobListItem: React.FC<IJobListItemProps> = ({ job }: IJobListItemProps) => {

  return (
    <li >
      <div className="job-card">
        <div className="job-header">
          <div className="job-company">{job.company}</div>
        </div>
        <div className="job-description">
          <div className='job-title'>{job.title}</div>
          <div className="job-responsibility">
            {job.responsibility.map((str) => <div>&#8669; {str} <br /></div>)}
          </div>
        </div>
        <div className="job-duration">
          {job.start} - {job.end}
        </div>
      </div>
    </li>
  );
}

export default JobListItem;