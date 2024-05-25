import React, { useState } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import { PiCheckCircleFill } from "react-icons/pi";

const Pricing = () => {
  const [isYearly, setIsYearly] = useState(false);

  const packages = [
    {
      name: "INDIVIDUAL",
      monthlyPrice: 999,
      yearlyPrice: 199,
      description:
        "Maximize efficiency with our $999/month Individual Plan. Tailored services include SLA adherence, timezone flexibility, and seamless collaboration across teams. Elevate your work experience with our comprehensive solution.",
      listItem: [
        {
          heading: "Work as per agreed Service Level Agreements (SLAs).",
        },
        {
          heading: "Availability within our specified time zone.",
        },
        {
          heading: "Capability to collaborate with multiple teams.",
        },
      ],
    },
    {
      name: "TEAM",
      monthlyPrice: 1800,
      yearlyPrice: 399,
      description:
        "Supercharge your team’s productivity with our $1800/month Team Plan. Enjoy SLA-aligned services, project ownership, efficient collaboration, and 24/5 accessibility. Elevate your team’s performance with our comprehensive solution.",

      listItem: [
        {
          heading: "Work as per agreed Service Level Agreements (SLAs).",
        },
        {
          heading: "Project ownership on your behalf.",
        },
        {
          heading: "Collaboration with other teams for enhanced efficiency.",
        },
        {
          heading: "Availability 24/5 for seamless communication.",
        },
      ],
    },
    {
      name: "PROJECT",
      monthlyPrice: 4000,
      yearlyPrice: 499,
      description:
        "Empower your projects with our Project Plan at $4000 per month. Benefit from tailored services, including adherence to SLAs, project ownership, efficient collaboration with other teams, round-the-clock accessibility, priority support, and detailed reporting. Maximize your project’s success with our comprehensive solution.",

      listItem: [
        {
          heading: "Work as per agreed Service Level Agreements (SLAs).",
        },
        {
          heading: "Project ownership on your behalf.",
        },
        {
          heading: "Collaboration with other teams for enhanced efficiency.",
        },
      ],
    },
  ];

  return (
    <div className="md:px-14 p-4 max-w-s mx-auto py-10" id="pricing">
      <div className="text-center">
        <h2 className="md:text-5xl text-3xl font-extrabold text-primary mb-2">
          Cost Efficiency Solutions
        </h2>
        <p className="text-tertiary md:w-1/3 mx-auto px-4">
          Realize substantial savings, up to 60%, when you entrust your
          operations to us. Our solutions not only streamline processes but also
          offer cost-effective measures, optimizing your budget effectively.
        </p>

        <div className="mt-16">
          <label
            htmlFor="toggle"
            className="inline-flex items-center cursor-pointer"
          >
            <span className="mr-8 text-2xl font-semibold">Monthly</span>
            <div className="w-14 h-6  bg-gray-300 rounded-full transition duration-200 ease-in-out">
              <div
                className={`w-6 h-6 rounded-full ${
                  isYearly ? "bg-primary ml-8" : "bg-gray-500"
                }`}
              ></div>
            </div>
            <span className="ml-8 text-2xl font-semibold">Yearly</span>
          </label>

          <input
            type="checkbox"
            id="toggle"
            className="hidden"
            checked={isYearly}
            onChange={() => setIsYearly(!isYearly)}
          />
        </div>
      </div>

      <motion.div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.5 }}
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-20 md:w-11/12 mx-auto"
      >
        {packages.map((pkg) => (
          <div
            key={pkg.name}
            className="border py-10 md:px-6 px-4 rounded-lg shadow-3xl"
          >
            <h3 className="text-3xl font-bold text-center text-primary">
              {pkg.name}
            </h3>
            <p className="text-tertiary my-5">{pkg.description}</p>
            <p className="mt-5 text-center text-secondary text-4xl font-bold">
              {isYearly ? `$${pkg.yearlyPrice}` : `$${pkg.monthlyPrice}`}
              <span className="text-base text-tertiary font-medium">
                /{isYearly ? "year" : "month"}
              </span>
            </p>

            <ul className="mt-4 space-y-2 px-4">
              {pkg.listItem.map((items) => (
                <li className="flex gap-3 items-center" key={items.heading}>
                  <span className="text-green-600 text-xl" >
                    <PiCheckCircleFill />
                  </span>
                  {items.heading}
                </li>
              ))}
            </ul>

            <div className="w-full mx-auto mt-8 flex items-center justify-center">
              <button className="btnPrimary">Get Started</button>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Pricing;
