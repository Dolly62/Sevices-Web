import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import { service } from "../../data/data";

const Service = () => {
  return (
    <div className="my-24 md:px-14 px-4 max-w-screen-2xl mx-auto" id="feature">
      <div className="flex flex-col lg:flex-row justify-between items-start gap-10">
        <motion.div
          variants={fadeIn("right", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="lg:w-1/4"
        >
          <h3 className="text-3xl text-primary font-bold lg:w-1/2 mb-3">
            Why we are better than others
          </h3>
          <p className="text-base text-tertiary">
            At SheetSight, we transform raw data into meaningful insights,
            empowering businesses to make informed decisions. Explore a suite of
            comprehensive data analyst services designed to elevate your data
            game and drive success.
          </p>
        </motion.div>

        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="w-full lg:w-3/4"
        >
          <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 items-start md:gap-12 gap-8">
            {service.map((serv) => (
              <div className="bg-[rgba(255, 255, 255, 0.04)] rounded-[35px] h-96 shadow-3xl p-8 items-center flex justify-center hover:translate-y-4 transition-all duration-300 cursor-pointer">
                <div className="space-y-3">
                  {/* <img src={featureImg} alt="Image" /> */}

                  <h5 className="text-xl font-semibold text-primary px-5 text-center">
                    {serv.heading}
                  </h5>
                  <p className="text-base text-tertiary text-center">{serv.para}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Service;
