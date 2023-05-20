import React from 'react';
import { motion } from "framer-motion";
import { jobCardVariants } from '../../variant/variants';
import { Job } from '../../const';
import './list.scss';

export interface IJobListItemProps {
  job: Job;
}


const JobListItem: React.FC<IJobListItemProps> = ({ job }: IJobListItemProps) => {
  return (
    <motion.li initial='hidden' whileInView='visible' viewport={{ margin: "0px -40%" }} variants={jobCardVariants}>
      <div className="job-card">
        <div className="job-header">
          <div className="job-company">{job.company}</div>
        </div>
        <div className="job-description">
          <div className='job-title'>{job.title}</div>
          <div className="job-responsibility">
            {job.responsibility.map((str, index) => <div key={index}>&#8669; {str} <br /></div>)}
          </div>
        </div>
        <div className="job-duration">
          {job.start} - {job.end}
        </div>
      </div>
    </motion.li>
  );
}

export default JobListItem;