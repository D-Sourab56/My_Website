import { motion } from "framer-motion";

import { styles } from "../styles";
import { hobbies } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant, fadeIn } from "../utils/motion";

const HobbyCard = ({ hobby, index }) => (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.2, 0.75)}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true }}
    className="bg-tertiary p-7 rounded-2xl shadow-card hover:scale-105 transition duration-300"
  >
    <h3 className="text-white text-[24px] font-bold">
      {hobby.title}
    </h3>

    <p className="mt-4 text-secondary text-[15px] leading-7">
      {hobby.description}
    </p>
  </motion.div>
);

const Hobbies = () => {
  return (
    <>
      <motion.div
        variants={textVariant()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="text-center"
      >
        <p className={styles.sectionSubText}>
          Beyond Programming
        </p>

        <h2 className={styles.sectionHeadText}>
          Hobbies
        </h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="mt-4 max-w-3xl mx-auto text-center text-secondary text-[17px] leading-[30px]"
      >
        Outside of software development, I enjoy activities that help me stay
        creative, motivated, and continuously improve both personally and
        professionally.
      </motion.p>

      <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-7">
        {hobbies.map((hobby, index) => (
          <HobbyCard
            key={hobby.title}
            hobby={hobby}
            index={index}
          />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Hobbies, "hobbies");