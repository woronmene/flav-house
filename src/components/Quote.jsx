import React from "react";
import { motion } from "framer-motion";

function Quote() {
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
        // type: "spring",
        ease: "easeOut",
        // bounce: 0.4,
        duration: 0.8,
      },
    },
  };
  return (
    <section class="w-full py-40 flex flex-col gap-20 items-center justify-center">
      <motion.div
        variants={cardVariants}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.8 }}
        class=" w-[40px] md:w-[50px] "
      >
        <img class="w-full text-center" src="/quote.svg" alt="" />
      </motion.div>

      <motion.p
        variants={cardVariants}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.8 }}
        class="text-[#FF6244] text-sm  md:text-[20px] tracking-5  text-center"
      >
        Nigerian cuisine: a flavorful tapestry of <br /> culture on every plate.
      </motion.p>
    </section>
  );
}

export default Quote;
