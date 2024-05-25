import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

const Banner = ({ home, heading, btn }) => {
  return (
    <div className="gradientBg rounded-xl rounded-br-[80px] md:p-9 px-4 py-9">
      <div className="flex flex-col md:flex-row-reverse justify-between items-center gap-10">
        <motion.div
          variants={fadeIn("down", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
        >
          <img src={home} alt="Home" className="lg:h-[386px]" />
        </motion.div>

        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="md:w-3/5"
        >
          <h2 className="md:text-6xl text-4xl font-bold mb-6 leading-relaxed">
            {heading}
          </h2>

          <div className="space-x-5 space-y-4">
            <button className="btnPrimary">{btn}</button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Banner;
