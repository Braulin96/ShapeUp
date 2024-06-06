import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

import "./LoginBlock.css";

import { landingMockup } from "../../data/landingMockup";

const LoginBlock = () => {
  const landingMockupData = landingMockup();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showMotivational, setShowMotivational] = useState(false);
  console.log("showMotivational:", showMotivational);

  useEffect(() => {
    if (currentIndex < landingMockupData.length - 1) {
      const timer = setTimeout(() => {
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, 2000);

      return () => clearTimeout(timer);
    } else {
      const timer = setTimeout(() => {
        setShowMotivational(true);
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [currentIndex, landingMockupData.length]);

  return (
    <motion.div className="loginBlock w-screen h-screen text-white bg-black flex justify-center items-center text-[70px] font-extralight relative">
      <motion.div
        animate={{ scale: [1,0] }}
        exit={{ opacity: 0, scale:0 }}
        transition={{
          duration: 2,
          delay: 10,
        }}
        className="border-2 border-black w-auto h-full aspect-square rounded-full flex justify-center items-center
       "
      >
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5}}
        >
          {landingMockupData[currentIndex]}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default LoginBlock;
