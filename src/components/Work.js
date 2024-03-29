import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
// import Img1 from "../assets/portfolio-img1.png";
import Img1 from "../assets/p0.png";
import Img2 from "../assets/p3.png";
import Img3 from "../assets/p4.png";
import Img4 from "../assets/allo.png";

const Work = React.memo(() => {
  return (
    <section className="section" id="work">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-x-10">
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0"
          >
            <div>
              <h2 className="h2 leading-tight text-accent">
                {" "}
                My latest <br /> works
              </h2>
              <p className="max-w-sm mb-16">
                Here are some ... Take a look at my resume and Github for more
                ...
              </p>
              {/* <button className="btn btn-sm">View all projects</button> */}
            </div>
            <div className="group relative overflow-hidden  border-2 border-white/50 rounded-xl">
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
              <img
                className="group-hover:scale-125 transition-all  duration-500"
                src={Img1}
                alt=""
              />
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                <span className="text-gradient"> Web Application</span>
              </div>
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                <span className="text-3xl text-white">Media Agency</span>
              </div>
              <div>
                <span></span>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={fadeIn("left", 0.7)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="flex-1 flex flex-col gap-y-10"
          >
            <div className="group relative overflow-hidden  border-2 border-white/50 rounded-xl">
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
              <img
                className="group-hover:scale-125 transition-all  duration-500"
                src={Img4}
                alt=""
              />
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                <span className="text-gradient">Web Application</span>
              </div>
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">

                <span className="text-3xl text-white">   <a href="https://www.allo.gg" target="_blank">Allo</a> </span>
              </div>
              <div className="absolute -bottom-full left-12 group-hover:bottom-8 transition-all duration-700 z-50">
                <span className="text-l text-white mt-5 block">One place to conmmunicate with your team. </span>

              </div>


              <div>
                <span></span>
              </div>
            </div>

            <div className="group relative overflow-hidden  border-2 border-white/50 rounded-xl">
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
              <img
                className="group-hover:scale-125 transition-all  duration-500"
                src={Img3}
                alt=""
              />
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                <span className="text-gradient"> Web Application</span>
              </div>
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                <span className="text-3xl text-white">
                  Advertisement Platform
                </span>
              </div>
              <div>
                <span></span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
});

export default Work;
