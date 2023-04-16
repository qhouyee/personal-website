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
  responsibility?: string[];
};

const cares: Job = {
  title: 'Software Developer/ Research Associate',
  company: 'Cambridge Centre for Advanced Research and Education in Singapore (CARES)',
  location: 'Singapore',
  start: 'Jun 2021',
  end: 'Present',
  responsibility: [
    'Developed digital twin web applications to display real-time cross-domain data for digital lab automation and smart city management in Singapore, and the UK.',
    'Implemented ETL pipelines to store 3D building, utilities, and sensor data from various REST APIs and sources (Excel, BIM) in a knowledge graph, as well as transfer data across PostgreSQL and Blazegraph databases.',
    'Deployed REST agents and services on Docker using multi-stage builds for development, automated test and production environments. Delivered with 95% test coverage for unit and integration testing.',
    'Collaborated with team members to design OWL ontologies (data schemas) for cross-domain use cases to ensure data consistency and interoperability. ',
    'Contributed to technical discussions and the organization and delivery of administrative and reporting requirements, including several research publications, international conference presentations, blog articles, and a proposal.',
  ],
};

const nus: Job = {
  title: 'Part-time Research Assistant',
  company: 'Department of Real Estate, National University of Singapore',
  location: 'Singapore',
  start: 'Jul 2020',
  end: 'Jun 2021',
  responsibility: [
    'Compiled and processed large datasets for analysis and visualization in R studio and Excel, including a survey with over 10,000 observations and 2,000 variables in Mandarin and English. ',
    'Executed geospatial (GIS) processing and visualization in QGIS and ArcGIS to analyze urban trends and patterns.',
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