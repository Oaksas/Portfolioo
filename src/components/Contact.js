import React, { useCallback, useState } from "react";

import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { sendEmail } from "../util";
import { Toaster, toast } from "react-hot-toast";

const Contact = React.memo(() => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();

      try {
        sendEmail(name, email, message);
        toast.success("Successfully sent!");
      } catch (error) {
        toast.error("Some error occurred");
      }
    },
    [name, email, message]
  );

  return (
    <section className="section py-16 lg:section" id="contact">
      <Toaster position="top-center" reverseOrder={false} />;
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          <motion.div
            variants={fadeIn("left", 0.7)}
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
              required
            />
            <input
              className="bg-transparent border-b py-3 outline-none placeholder:text-white focus:border-accent transition-all"
              type="email"
              placeholder="Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <textarea
              className="bg-transparent  border-b py-12 outline-none w-full placeholder:text-white  focus:border-accent  transition-all resize-none mb-12"
              placeholder="Your message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
            <button className="btn btn-lg">Send message</button>
          </motion.form>
        </div>
      </div>
    </section>
  );
});

export default Contact;
