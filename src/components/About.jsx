import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt
    tiltMaxAngleX={20}
    tiltMaxAngleY={20}
    scale={1.05}
    transitionSpeed={400}
    className="xs:w-[250px] w-full"
  >
    <motion.div
      variants={fadeIn("right", "spring", index * 0.3, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div className="bg-tertiary rounded-[20px] py-8 px-8 min-h-[260px] flex justify-evenly items-center flex-col">
        <img
          src={icon}
          alt={title}
          className="w-16 h-16 object-contain"
        />

        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      {/* Section Heading */}
      <motion.div
        variants={textVariant()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="text-center"
      >
        <p className={styles.sectionSubText}>
          Introduction
        </p>

        <h2 className={styles.sectionHeadText}>
          Overview.
        </h2>
      </motion.div>

      {/* Description */}
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="mt-8 max-w-4xl mx-auto text-center text-secondary text-[18px] leading-[34px]"
      >
        Hello! I'm <span className="text-white font-semibold">Indra Pokhrel</span>,
        a Web and Application Development student currently studying in Japan.
        I enjoy designing and developing web applications 
        while continuously exploring new technologies.

        <br />
        <br />

        Throughout my learning journey, I have gained experience with HTML, CSS,
        JavaScript, React, Tailwind CSS, Java, SQL, Git, and Three.js. I also
        hold certifications including <span className="text-white">JLPT N2</span>,
        <span className="text-white"> Oracle Java Bronze</span>,
        <span className="text-white"> TOEIC</span>, and
        <span className="text-white"> CompTIA Tech+</span>.

        <br />
        <br />

        I love transforming ideas into real-world projects, improving my
        programming skills, and learning new technologies every day. My goal is
        to become a software engineer who creates innovative and meaningful
        digital solutions.
      </motion.p>

      {/* Service Cards */}
      <div className="mt-20 flex flex-wrap justify-center gap-10">
        {services.map((service, index) => (
          <ServiceCard
            key={service.title}
            index={index}
            {...service}
          />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");