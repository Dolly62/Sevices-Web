import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import { serviceList, workingProcess } from "../../data/data";
import aboutImg from "../assets/about.png";
import { PiCheckCircleFill } from "react-icons/pi";

const HomeSection3 = () => {
  return (
    <div className="md:px-14 p-4 max-w-s mx-auto space-y-10" id="about">
      <div className="flex flex-col md:flex-row justify-between items-center gap-8">
        <motion.div
          variants={fadeIn("right", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="md:w-1/2"
        >
          <img src={aboutImg} alt="Image" />
        </motion.div>

        <motion.div
          variants={fadeIn("left", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="md:w-2/5"
        >
          <h2 className="md:text-5xl text-3xl font-bold text-primary mb-5 leading-normal">
            Unlocking Business Potential with Our Services
          </h2>
          <p className="text-tertiary text-lg mb-7">
            At Sheetsight, we specialize in unleashing the full potential of
            businesses through our comprehensive suite of data analytics and
            Excel services. Our commitment is to empower your enterprise with
            actionable insights, strategic solutions, and seamless integrations,
            ensuring you not only stay competitive but thrive in today’s dynamic
            business landscape.
          </p>
          <ul className="space-y-2">
            {serviceList.map((data) => (
              <li className="flex items-center gap-x-2 md:text-2xl text-primary">
                <span className="text-green-600">
                  <PiCheckCircleFill />
                </span>
                {data.name}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>

      {/* --------------------------------------------SECOND PART------------------------------- */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-8">
        <motion.div
          variants={fadeIn("right", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="md:w-2/5"
        >
          <h2 className="md:text-5xl text-3xl font-bold text-primary mb-5 leading-normal">
            How we work?
          </h2>
          <p className="text-tertiary text-lg mb-7">
            At Sheetsight, our work process is meticulously designed to ensure
            clarity, collaboration, and success. We believe in understanding
            your unique requirements, assembling the right team, collaboratively
            planning with subject matter experts (SMEs), and working together
            for mutual success.
          </p>
          <button className="btnPrimary">Get Started</button>
        </motion.div>

        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="md:w-1/2"
        >
          <ul className="md:grid md:grid-cols-2 gap-y-7 flex flex-col">
            {workingProcess.map((item) => (
              <li key={item.heading}>
                <h2 className="md:text-xl  font-bold text-primary leading-normal">
                  {item.heading}
                </h2>
                <p className="text-tertiary">{item.para}</p>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </div>
  );
};

export default HomeSection3;
