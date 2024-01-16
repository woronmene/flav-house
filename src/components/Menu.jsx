import React from "react";
import { motion } from "framer-motion";

function Menu({ menu, images }) {
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

  images.map((image) => {
    console.log(
      `https://cdn.front.space/project-Mene-z4ickN/w_400,f_auto/flavor-house${image.url}`
    );
  });

  return (
    <motion.section
      className="w-full flex flex-col px-10 lg:px-20 py-10"
      id="menu"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 text-center">
        {images.map((image) => (
          <motion.div
            variants={cardVariants}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.8 }}
            className={`reveal hover:-translate-y-2 cursor-pointer aspect-video z-1  w-full bg-[url('https://cdn.front.space/project-Mene-z4ickN/w_400,f_auto/flavor-house${image.url}')] bg-cover bg-center`}
            style={{
              backgroundImage: `url('https://cdn.front.space/project-Mene-z4ickN/w_1600/f_webp/flavor-house${image.url}')`,
            }}
          ></motion.div>
        ))}
        {/* <motion.div
          variants={cardVariants}
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.8 }}
          className={`reveal hover:-translate-y-2 cursor-pointer aspect-video z-1  w-full bg-[url('/hero.png')] bg-cover bg-center`}
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
        ></motion.div> */}
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
        {menu.map((item) => (
          <div className="flex gap-2 items-center">
            <p className="tracking-5 text-[#E3583D]">{item.name}</p>
            <hr className=" w-[200px] border border-t border-gray-700" />
            <p className="tracking-5 ">{item.price}</p>
          </div>
        ))}
        {/* <div className="flex gap-2 items-center">
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
        </div> */}
      </motion.div>
    </motion.section>
  );
}

export default Menu;
