import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 1)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{
            max: 45,
            speed: 450,
            scale: 1,
          }}
          className="bg-tertiary py-5 px-12 rounded-[20px] min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt="icon" className="w-16 h-16 object-contain" />
          <h3 className="text-white text-center font-bold text-[20px]">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-[17px] text-secondary max-w-3xl leading-[30px]"
      >
        I am a proficient software developer with expertise in TypeScript,
        JavaScript, and frameworks such as React, Node.js, and Three.js. Known
        for being a quick learner and an effective collaborator, I excel at
        developing efficient, scalable, and user-centric solutions tailored to
        address real-world challenges. I am committed to transforming innovative
        ideas into functional and impactful software. Let’s collaborate to turn
        your vision into reality!
      </motion.p>
      {/* Cards  */}

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => {
          return <ServiceCard index={index} key={service.title} {...service} />;
        })}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
