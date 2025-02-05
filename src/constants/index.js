import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  python,
  meta,
  starbucks,
  ucsd,
  solarturbines,
  casgc,
  robosub,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  java,
  ros2,
  cpp,
  sql,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "projects",
    title: "Projects",
  },
];

const services = [
  {
    title: "Software Engineer",
    icon: web,
  },
  {
    title: "Data Analyst",
    icon: mobile,
  },
  {
    title: "Machine Learning Engineer",
    icon: backend,
  },
  {
    title: "Digital Design Engineer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "C++",
    icon: cpp,
  },
  {
    name: "java",
    icon: java,
  },
  {
    name: "Python",
    icon: python,
  },
  // {
  //   name: "SQL",
  //   icon: sql,
  // },
  // {
  //   name: "ros2",
  //   icon: ros2,
  // },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
  // {
  //   name: "docker",
  //   icon: docker,
  // },
];

const experiences = [
  {
    title: "Computer Science Tutor",
    company_name: "UC San Diego",
    icon: ucsd,
    iconBg: "#383E56",
    date: "April 2024 - Present",
    points: [
      "Conduct 6 hours weekly, guiding students in mastering Object-Oriented Programming principles, data structures, algorithmic thinking, language-specific constraints, and troubleshooting software projects in Java/Python.",
      "Foster an engaging learning environment, offering personalized assistance tailored to individual learning styles.",
    ],
  },
  {
    title: "Software Engineer",
    company_name: "Triton Robosub",
    icon: robosub,
    iconBg: "#E6DEDD",
    date: "Jan 2025 - Present",
    points: [
      "Integrate IMU with robosub system for data collection and processing by the Perceptions and Localization team.",
      "Research localization and controls algorithms to integrate into our localization pipeline.",  
    ],
  },
  {
    title: "R&D Systems Engineer",
    company_name: "NASA CaSGC",
    icon: casgc,
    iconBg: "#383E56",
    date: "July 2024 - September 2024",
    points: [
      "Led software team to research and integrate technologies for developing a drone to record wildfire data.",
      "Engineered embedded system that sends wildfire data to application and saves it to non-relational database.",
      "Collaborated with hardware team to ensure seamless data communication between the drone and web server.",
    ],
  },
  {
    title: "DevSecOps Intern",
    company_name: "Solar Turbines",
    icon: solarturbines,
    iconBg: "#E6DEDD",
    date: "July 2023 - September 2023",
    points: [
      "Facilitated in maintaining IEC 62443 Certification by integrating SAST tool in CI/CD pipelines, detecting 100+ security vulnerabilities",
      "Migrated repositories from Microsoft Azure to GitHub by first configuring self-hosted runner with custom environments and deploying to CI/CD pipeline to ensure successful build of software projects.",
      "Aided in developing automation tool for creation of work items for specific vulnerabilities found, increasing productivity by 80% on average.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Heart Disease Analytics",
    description:
      "Complete data analysis on the main predictors of early heart disease coupled with a predictor model to determine heart health of patients",
    tags: [
      {
        name: "pandas",
        color: "blue-text-gradient",
      },
      {
        name: "scikit-learn",
        color: "green-text-gradient",
      },
      {
        name: "matplotlib",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/FrancGarcia/heart-disease-analysis",
  },
  {
    name: "Wildfire Monitor System",
    description:
      "Prototypical system that maps wildfire data (recorded from custome drone) on webapp in interactive map. Saves wildifre data in MongoDB cluster for future analysis.",
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "node.js",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/FrancGarcia/CaSGC-Group2",
  },
  {
    name: "PantryPal",
    description:
      "A comprehensive webapp that utilizes ChatGPT API to generate recipes given list of ingredients. Stores recipes in database. Allows for multiple users.",
    tags: [
      {
        name: "java",
        color: "blue-text-gradient",
      },
      {
        name: "chatgptapi",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/ucsd-cse110-fa23/cse-110-project-team-14",
  },
];

export { services, technologies, experiences, testimonials, projects };