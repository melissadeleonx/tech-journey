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
        "Specialized in SEO strategies and effective WordPress management. Demonstrated expertise through impactful contributions to SicilyShortStay.com and VisitSicilyNow.com.",
        "Excelled in curating and managing engaging content across various social media platforms. Contributed valuable insights and strategies to enhance the online presence of Hotel Tourist Cefalu, MediTravel, and Palazzo Raho.",
        "Successfully oversaw content creation and management, ensuring high-quality and relevant materials.",
        "Applied skills in content strategy to optimize digital presence for clients.",
      ],
    },
    {
      company: 'World Escape LLC',
      companyUrl: 'https://www.worldescape.com/',
      role: 'Business Development Manager',
      started: 'January 2015',
      upto: 'December 2018',
      tasks: [
        "Actively promoted World Escape LLC through strategic marketing initiatives.",
        "Established and nurtured partnerships with vacation rental websites such as HomeAway, Wimdu, Housetrip, amplifying brand visibility.",
        "Dedicated 8 years to cultivating relationships with property management companies.",
        "Instrumental in the success of multiple high-ranking websites such as Amsterdamescape.com and Amsterdamstay.com, which have thrived since before the Google era.",
      ],
    },
    {
      company: 'AmsterdamStay',
      companyUrl: 'https://www.amsterdamstay.com/',
      role: 'Customer Service Manager',
      started: 'September 2010',
      upto: 'December 2018',
      tasks: [
        "Led the customer service division, overseeing a team dedicated to providing excellent support.",
        "Managed customer service operations for World Escape's premium websites, including NewYorkStay.com, AmsterdamStay.com, AmsterdamEscape.com, RomeEscape.com, LondonEscape.com, and more.",
        "Provided dedicated support to guests and property owners, ensuring a positive experience across all platforms.",
      ],
    },

    {
      company: 'BPO Companies',
      companyUrl: 'https://melissadeleonx.github.io/',
      role: 'Customer Service Representative',
      started: 'June 2007',
      upto: 'May 2010',
      tasks: [
        "Commenced career at 17, demonstrating a strong work ethic and an early commitment to professional growth.",
        "Managed diverse accounts spanning insurance, mortgage, real estate, telemarketing, and more, showcasing adaptability and versatility.",
        "Gained international experience working as a customer service agent for multiple US-based accounts, contributing to a global skill set.",
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
  link: 'https://github.com/melissadeleonx/tech-journey',
  title2: 'Forked version from Brittany Chiang with contributions from Gaurav Sarage',
  link2: 'https://brittanychiang.com/',
};