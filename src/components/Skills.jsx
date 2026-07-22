import { motion } from "framer-motion";

import { styles } from "../styles";
import { skillCategories } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant, fadeIn } from "../utils/motion";

const Skills = () => {
  return (
    <>
      {/* Section Heading */}
      <motion.div
        variants={textVariant()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <p className={styles.sectionSubText}>What I Can Do</p>
        <h2 className={styles.sectionHeadText}>Skills</h2>
      </motion.div>

      {/* Description */}
      <motion.p
        variants={fadeIn("", "", 0.2, 1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="mt-6 max-w-4xl text-secondary text-[17px] leading-[30px]"
      >
        Throughout my learning journey, I have developed technical and
        professional skills through academic projects, certifications, and
        continuous self-learning. I enjoy building modern web applications,
        solving real-world problems, and exploring new technologies to improve
        as a software developer.
      </motion.p>

      {/* Skill Cards */}
      <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
        {skillCategories.map((category, index) => (
          <motion.div
            key={category.title}
            variants={fadeIn("up", "spring", index * 0.2, 0.75)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="bg-tertiary rounded-2xl p-6 shadow-card"
          >
            <h3 className="text-white text-[22px] font-bold mb-5">
              {category.title}
            </h3>

            <ul className="space-y-3">
              {category.skills.map((skill) => (
                <li
                  key={skill}
                  className="flex items-center gap-2 text-secondary text-[16px]"
                >
                  <span className="text-[#915EFF]">✓</span>
                  {skill}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Skills, "skills");