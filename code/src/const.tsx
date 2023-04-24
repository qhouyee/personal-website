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
  conciseResponsibility?: string[]
  responsibility?: string[];
};

const cares: Job = {
  title: 'Software Developer/ Research Associate',
  company: 'Cambridge Centre for Advanced Research and Education in Singapore (CARES)',
  location: 'Singapore',
  start: 'Jun 2021',
  end: 'Present',
  conciseResponsibility: [
    'Developed full-stack digital twin applications for laboratory automation and smart city management in Singapore and the UK, using knowledge graphs.',
    'Designed workflows to ingest and transfer geometry, time series, and other data from APIs, Excel, sensors, and 3D IFC building models into PostgreSQL and knowledge graphs.',
    'Deployed and configured REST agents and services on Docker for development, testing and production.',
    'Implemented with 95% coverage for unit and integration testing.',
  ],
  responsibility: [
    'Utilized knowledge graphs to enrich data models with semantic information about cities, buildings, devices, and assets.',
    'Collaborated with team members to design OWL ontologies (data schemas) for cross-domain use cases to ensure data consistency and interoperability of knowledge graphs.',
    'Contributed to technical discussions and the organization and delivery of administrative and reporting requirements, including several research publications, international conference presentations, blog articles, and a proposal.',
  ],
};

const nus: Job = {
  title: 'Part-time Research Assistant',
  company: 'Department of Real Estate, National University of Singapore',
  location: 'Singapore',
  start: 'Jul 2020',
  end: 'Jun 2021',
  conciseResponsibility: [
    'Processed large geospatial and Excel datasets for analysis and visualization to analyze urban trends and patterns.'
  ],
  responsibility: [
    'Conducted research and authored proposals on the effects of electricity market liberalization on consumer behaviors, as well as the challenges related to immigrant integration into housing markets in global cities.',
  ],
};

const nusdo: Job = {
  title: 'Student Development Associate',
  company: 'National University of Singapore Development Office',
  location: 'Singapore',
  start: 'May 2019',
  end: 'May 2020',
  responsibility: [
    'Invited stakeholders via outbound calls to support the Annual Giving Campaign for financially needy students.',
  ],
};

const recruitEx: Job = {
  title: 'Temp Recruitment Coordinator',
  company: 'Recruit Express',
  location: 'Singapore',
  start: 'May 2019',
  end: 'Jul 2019',
};

const ott: Job = {
  title: 'Intern (Research & Consultancy)',
  company: 'OrangeTee & Tie',
  location: 'Singapore',
  start: 'May 2018',
  end: 'October 2018',
  responsibility: [
    'Updated and maintained the research database, including collation of market statistics, reports, and articles.',
    'Assisted in preparation of data visualization diagrams and info-graphics for corporate presentations.',
  ],
};

export const experiences: Job[] = [cares, nus, nusdo, recruitEx, ott]