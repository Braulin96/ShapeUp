import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import "./LoginBlock.css";

const LoginBlock = () => {
  const [showSecond, setShowSecond] = useState(false);

  useEffect(() => {
    // Set a timeout to switch the state after the first animation completes
    const timer = setTimeout(() => {
      setShowSecond(true);
    }, 21000); // 20 seconds for animation + 1 second delay

    return () => clearTimeout(timer); // Cleanup the timer on component unmount
  }, []);

  return (
    <motion.div className="loginBlock w-screen h-screen text-black flex justify-center items-center text-[70px] font-extralight relative">
      {!showSecond && (
        <motion.div
          className="absolute"
          animate={{
            scale: [0, 2, 4, 2, 0],
            opacity: [0, 0.5, 1, 0.5, 0],
          }}
          transition={{
            duration: 20, // Duration of the entire animation cycle
            delay: 1, // Delay before the animation starts
          }}
        >
          Let's workout!
        </motion.div>
      )}
      {showSecond && (
        <motion.div
          className="absolute"
          animate={{
            scale: [0, 1],
            opacity: [0, 1],
          }}
          transition={{
            duration: 2, // Duration of the animation cycle
          }}
        >
          Here we go
        </motion.div>
      )}
    </motion.div>
  );
};

LoginBlock.propTypes = {};

export default LoginBlock;
