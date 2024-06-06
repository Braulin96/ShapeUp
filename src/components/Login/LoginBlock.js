import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

import "./LoginBlock.css";

import { landingMockup } from "../../data/landingMockup";

const LoginBlock = () => {
  const landingMockupData = landingMockup();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showMotivational, setShowMotivational] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

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

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(true);
    }, 12000); // Start loading animation after the main animation completes

    return () => clearTimeout(timer);
  }, []);

  const handleAnimationComplete = () => {
    setIsLoading(true);
  };

  const loadingText = "ShapeUp...";

  return (
    <motion.div className="loginBlock w-screen h-screen text-white bg-black flex justify-center items-center text-[70px] font-extralight relative">
      <motion.div
        animate={{ scale: [1, 0] }}
        exit={{ opacity: 0, scale: 0 }}
        transition={{
          duration: 2,
          delay: 10,
        }}
        onAnimationComplete={handleAnimationComplete}
        className="border-2 border-black w-auto h-full aspect-square rounded-full flex justify-center items-center"
      >
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          {landingMockupData[currentIndex]}
        </motion.div>
      </motion.div>
      {isLoading && (
        <motion.div className="absolute flex">
          {loadingText.split("").map((letter, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 0.5, 1, 0.5, 0] }}
              transition={{
                duration: 2,
                ease: "easeInOut",
                delay: index * 0.2,
                repeat: Infinity,
              }}
              className="inline-block"
            >
              {letter}
            </motion.span>
          ))}
        </motion.div>
      )}
    </motion.div>
  );
};

export default LoginBlock;
