export const paragraph: string[] = [
  'I’m a research software developer from Singapore. <br> \
  Currently, I’m developing full stack digital twin applications. This involves the visualisation and \
  integration of 3D building and geospatial data from APIs, sensors, and other data sources.'
];

export interface Job {
  title: string;
  company: string;
  location: string;
  start: string;
  end: string;
  responsibility: string[];
};

const cares: Job = {
  title: 'Software Developer',
  company: 'Cambridge Centre for Advanced Research and Education in Singapore',
  location: 'Singapore',
  start: 'Jun 2021',
  end: 'Present',
  responsibility: [
    'Developed full-stack digital twin applications for laboratory automation and smart city management in Singapore and the UK, using knowledge graphs.',
    'Integrated geometry, time series, and other data from APIs, Excel, sensors, and 3D IFC building models into PostgreSQL and knowledge graphs.',
  ]
};

const nus: Job = {
  title: 'Research Assistant',
  company: 'Department of Real Estate, National University of Singapore',
  location: 'Singapore',
  start: 'Jul 2020',
  end: 'Jun 2021',
  responsibility: ['Processed large geospatial and Excel datasets for analysis and visualization to analyze urban trends and patterns.',]
};

const nusdo: Job = {
  title: 'Student Development Associate',
  company: 'NUS Development Office',
  location: 'Singapore',
  start: 'May 2019',
  end: 'May 2020',
  responsibility: ['Invited stakeholders via outbound calls to support the Annual Giving Campaign for financially needy students.',]
};

const recruitEx: Job = {
  title: 'Temp Recruitment Coordinator',
  company: 'Recruit Express',
  location: 'Singapore',
  start: 'May 2019',
  end: 'Jul 2019',
  responsibility: ['Coordinated and managed candidates for their (phone, in-person) interviews and contractual signing.',]
};

const ott: Job = {
  title: 'Intern (Research & Consultancy)',
  company: 'OrangeTee & Tie',
  location: 'Singapore',
  start: 'May 2018',
  end: 'October 2018',
  responsibility: [
    'Updated and maintained the research database.',
    'Assisted in preparation of data visualization diagrams and info-graphics for corporate presentations.',
  ]
};

export const experiences: Job[] = [cares, nus, nusdo, recruitEx, ott]