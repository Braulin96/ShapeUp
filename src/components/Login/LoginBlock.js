import PropTypes from "prop-types";
import { motion } from "framer-motion";
import "./LoginBlock.css";

const LoginBlock = () => {
  return (
    <motion.div className="loginBlock w-screen h-screen text-black flex justify-center items-center text-[70px] font-extralight">
      <motion.div
        animate={{
          scale: [4, 3, 2, 1, 0],
          //rotate: [0, 90, 180, 360],
          opacity: [1, 0.8, 0.5, 0.3, 0],
          // borderRadius: ["20%", "20%", "50%", "50%", "20%"],
        }}
        transition={{
          duration: 10, // Duration of the entire animation cycle
          delay: 1, // Delay before the animation starts
        }}
      >
        Login Page
      </motion.div>
    </motion.div>
  );
};

LoginBlock.propTypes = {};

export default LoginBlock;
