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
  git,
  threejs,
  jlpt,
  java,
  toiec,
  itf,
  cargame,
  portfolio,
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
    id: "experiences",
    title: "Experiences",
  },
  {
    id: "project",
    title: "Project",
  },
  {
    id: "hobbies",
    title:"Hobbies",
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
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
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
      "Developed a passion for software development and problem-solving.",
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
    title: "Personal Projects",
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


const projects = [
  {
    name: "2D Car Game",
    description:
      "A desktop-based 2D car racing game built with Java Swing featuring obstacle avoidance, score tracking, and responsive keyboard controls.",
    tags: [
      {
        name: "Java",
        color: "blue-text-gradient",
      },
      {
        name: "Swing",
        color: "green-text-gradient",
      },
    ],
    image: cargame,
    source_code_link: "https://github.com/D-Sourab56/2d-cargame",
  },
  {
    name: "Personal Portfolio",
    description:
      "A responsive personal portfolio website built with React, Tailwind CSS, Three.js, Framer Motion, and EmailJS to showcase my skills, certifications, and projects.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind",
        color: "green-text-gradient",
      },
      {
        name: "Three.js",
        color: "pink-text-gradient",
      },
    ],
    image: portfolio,
    source_code_link: "https://github.com/D-Sourab56/My_Website",
  },
];
const hobbies = [
  {
    title: "🏐 Volleyball",
    description:
      "I enjoy playing volleyball to stay active, improve teamwork, and strengthen communication skills.",
  },
  {
    title: "🎬 Photo & Video Editing",
    description:
      "I enjoy editing photos and videos and designing posters, banners, and promotional content.",
  },
  {
    title: "🎌 Anime",
    description:
      "I enjoy watching anime, especially One Piece and Haikyuu!!, which inspire perseverance, teamwork, and personal growth.",
  },
  {
    title: "🎮 Gaming",
    description:
      "I enjoy playing games in my free time and exploring game mechanics, which also inspires my own development projects.",
  },
];
export { services, technologies, experiences, projects, hobbies };