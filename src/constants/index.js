import {
  javascript,
  html,
  css,
  reactjs,
  nodejs,
  git,
  figma,
  docker,
  rubyrails,
  graphql,
  komikult,
  coverhunt,
  dcc,
  kelhel,
  microverse,
  construction,
  UCI_Anteaters_logo,
  daplab_blue,
  ThetaTau,
  aiatUCI,
  zotbin,
  Boundary,
  cleanpaws,
  earth,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Python',
    icon: nodejs,
  },
  {
    name: 'AWS',
    icon: rubyrails,
  },
  {
    name: 'C++',
    icon: graphql,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'figma',
    icon: figma,
  },
  {
    name: 'docker',
    icon: docker,
  },
];

const experiences = [
  {
    title: 'ICS Lab Tutor',
    company_name: 'UCI ICS',
    icon:  UCI_Anteaters_logo,
    iconBg: '#333333',
    date: 'Oct 2023 - March 2024',
  },
  {
    title: 'AI External Outreach',
    company_name: 'AI@UCI',
    icon: aiatUCI,
    iconBg: '#333333',
    date: 'Sept 2023 - Present',
  },
  {
    title: 'Chair Of Proffesional Development',
    company_name: 'Theta Tau',
    icon: ThetaTau,
    iconBg: '#333333',
    date: 'May 2024 - Present',
  },
  {
    title: 'Reasearch Assistant',
    company_name: 'Mathe Lab',
    icon: UCI_Anteaters_logo,
    iconBg: '#333333',
    date: 'June 2024 - August 2024',
  },
  {
    title: 'Reasearch Assistant',
    company_name: 'Dap Lab',
    icon: daplab_blue,
    iconBg: '#333333',
    date: 'November 2024 - Present',
  },
  {
    title: 'API Developer',
    company_name: 'ZotBins',
    icon: zotbin,
    iconBg: '#333333',
    date: 'Sept 2024 - Present',
  },
  {
    title: 'Algorithm Developer',
    company_name: 'Boundary RSS',
    icon: Boundary,
    iconBg: '#333333',
    date: 'June 2024 - Present',
  }
];

const projects = [
  {
    id: 'project-1',
    name: 'Clean Paws',
    description: 'An automatic Recycling Bin.',
    tags: [

    ],
    image: cleanpaws,
    repo: 'https://github.com/jkuang15/clean-paws',
    //demo: 'https://shaqdeff.github.io/KomiKult/',
  },
  {
    id: 'project-2',
    name: 'Boundary RSS',
    description:
      'SeisGAN model improved to process seismic data',
    tags: [
   
    ],
    image: earth,
    repo: 'https://github.com/Stqven/SeisGAN-Improving-Seismic-Image-Resolution-and-Reducing-Noise',
    //demo: 'https://shaqdeff.github.io/Leaderboard/',
  },

];

export { services, technologies, experiences, projects };
