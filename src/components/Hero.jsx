import React from "react";
import { motion } from "framer-motion";
import { Autoplay, EffectFade } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";

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
    <section id="hero" className="relative">
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="fade"
        spaceBetween={7}
        slidesPerView={1}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop
        //   onSlideChange={() => setCount(count++)}
        // onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          {" "}
          <div className="sliderImageContainer slider1 bg-[url('https://cdn.front.space/project-Mene-z4ickN/w_1600,f_auto/flavor-house/hero12.png')] w-full h-[100vh] p-10 bg-cover bg-center"></div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className="sliderImageContainer slider2 bg-[url('https://cdn.front.space/project-Mene-z4ickN/w_1600,f_auto/flavor-house/hero13.png')] w-full h-[100vh] p-10 bg-cover bg-center">
            {" "}
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className="sliderImageContainer slider3 bg-[url('https://cdn.front.space/project-Mene-z4ickN/w_1600,f_auto/flavor-house/hero14.png')] w-full h-[100vh] p-10 bg-cover bg-center">
            {" "}
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className="sliderImageContainer slider3 bg-[url('https://cdn.front.space/project-Mene-z4ickN/w_1600,f_auto/flavor-house/hero15.png')] w-full h-[100vh] p-10 bg-cover bg-center">
            {" "}
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className="sliderImageContainer slider3 bg-[url('https://cdn.front.space/project-Mene-z4ickN/w_1600,f_auto/flavor-house/hero16.png')] w-full h-[100vh] p-10 bg-cover bg-center">
            {" "}
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className="sliderImageContainer slider3 bg-[url('https://cdn.front.space/project-Mene-z4ickN/w_1600,f_auto/flavor-house/hero17.png')] w-full h-[100vh] p-10 bg-cover bg-center">
            {" "}
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className="sliderImageContainer slider3 bg-[url('https://cdn.front.space/project-Mene-z4ickN/w_1600,f_auto/flavor-house/hero18.png')] w-full h-[100vh] p-10 bg-cover bg-center">
            {" "}
          </div>
        </SwiperSlide>
        {/* <SwiperSlide>
          {" "}
          <div className="test4"> test</div>
        </SwiperSlide> */}
      </Swiper>
      {/* <main className="bg-[url('/hero.png')] min-h-[100vh]  bg-cover bg-center flex flex-col gap-8 justify-center items-center">
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
      </main> */}
      <div className="absolute top-[50%] left-[50%] z-10 -translate-y-[50%] -translate-x-[50%]">
        <motion.div
          variants={cardVariants}
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.8 }} // Add a delay before the text fades in
          className="w-[350px] mb-6 md:w-[400px] lg:w-[600px]"
        >
          <img className="w-full" src="/flavorLogo_white.svg" alt="" />
        </motion.div>
        <motion.p
          variants={cardVariants}
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.8 }}
          className="tracking-3 text-white text-sm lg:text-lg text-center mb-6"
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
      </div>
    </section>
  );
}

export default Hero;
