import React from "react";
import { motion } from "framer-motion";
import { SubHeading } from "../../components";
import { images } from "../../constants";
import "./Chef.css";

const chefAnimation = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      delay: 1.2,
    },
  },
};

const chefImg = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    delay: 1,
    transition: 1.2,
  },
};

const Chef = () => (
  <div className="app__wrapper section__padding">
    <motion.div
      variants={chefImg}
      initial="hidden"
      whileInView="visible"
      className="app__wrapper_img app__wrapper_img-reverse"
    >
      <img src={images.chef} alt="chef_image" style={{ width: "500px" }} />
    </motion.div>
    <div className="app__wrapper_info">
      <SubHeading title="Chef's word" />
      <motion.h1
        variants={chefAnimation}
        initial="hidden"
        whileInView="visible"
        className="headtext__cormorant"
      >
        What we believe in
      </motion.h1>

      <motion.div
        className="app__chef-content"
        variants={chefAnimation}
        initial="hidden"
        whileInView="visible"
      >
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="quote_image" />
          <p className="p__opensans">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit auctor sit .
          </p>
        </div>
        <p className="p__opensans">
          {" "}
          auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit.
          Nulla scelerisque scelerisque congue ac consequat, aliquam molestie
          lectus eu. Congue iaculis integer curabitur semper sit nunc.{" "}
        </p>
      </motion.div>
    </div>
  </div>
);

export default Chef;
