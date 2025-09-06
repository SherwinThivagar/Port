import {
  frontend,
  backend,
  ux,
  prototyping,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  git,
  figma,
  docker,
  postgresql,
  rubyrails,
  graphql,
  komikult,
  leaderboard,
  math,
  movie,
  nyeusi,
  space,
  coverhunt,
  dcc,
  enginerio,
  kelhel,
  microverse,
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
  {
    title: 'Designing',
    icon: frontend,
  },
  {
    title: 'Drafting',
    icon: backend,
  },
  {
    title: 'Prototyping',
    icon: ux,
  },
  {
    title: 'Reverse Engineering',
    icon: prototyping,
  },
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
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'Rails',
    icon: rubyrails,
  },
  {
    name: 'graphql',
    icon: graphql,
  },
  {
    name: 'postgresql',
    icon: postgresql,
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
    title: 'Product Design Intern',
    company_name: 'Mechathon Engineering Pvt Ltd',
    icon: coverhunt,
    iconBg: '#333333',
    date: 'Aug 2021 - Sep 2021',
  },
  {
    title: 'Programmer Analyst Trainee',
    company_name: 'Cognizant Technology Solutions',
    icon: microverse,
    iconBg: '#333333',
    date: 'Jan 2022 - Jul 2022',
  },
  {
    title: 'Research Intern',
    company_name: 'WAYLAND ADDITIVE LIMITED',
    icon: kelhel,
    iconBg: '#333333',
    date: 'Jan 2023 - Aug 2023',
  },
  {
    title: 'Design Engineer',
    company_name: 'PUMO TECHNOVATION INDIA PVT LTD',
    icon: dcc,
    iconBg: '#333333',
    date: 'Oct 2023 - Sep 2025',
  },
  {
    title: 'Design Engineer',
    company_name: 'Enginerio Technology Solutions LLP',
    icon: enginerio,
    iconBg: '#333333',
    date: 'Sep 2025 - Present',
  },
];

const projects = [
  {
    id: 'project-1',
    name: 'Titanium AM',
    description: 'Characterization of Titanium Alloy Manufactured by EBM involving NeuBeam.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: komikult,
    repo: 'https://sherwinthivagar.wixstudio.com/sherwint-portfolio/titanium-am',
    demo: 'https://sherwinthivagar.wixstudio.com/sherwint-portfolio/titanium-am',
  },
  {
    id: 'project-2',
    name: 'Friction Stir Welding',
    description:'Computational Analysis and Validation of Friction Stir Welding (FSW) using Bobbin Tool.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'restapi',
        color: 'green-text-gradient',
      },
      {
        name: 'scss',
        color: 'pink-text-gradient',
      },
    ],
    image: leaderboard,
    repo: 'https://sherwinthivagar.wixstudio.com/sherwint-portfolio/frictionstirwelding',
    demo: 'https://sherwinthivagar.wixstudio.com/sherwint-portfolio/frictionstirwelding',
  },
  {
    id: 'project-3',
    name: 'Screw Gauge',
    description: 'A screw gauge designed using Autodesk Fusion 360',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: math,
    repo: 'https://sherwinthivagar.wixstudio.com/sherwint-portfolio/screwgauge',
    demo: 'https://sherwinthivagar.wixstudio.com/sherwint-portfolio/screwgauge',
  },
  {
    id: 'project-4',
    name: 'Toy Steam Engine',
    description: `A steam engine designed for a contest using Solidworks software.`,
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: movie,
    repo: 'https://sherwinthivagar.wixstudio.com/sherwint-portfolio/toysteamengine',
    demo: 'https://sherwinthivagar.wixstudio.com/sherwint-portfolio/toysteamengine',
  },
  {
    id: 'project-5',
    name: 'Drone',
    description:'This is a drone modelled and analysed for a coursework.',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: nyeusi,
    repo: 'https://sherwinthivagar.wixstudio.com/sherwint-portfolio/drone',
    demo: 'https://sherwinthivagar.wixstudio.com/sherwint-portfolio/drone',
  },
];

export { services, technologies, experiences, projects };
