import React from "react";
import { motion } from "framer-motion";

function Menu() {
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
    <motion.section
      className="w-full flex flex-col px-10 lg:px-20 py-10"
      id="menu"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 text-center">
        <motion.div
          variants={cardVariants}
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.8 }}
          className="reveal hover:-translate-y-2 cursor-pointer aspect-video z-1  w-full bg-[url('/hero.png')] bg-cover bg-center"
        ></motion.div>
        <motion.div
          variants={cardVariants}
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.8 }}
          className="reveal hover:-translate-y-2 cursor-pointer aspect-video  w-full bg-[url('/hero.png')] bg-cover bg-center"
        ></motion.div>
        <motion.div
          variants={cardVariants}
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.8 }}
          className="reveal hover:-translate-y-2 cursor-pointer aspect-video  w-full bg-[url('/hero.png')] bg-cover bg-center"
        ></motion.div>
      </div>

      <motion.p
        variants={cardVariants}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.8 }}
        className="belinda-font text-[20px] text-[#FF6244] text-center py-20 tracking-5"
      >
        You should try this!
      </motion.p>

      <motion.div
        variants={cardVariants}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.8 }}
        className="grid grid-cols-1 lg:grid-cols-2 gap-10  mx-auto py-10"
      >
        <div className="flex gap-2 items-center">
          <p className="tracking-5 text-[#E3583D]">Nigerian Jollof</p>
          <hr className=" w-[200px] border border-t border-gray-700" />
          <p className="tracking-5 ">7500</p>
        </div>
        <div className="flex gap-2 items-center">
          <p className="tracking-5 text-[#E3583D]">Nigerian Jollof</p>
          <hr className=" w-[200px] border border-t border-gray-700" />
          <p className="tracking-5 ">7500</p>
        </div>
        <div className="flex gap-2 items-center">
          <p className="tracking-5 text-[#E3583D]">Nigerian Jollof</p>
          <hr className=" w-[200px] border border-t border-gray-700" />
          <p className="tracking-5 ">7500</p>
        </div>
        <div className="flex gap-2 items-center">
          <p className="tracking-5 text-[#E3583D]">Nigerian Jollof</p>
          <hr className=" w-[200px] border border-t border-gray-700" />
          <p className="tracking-5 ">7500</p>
        </div>
      </motion.div>
    </motion.section>
  );
}

export default Menu;
