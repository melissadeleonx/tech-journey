import {
  AboutSectionType,
  ContactSectionType,
  ExperienceSectionType,
  FooterSectionType,
  HeroSectionType,
  NavbarSectionType,
  ProjectsSectionType,
  SkillsSectionType,
  SocialSectionType,
} from '../types/sections';
import { StringKeyValueType } from '../types';
import { resumeFileName } from './config';
import { getId } from './helper';

/*
 * =========================
 * AUTHOR INFO
 * =========================
 */

export const socialLinks: StringKeyValueType = {
  instagram: 'https://www.instagram.com/melissadeleonx',
  twitter: 'https://twitter.com/melissadeleonx',
  github: 'https://github.com/melissadeleonx',
  linkedin: 'https://www.linkedin.com/in/melissadeleonx/',
};

export const author = {
  name: 'Melissa De Leon',
  email: 'primavita19@gmail.com',
};

export const seoData = {
  title: 'Melissa De Leon | Junior Full-Stack Developer',
  description:
    'Documenting my tech journey — code, challenges, and victories. Through this webpage, I am tracking my progress and projects as a junior full-stack developer. Currently mastering skills with Harvard CS50 on edX.',
  author: author.name,
  image:
    'https://user-images.githubusercontent.com/85820227/231264058-df236c47-a8d2-4077-9fa6-3577aa18e8ca.png',
  url: '',
  keywords: [
    'Melissa',
    'Melissa De Leon',
    'melissadeleon',
    'melissadeleonx',
    'Portfolio',
    'Melissa De Leon Portfolio ',
    'Melissa De Leon Tech Journey',
  ],
};

/*
 * =========================
 * SECTIONS
 * =========================
 */

// Navbar Section

export const navbarSection: NavbarSectionType = {
  navLinks: [
    { name: 'about', url: '/#about' },
    { name: 'skills', url: '/#skills' },
    { name: 'experience', url: '/#experience' },
    { name: 'projects', url: '/#projects' },
    { name: 'contact', url: '/#contact' },
  ],
  cta: {
    title: 'resume',
    url: `/${resumeFileName}`,
  },
};

// * Hero Section

export const heroSection: HeroSectionType = {
  subtitle: "Ciao and Mabuhay 🐱, I'm ",
  title: 'Melissa De Leon.',
  tagline: 'and this is my tech journey',
  description:
    "I transitioned from a background in SEO and customer service to embark on a journey into the world of programming. As part of my coding adventure, I'm actively engaged in building small programs to enhance my proficiency in software and web development.",
  specialText: "Junior Full-Stack Developer, currently studying Harvard CS50 courses and open to freelance opportunities",

  cta: {
    title: 'see my resume',
    url: `/${resumeFileName}`,
    hideInDesktop: true,
  },
};

// * About Section

export const aboutSection: AboutSectionType = {
  title: 'about me',
  list: {
    title: 'Here are a few technologies I’ve been studying and working with recently:',
    items: [
      'C',
      'Python',
      'Flask',
      'SQL',
      'Javascript',
      'HTML',
      'CSS',
      'Boostrap',
      'Next.js',
      'React.js',
      'TailwindCSS',
      'GIT',
    ],
  },
  img: '/myimage.jpg',
};

// * Skills Section

export const skillsSection: SkillsSectionType = {
  title: 'what i do',
  skills: [
    {
      id: getId(),
      title: 'full stack development',
      // animation lottie file: https://lottiefiles.com/
      lottie: {
        light: '/lotties/frontend.json',
        dark: '/lotties/frontend-dark.json',
      },
      points: [
        'Building responsive static websites with HTML, CSS, and JavaScript, leveraging frontend frameworks including React, Next.js, Gatsby, Tailwind CSS, and Bootstrap.',
        'Developing robust backend applications and servers using Python, Flask, and SQL.',
        'Pursuing continuous education through Harvard CS50 Web Development (cs50w) and CS50 Python (cs50p) courses.',
      ],
      softwareSkills: [
        // iconify icons: https://icon-sets.iconify.design/
        { name: 'HTML5', icon: 'vscode-icons:file-type-html' },
        { name: 'CSS3', icon: 'vscode-icons:file-type-css' },
        { name: 'javaScript', icon: 'vscode-icons:file-type-js-official' },
        {
          name: 'typeScript',
          icon: 'vscode-icons:file-type-typescript-official',
        },
        { name: 'node.js', icon: 'logos:nodejs-icon' },
        { name: 'react.js', icon: 'logos:react' },
        { name: 'next.js', icon: 'logos:nextjs-icon' },
        { name: 'tailwind CSS', icon: 'logos:tailwindcss-icon' },

        { name: 'database', icon: 'vscode-icons:file-type-sql' },
      ],
    },
    {
      id: getId(),
      title: 'Future Goals',
      lottie: {
        light: '/lotties/ethereum.json',
        dark: '/lotties/ethereum-dark.json',
      },
      points: [
        'Master the Front-end and Back-end Development aspects of web development.',
        'Explore Blockchain Technology and understand its applications.',
        'Gain expertise in cybersecurity and delve into the complexities of low-level programming languages, particularly focusing on languages like C.',
      ],
      softwareSkills: [
        { name: 'ethereum', icon: 'logos:ethereum' },
        { name: 'solidity', icon: 'logos:solidity' },
        { name: 'metamask', icon: 'logos:metamask-icon' },
      ],
    },
  ],
};

// * Experience Section

export const experienceSection: ExperienceSectionType = {
  title: "My Career Highlights",
  experiences: [
    {
      company: 'Freelance Web Developer',
      companyUrl: 'https://github.com/melissadeleonx',
      role: 'Full-Stack Developer',
      started: 'December 2023',
      upto: 'Present',
      tasks: [
        "Actively building and deploying websites on platforms such as Github, Vercel, Netlify, Wordpress, and Siteground.",
        "Recently completed Harvard University's cs50 online course. Applying acquired skills in critical thinking and proficiency in languages including C, Python, Flask, SQL, and Javascript.",
        "Open to exploring new freelance opportunities.",
      ],
    },
    {
      company: 'Self-employed',
      companyUrl: 'https://www.visitsicilynow.com/',
      role: 'SEO and Social Media Manager',
      started: 'January 2019',
      upto: 'February 2021',
      tasks: [
        "Selected for the first cohort of StarkCon Cairo Fellow program and got trained on blockchain, Cairo and started building on StarkNet. ",
        "Underwent a 5 week program under mentorship of professionals from StarkNet ecosystem. ",
        "Learnt how to setup Cairo environment, blockchain, basics of ZK and Cairo, writing smart contracts and Starklings.",
        "Earned an exclusive NFT as proof of completion and custom swag kit.",
      ],
    },
    {
      company: 'Yellow Fryum',
      companyUrl: 'https://yellowfryum.com',
      role: 'Frontend Developer & Research Intern',
      started: 'March 2022',
      upto: 'May 2022',
      tasks: [
        "Spearheaded the design and development of a responsive landing page using ReactJS and Tailwind CSS, resulting in a               40% increase in page load speed",
        'Worked closely with a cross-functional team of 5 interns to ideate and implement UI/UX improvements, resulting in a 20%          boost in user engagement and a 15% increase in conversion rates.',
        'Conducted user research and usability testing, gathering feedback from over 100+ users, which directly influenced                design decisions and led to a 30% improvement in user satisfaction scores.',
        "Met project deadlines consistently, delivering good-quality code and designs on time.",
      ],
    },
    {
      company: 'Google Cloud India',
      companyUrl: 'https://cloud.google.com/',
      role: 'Google Cloud Ready Facilitator',
      started: 'March 2022',
      upto: 'June 2022',
      tasks: [
        "Selected as Google Cloud Facilitator for my institution.",
        "Enrolled 600+ students from mine as well as students all across India.",
        "Trained and helped them complete skill badges and quests in the domains of Cloud Infrastructure, Cloud Native Application Development, Big Data and Machine Learning, Security, Machine Learning & AI",
        "At the end of program, approximately 550 students completed their milestones and gained significant knowledge in their respective tracks",
        "The institution as a whole achieved Milestone 3 out of 4 which is a big feat with its first year in the GCRF program.",
      ],
    },
    // {
    //   company: '',
    //   companyUrl: '',
    //   role: '',
    //   started: '',
    //   upto: '',
    //   tasks: [

    //   ],
    // },
  ],
};

// * Projects Section

export const projectsSection: ProjectsSectionType = {
  title: 'my projects',
  projects: [
    {
      id: getId(),
      name: "Instant AI",
      url: "https://github.com/gaurav-sarage/InstantAI",
      repo: "https://github.com/gaurav-sarage/InstantAI",
      img: "",
      year: 2023,
      tags: ["NextJS", "Typescript", "Shadcn", "Prisma"],
    },
    {
      id: getId(),
      name: 'ShopTronics - eCommerce',
      url: 'https://github.com/gaurav-sarage/shopTronics-ecommerce',
      repo: 'https://github.com/gaurav-sarage/shopTronics-ecommerce',
      img: 'https://user-images.githubusercontent.com/85820227/231495891-ec7c33c6-7f36-41fe-8efd-3e992d5b800d.png',
      year: 2023,
      tags: ['React', 'Scss', 'HTML', 'Strapi', 'Stripe Payment Gateway'],
    },
    {
      id: getId(),
      name: 'ProShop MERN eCommerce',
      url: 'https://github.com/gaurav-sarage/ecommerce',
      repo: 'https://github.com/gaurav-sarage/ecommerce',
      img: 'https://user-images.githubusercontent.com/85820227/231498672-64b2e2ff-d987-45a3-bca6-5d8d89759360.png',
      year: 2022,
      tags: ['React', 'Redux', 'Express', 'MongoDB'],
    },
    {
      id: getId(),
      name: 'Photo Gallery App (React)',
      url: 'https://gsierra19-photo-gallery-app.web.app/',
      repo: 'https://github.com/gaurav-sarage/photo-gallery-app',
      img: 'https://user-images.githubusercontent.com/85820227/250177861-cd5a5cd8-590e-49a1-92b5-4273aeee2f57.png',
      year: 2023,
      tags: ['ReactJS', 'CSS', 'JavaScript'],
    },
    {
      id: getId(),
      name: 'Modern Art Gallery',
      url: 'https://gaurav-sarage.github.io/Client-02/',
      repo: 'https://github.com/gaurav-sarage/Client-02/',
      img: 'https://user-images.githubusercontent.com/85820227/231500007-aa155693-1871-4e44-8152-9c230861e7bd.png',
      year: 2022,
      tags: ['HTML', 'CSS'],
    },
    {
      id: getId(),
      name: 'countries app using REST API',
      url: 'https://country-api-react-app.netlify.app/',
      repo: 'https://github.com/gaurav-sarage/country-api',
      img: 'https://user-images.githubusercontent.com/85820227/231487782-eb60fb21-32ae-4012-9190-7c42be3d18e8.png',
      year: 2022,
      tags: ['React', 'Sass'],
    },
    {
      id: getId(),
      name: 'GitHub User Search',
      url: 'https://gaurav-sarage.github.io/github-user-search/',
      repo: 'https://github.com/gaurav-sarage/github-user-search',
      img: 'https://user-images.githubusercontent.com/85820227/231501132-067311ef-2222-46d0-a20a-f0bf48827e01.png',
      year: 2021,
      tags: ['HTML', 'CSS', 'JavaScript'],
    },
    {
      id: getId(),
      name: 'Hackathon Portfolio',
      url: 'https://gaurav-sarage.github.io/webathon-portfolio/',
      repo: 'https://github.com/gaurav-sarage/webathon-portfolio',
      img: 'https://user-images.githubusercontent.com/85820227/233788920-7c76e976-2f42-4750-a6ce-ad0fb2eb405d.png',
      year: 2022,
      tags: ['HTML', 'CSS', 'JavaScript'],
    },
  ],
};

// * Contact Section

export const contactSection: ContactSectionType = {
  title: 'get in touch',
  subtitle: "what's next",
  paragraphs: [
    "I'm currently looking for a remote job or any new opportunities.",
    'Whether you have a project to discuss or just want to say hi, my inbox is open for all!',
  ],
  link: `mailto:${author.email}`,
};

// Social Links Section

export const socialSection: SocialSectionType = {
  socialLinks: [
    {
      icon: 'tabler:brand-github',
      url: socialLinks.github,
    },
    {
      icon: 'mdi:instagram',
      url: socialLinks.instagram,
    },
    {
      icon: 'lucide:twitter',
      url: socialLinks.twitter,
    },
    {
      icon: 'lucide:linkedin',
      url: socialLinks.linkedin,
    },
  ],
};

// Footer Section

export const footerSection: FooterSectionType = {
  title: 'Copyright © 2023 Melissa De Leon MIT License',
  link: 'https://opensource.org/licenses/MIT',
  title2: 'Forked version from Brittany Chiang with contributions from Gaurav Sarage',
  link2: 'https://github.com/bchiang7',
};