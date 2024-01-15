import React from "react";
import { motion } from "framer-motion";

function Hero() {
  const cardVariants = {
    offscreen: {
      y: 100,
      opacity: 0,
    },
    onscreen: {
      y: 0,
      opacity: 1,
      //   rotate: -10,
      transition: {
        ease: "easeOut",
        // bounce: 0.4,
        duration: 0.8,
      },
    },
  };
  return (
    <section id="hero" className="">
      <main className="bg-[url('/hero.png')] min-h-[100vh]  bg-cover bg-center flex flex-col gap-8 justify-center items-center">
        <motion.div
          variants={cardVariants}
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.8 }} // Add a delay before the text fades in
          className="w-[500px] md:w-[400px] lg:w-[600px]"
        >
          <img className="w-full" src="/flavorLogo_white.svg" alt="" />
        </motion.div>
        <motion.p
          variants={cardVariants}
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.8 }}
          className="tracking-3 text-white text-sm lg:text-lg text-center"
        >
          Exceptional Nigerian Experience on the go!
        </motion.p>
        <motion.p
          variants={cardVariants}
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.8 }}
          className="tracking-3 text-white text-xs lg:text-md text-center"
        >
          Appetisers, Main Course, Soups, Desert, Drinks and Custom Orders.
        </motion.p>
      </main>
    </section>
  );
}

export default Hero;
