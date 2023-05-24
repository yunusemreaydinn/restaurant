import React, { useRef } from "react";
import { SubHeading } from "../../components";
import { images } from "../../constants";
import "./Header.css";
import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";

const typingAnimation = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      ease: [0.6, 0.01, 0.05, 0.95],
      duration: 2,
      delay: 2,
    },
  },
};

const explainProduct = {
  hidden: { opacity: 0, y: "-20px" },
  show: {
    opacity: 1,
    y: "0",
    transition: {
      delay: 2,
      ease: [0.6, 0.01, 0.05, 0.95],
      duration: 1,
    },
  },
};

const buttonProduct = {
  hidden: { opacity: 0, scaleX: 0 },
  show: {
    opacity: 1,
    scaleX: 1,
    transition: {
      duration: 0.8,
      delay: 2.3,
      type: "tween",
      ease: [0.6, 0.01, 0.05, 0.95]
    },
  },
};

const welcomeImg = {
  hidden: {
    opacity: 0,
    scale:0.8,
    y: 400,
  },
  show: {
    opacity: 1,
    y: 0,
    scale:1,
    transition: {
      duration: 2,
      delay: 3,
      ease: [0.6, 0.01, 0.05, 0.95],
    },
  },
};

const Header = () => {
  const targetRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.9], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.8], [1, 0.8]);

  return (
    <>
      <motion.div
        ref={targetRef}
        className="app__header app__wrapper section__padding"
        id="home"
      >

        <motion.div className="app__wrapper_info" >
          <SubHeading title="Chase the new Flavour" />
          <motion.h1
            variants={typingAnimation}
            initial="hidden"
            animate="show"
            className="app__header-h1"
          >
            The Key To Fine Desserts
          </motion.h1>

          <motion.p
            variants={explainProduct}
            initial="hidden"
            animate="show"
            className="p__opensans"
            style={{ margin: "2rem 0" }}
          >
            Sit tellus lobortis sed senectus vivamus molestie. Condimentum
            volutpat morbi facilisis quam scelerisque sapien. Et, penatibus
            aliquam amet tellus{" "}
          </motion.p>

          <motion.button
            variants={buttonProduct}
            initial="hidden"
            animate="show"
            type="button"
            className="custom__button"

          >
            <a href="#menu">Explore Menu</a>
          </motion.button>
        </motion.div>

        <div className="app__wrapper_img welcome-img">
          <motion.img
            style={{ scale, opacity:opacity }}
            variants={welcomeImg}
            initial="hidden"
            animate="show"
            src={images.welcome}
            alt="header_img"
          />
        </div>
      </motion.div>
    </>
  );
};

export default Header;
