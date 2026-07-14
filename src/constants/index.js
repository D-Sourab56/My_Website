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
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  jlpt,
  java,
  toiec,
  itf
} from "../assets";

export const navLinks = [
  {
    id: "home",
    title: "Home",
  },
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Programmer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
  {
    name:"jlpt",
    icon: jlpt,
  },
];

const experiences = [
  {
    title: "Started My Programming Journey",
    company_name: "Self Learning",
    icon: html,
    iconBg: "#383E56",
    date: "2025",
    points: [
      "Began learning the fundamentals of programming and web development.",
      "Studied HTML, CSS, and JavaScript while building small personal projects.",
      "Developed a passion for creation.",
    ],
  },
  {
    title: "JLPT N2 Certification",
    company_name: "Japanese Language Proficiency Test",
    icon: jlpt,
    iconBg: "#E6DEDD",
    date: "December 2024",
    points: [
      "Successfully passed the Japanese Language Proficiency Test (JLPT) N2.",
      "Strengthened Japanese communication skills for academic and professional environments.",
      "Improved the ability to communicate confidently in Japanese.",
    ],
  },
  {
    title: "Web & Application Development Student",
    company_name: "Okinawa Business Foreign Language Academy",
    icon: reactjs,
    iconBg: "#383E56",
    date: "2025 - Present",
    points: [
      "Currently studying Web and Application Development in Japan.",
      "Learning React, JavaScript, Java, SQL, Tailwind CSS, Git, and modern web technologies.",
      "Building responsive websites and interactive applications through hands-on projects.",
    ],
  },
  {
    title: "Oracle Certified Java Programmer, Bronze SE",
    company_name: "Oracle",
    icon: java,
    iconBg: "#E6DEDD",
    date: "February 2026",
    points: [
      "Earned the Oracle Certified Java Programmer, Bronze SE certification.",
      "Validated knowledge of Java programming fundamentals and object-oriented programming.",
      "Applied Java skills through coursework and personal programming projects.",
    ],
  },
  {
    title: "TOEIC Listening & Reading Test",
    company_name: "Educational Testing Service (ETS)",
    icon: toiec,
    iconBg: "#383E56",
    date: "March 2026",
    points: [
      "Achieved a TOEIC Listening & Reading score of 895.",
      "Demonstrated strong English communication and reading comprehension skills.",
      "Prepared for working in international and multicultural environments.",
    ],
  },
  {
    title: "CompTIA Tech+",
    company_name: "CompTIA",
    icon: itf,
    iconBg: "#E6DEDD",
    date: "April 2026",
    points: [
      "Earned the CompTIA Tech+ certification.",
      "Developed a solid understanding of IT concepts, hardware, software, networking, and security fundamentals.",
      "Strengthened the technical foundation for a career in software development and IT.",
    ],
  },
  {
    title: "Portfolio & Personal Projects",
    company_name: "Continuous Learning",
    icon: web,
    iconBg: "#383E56",
    date: "Present",
    points: [
      "Developing modern web applications using React, Tailwind CSS, and JavaScript.",
      "Learning Three.js, React Three Fiber, and Framer Motion to create interactive 3D websites.",
      "Continuously expanding my skills by building personal projects and exploring new technologies.",
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
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };