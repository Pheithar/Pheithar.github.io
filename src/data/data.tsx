import {
  AcademicCapIcon,
  // CalendarIcon,
  DownloadIcon,
  FlagIcon,
  MapIcon,
  OfficeBuildingIcon,
  SparklesIcon,
  MailIcon,
} from '@heroicons/react/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
// import StackOverflowIcon from '../components/Icon/StackOverflowIcon';
// import TwitterIcon from '../components/Icon/TwitterIcon';
import heroImage from '../images/header-background.jpg';
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
import porfolioImage5 from '../images/portfolio/portfolio-5.jpg';
import porfolioImage6 from '../images/portfolio/portfolio-6.jpg';
import porfolioImage7 from '../images/portfolio/portfolio-7.jpg';
import porfolioImage8 from '../images/portfolio/portfolio-8.jpg';
import porfolioImage9 from '../images/portfolio/portfolio-9.jpg';
import porfolioImage10 from '../images/portfolio/portfolio-10.jpg';
import porfolioImage11 from '../images/portfolio/portfolio-11.jpg';
import profilepic from '../images/profilepic.jpg';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Alejandro Webpage',
  description: "this is the webpage of Alejandro Valverde Mahou",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = typeof SectionId[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I'm Alejandro Valverde Mahou.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        Hey there! I'm a student currently based in Denmark, where I'm pursuing a Master's degree in <strong className="text-stone-100">Human-Centered Artificial</strong> Intelligence. I'm a huge fan of AI and machine learning, but I'm also passionate about exploring new and diverse topics that expand my horizons.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I completed my degree in <strong className="text-stone-100">Computer Engineering at Carlos III University of Madrid</strong>, which was an awesome experience. But now, I'm having a blast living and studying in Copenhagen, where I'm getting to dive even deeper into the exciting world of AI.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg"> 
        I'm really interested in research, and I'm seriously considering doing a PhD. I think that would be an incredible opportunity to contribute something meaningful to the field and create positive change in the world. Plus, it would be a chance to work on some really cool projects and learn a ton along the way.
      </p>
    </>
  ),
  actions: [
    {
      href: '/assets/AVM_CV.pdf',
      text: 'Resume',
      primary: true,
      Icon: DownloadIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `I'm an AI enthusiast with a particular interest in machine learning, deep learning, and computer vision. I'm pursuing a Master's degree in Human-Centered Artificial Intelligence, and I enjoy working with Python and PyTorch. In my free time, I love learning about Norse mythology, hiking, and reading fantasy novels. I'm driven by a desire to make a positive impact through research and innovation, and I'm always excited to collaborate with others to develop innovative solutions.`,
  aboutItems: [
    {label: 'Location', text: 'Copenhagen, Denmark', Icon: MapIcon},
    // {label: 'Age', text: '23', Icon: CalendarIcon},
    {label: 'Nationality', text: 'Spanish', Icon: FlagIcon},
    {label: 'Interests', text: 'Hockey, Norse Mythology, AI', Icon: SparklesIcon},
    {label: 'Study', text: 'DTU', Icon: AcademicCapIcon},
    {label: 'Employment', text: 'ConWX, rapidcreative.io', Icon: OfficeBuildingIcon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Spoken languages',
    skills: [
      {
        name: 'Spanish',
        level: 10,
        color: 'orange',
      },
      {
        name: 'English',
        level: 9,
        color: 'orange',
      },
      {
        name: 'German',
        level: 3,
        color: 'orange',
      },
      {
        name: 'Japanese',
        level: 1,
        color: 'orange',
      },
      {
        name: 'French',
        level: 1,
        color: 'orange',
      }
    ],
  },
  {
    name: 'Programming languages',
    skills: [
      {
        name: 'Python',
        level: 9,
        color: 'red',
      },
      {
        name: 'JavaScript',
        level: 7,
        color: 'red',
      },
      {
        name: 'Bash',
        level: 6,
        color: 'red',
      },
      {
        name: 'C++',
        level: 6,
        color: 'red',
      },
      {
        name: 'C#',
        level: 5,
        color: 'red',
      },
      {
        name: 'Julia',
        level: 5,
        color: 'red',
      },

    ],
  },
  {
    name: 'Data science',
    skills: [
      {
        name: 'Pandas',
        level: 8,
        color: 'green',
      },
      {
        name: 'NumPy',
        level: 8,
        color: 'green',
      },
      {
        name: 'Matplotlib',
        level: 8,
        color: 'green',
      },
      {
        name: 'Scikit-learn',
        level: 6,
        color: 'green',
      },
      {
        name: 'Plotly',
        level: 4,
        color: 'green',
      },
    ],
  },
  {
    name: 'Machine learning',
    skills: [
      {
        name: 'PyTorch',
        level: 8,
        color: 'green',
      },
      {
        name: 'TensorFlow',
        level: 6,
        color: 'green',
      },
      {
        name: 'Keras',
        level: 6,
        color: 'green',
      },
      {
        name: 'Scikit-learn',
        level: 6,
        color: 'green',
      },
      {
        name: 'OpenCV',
        level: 5,
        color: 'green',
      },
    ],
  },
  {
    name: 'Web development',
    skills: [
      {
        name: 'React',
        level: 7,
        color: 'amber',
      },
      {
        name: 'Next.js',
        level: 6,
        color: 'amber',
      },
      {
        name: 'Angular',
        level: 5,
        color: 'amber',
      },
      {
        name: 'Firebase',
        level: 3,
        color: 'amber',
      },
    ],
  },
  {
    name: 'Game development',
    skills: [
      {
        name: 'Unity',
        level: 6,
        color: 'blue',
      },
      {
        name: 'C#',
        level: 6,
        color: 'blue',
      },
      {
        name: 'Godot',
        level: 5,
        color: 'blue',
      },
      {
        name: 'Blender',
        level: 4,
        color: 'blue',
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Project title 1',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage1,
  },
  {
    title: 'Project title 2',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage2,
  },
  {
    title: 'Project title 3',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage3,
  },
  {
    title: 'Project title 4',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage4,
  },
  {
    title: 'Project title 5',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage5,
  },
  {
    title: 'Project title 6',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage6,
  },
  {
    title: 'Project title 7',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage7,
  },
  {
    title: 'Project title 8',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage8,
  },
  {
    title: 'Project title 9',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage9,
  },
  {
    title: 'Project title 10',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage10,
  },
  {
    title: 'Project title 11',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage11,
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'September 2021 - February 2024',
    location: 'Denmark Technical University (DTU)',
    title: 'MSc Eng in Human-Centered Artificial Intelligence',
    content: <p>I completed my MSc in Human-Centered AI at DTU, specializing in machine learning, optimization algorithms, and data science with a focus on computer vision. I gained experience working with cutting-edge technologies such as transformers and diffusion models, and completed coursework in deep learning, advance image analysis and optimization using metaheuristics among others.</p>,
  },
  {
    date: 'September 2017 - July 2021',
    location: 'Universidad Carlos III de Madrid (UC3M)',
    title: 'Bachelor in Computer Science and Engineering',
    content: <p>I finished my Bachelor degree in Computer Science and Engineering where I focused in Artificial Intelligence, Software Development, and Web Development. My Bachelor thesis on Generative Adversarial Networks received top honors with a 10/10 rating.</p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'February 2023 - Present',
    location: 'rapidcreative.io',
    title: 'Tech team member and co-founder',
    content: (
      <p>
        Working in the tech team at rapidcreatve.io as a full-stack developer, contributing to the development of web applications and user interfaces using Next.js as frontend framework and Python as backend language. I am also co-founder of the company, that was born in the X-Tech program at DTU.
      </p>
    ),
  },
  {
    date: 'May 2022 - Present',
    location: 'ConWX',
    title: 'Student Assistant in the Engineering Team',
    content: (
      <p>
        I am currently working as a student assistant in the engineering team at ConWX, where I am developing a new web application for the company using React.
      </p>
    ),
  },
  {
    date: 'June 2020 - September 2020',
    location: 'Global incubator',
    title: 'Internship in FrontEnd developer',
    content: (
      <p>
        Interned as a Frontend Developer with focus on React, contributing to the development of web applications and user interfaces using React as frontend framework.
      </p>
    ),
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'John Doe',
      text: 'Use this as an opportunity to promote what it is like to work with you. High value testimonials include ones from current or past co-workers, managers, or from happy clients.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg',
    },
    {
      name: 'Jane Doe',
      text: 'Here you should write some nice things that someone has said about you. Encourage them to be specific and include important details (notes about a project you were on together, impressive quality produced, etc).',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg',
    },
    {
      name: 'Someone else',
      text: 'Add several of these, and keep them as fresh as possible, but be sure to focus on quality testimonials with strong highlights of your skills/work ethic.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: "Thank you for taking the time to view my profile. If you have any questions or would like to discuss potential opportunities, please don't hesitate to reach out. I can be contacted via email, and I'm always open to connecting on LinkedIn. Looking forward to hearing from you!",
  items: [
    {
      type: ContactType.Email,
      text: 'avalverdemahou@gmail.com',
      href: 'mailto:avalverdemahou@gamil.com',
    },
    // {
    //   type: ContactType.Location,
    //   text: 'Copenhagen, Denmark',
    //   href: 'https://www.google.com/maps/place/Copenhague/@55.6713442,12.5237846,12z/data=!3m1!4b1!4m6!3m5!1s0x4652533c5c803d23:0x4dd7edde69467b8!8m2!3d55.6760968!4d12.5683372!16zL20vMDFsZnk',
    // },
    // {
    //   type: ContactType.Instagram,
    //   text: '@alemahou',
    //   href: 'https://www.instagram.com/alemahou/',
    // },
    {
      type: ContactType.Github,
      text: 'Pheithar',
      href: 'https://github.com/Pheithar'
    },
    {
      type: ContactType.LinkedIn,
      text: 'Alejandro Valverde Mahou',
      href: 'https://www.linkedin.com/in/pheithar/'
    }
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/Pheithar'},
  // {label: 'Stack Overflow', Icon: StackOverflowIcon, href: 'https://stackoverflow.com/users/8553186/tim-baker'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/pheithar/'},
  {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/alemahou/'},
  {label: 'Email', Icon: MailIcon, href: 'mailto:avalverdemahou@gmail.com'},
  // {label: 'Twitter', Icon: TwitterIcon, href: 'https://twitter.com/TimBakerx'},
];
