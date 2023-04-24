import React from 'react';
import { Job } from '../../const';
import './list.scss';

export interface IJobListItemProps {
  job: Job;
  includeAll: boolean;
}

const JobListItem: React.FC<IJobListItemProps> = ({ job, includeAll }: IJobListItemProps) => {
  let responsibilities: string[] = [];

  if (job.conciseResponsibility && job.conciseResponsibility.length > 0) {
    responsibilities.push(...job.conciseResponsibility);
  }

  if (includeAll && job.responsibility && job.responsibility.length > 0) {
    responsibilities.push(...job.responsibility);
  }

  let itemClass: string = includeAll ? 'vertical-timeline' : 'winding-timeline';

  return (
    <li className={`${itemClass} job-timeline`}>
      {responsibilities.length > 0 ? (
        <>
          <span className='job-title'>{job.title}</span>
          <span className='job-company'>@{job.company}</span>
          <span className='job-date'>{job.start} - {job.end} | {job.location}</span>
          <span className='job-responsibility'>{responsibilities.map((str) => <div>&#8669; {str} <br /></div>)}</span>
        </>
      ) :
        (
          <>
            <span className='job-company'><b>{job.title}</b>@{job.company}</span>
            <span className='job-date'>{job.start} - {job.end} | {job.location}</span>
          </>
        )
      }
    </li>
  );
}

export default JobListItem;