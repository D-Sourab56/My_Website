import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.3, 0.75)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      <Tilt
        tiltMaxAngleX={20}
        tiltMaxAngleY={20}
        scale={1.03}
        transitionSpeed={400}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
      >
        <div className="relative w-full h-[230px]">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-2xl"
          />

          <div className="absolute inset-0 flex justify-end m-3">
            <button
              onClick={() => window.open(source_code_link, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer hover:scale-110 transition"
            >
              <img
                src={github}
                alt="GitHub"
                className="w-1/2 h-1/2 object-contain"
              />
            </button>
          </div>
        </div>

        <div className="mt-5">
          <h3 className="text-white text-[24px] font-bold">
            {name}
          </h3>

          <p className="mt-2 text-secondary text-[14px] leading-6">
            {description}
          </p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag.name}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </span>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div
        variants={textVariant()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <p className={styles.sectionSubText}>
          My Recent Work
        </p>

        <h2 className={styles.sectionHeadText}>
          Projects
        </h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="mt-4 max-w-3xl text-secondary text-[17px] leading-[30px]"
      >
        These projects demonstrate my ability to design and develop practical
        applications using modern technologies. Each project reflects my
        continuous learning, problem-solving skills, and passion for software
        development.
      </motion.p>

      <div className="mt-16 flex flex-wrap gap-7 justify-center">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.name}
            index={index}
            {...project}
          />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "project");