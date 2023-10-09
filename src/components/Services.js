import React from "react";

import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const services = [
  {
    name: "UI/UX Design",
  },
  {
    name: "Front End Development",
  },
  {
    name: "Back End  Development",
  },

  {
    name: "Consultancy",
  },
];
const Services = React.memo(() => {
  return (
    <section className="section" id="services">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="flex-1 lg:bg-services lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0"
          >
            <h2 className="h2 text-accent mb-6">What I Do.</h2>
            <h3 className="h3 max-w-[455px] mb-16">
              I'm a Full Stack Developer with over 5 years of experience.
            </h3>
            <button className="btn btn-sm">
              <a href="#work">See my work</a>{" "}
            </button>
          </motion.div>
          <motion.div
            variants={fadeIn("left ", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="flex-1"
          >
            <div className="">
              {services.map((service, index) => {
                const { name, description, link } = service;
                return (
                  <div
                    className="border-b border-white/20 h-[140px] mb-[38px] flex"
                    key={index}
                  >
                    <div className="max-w-[476px]">
                      <h4 className="text-[20px] tracking-wider font-primary font-semibold mb-6">
                        {name}
                      </h4>
                    </div>
                    {/* <div className="flex flex-col flex-1 items-end">
                      <a
                        href={link}
                        className="btn w-9 h-9 mb-[42px] flex justify-center items-center"
                      >
                        {" "}
                        <BsArrowUpRight />
                      </a>
                      {/* <a href={link} className="text-gradient text-sm"></a> */}
                    {/* </div>  */}
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
});

export default Services;
