import React, { useState } from "react";

import { motion } from "framer-motion";
import { fadeIn } from "../variants";
const sendEmail = require("../util");

const Contact = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [message, setMessage] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();

    // sendEmail(name, email, message)
    //   .then(() => {
    //     console.log("Email sent successfully!");
    //   })
    //   .catch((error) => {
    //     console.error("Error sending email:", error);
    //   }); // console.log(name, email, message);
  };
  return (
    <section className="section py-16 lg:section" id="contact">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          <motion.div
            variants={fadeIn("right", 0.7)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="flex-1 flex justify-start items-center"
          >
            <div>
              <h4 className="text-xl uppercase text-accent font-medium mb-2  tracking-wide">
                {" "}
                Get in touch
              </h4>
              <h2 className="text-[45px] lg:text-[90px] leading-none mb-12">
                Let's work <br /> together!
              </h2>
            </div>
          </motion.div>
          <motion.form
            variants={fadeIn("left", 0.7)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="flex-1 border rounded-2xl flex flex-col gap-y-6 pb-24 p-6  items-start"
            onSubmit={handleSubmit}
          >
            <input
              className="bg-transparent border-b py-3 outline-none placeholder:text-white focus:border-accent transition-all"
              type="text"
              placeholder="Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              className="bg-transparent border-b py-3 outline-none placeholder:text-white focus:border-accent transition-all"
              type="text"
              placeholder="Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <textarea
              className="bg-transparent  border-b py-12 outline-none w-full placeholder:text-white  focus:border-accent  transition-all resize-none mb-12"
              placeholder="Your message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
            <button className="btn btn-lg" onClick={handleSubmit}>
              Send message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
